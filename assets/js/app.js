/* =========================================================================
   Pinewood BLAST Adult Greek — app shell, router and page renderers
   ========================================================================= */
(function () {
  'use strict';

  var DAYS = window.GREEK.days || [];
  var REF = window.GREEK.ref || {};

  /* ---------------- tiny helpers ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* {{g:Καλημέρα}} -> styled Greek + play button */
  function md(html) {
    if (!html) return '';
    return String(html).replace(/\{\{g:([^}]+)\}\}/g, function (_, g) {
      var t = g.trim();
      return '<span class="gr">' + esc(t) + '</span>';
    });
  }
  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ς/g, 'σ')
      .replace(/[.,;:!;·"'“”‘’()\-–—]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function weekName(w) {
    return 'Week ' + w;
  }

  /* ---------------- persistence ---------------- */
  var KEY = 'greek-course-v1';
  var state = { done: {}, scores: {} };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var saved = JSON.parse(raw);
      state.done = saved.done || {};
      state.scores = saved.scores || {};
    }
  } catch (e) { /* storage blocked (e.g. shared preview): run in memory */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function doneCount() { return Object.keys(state.done).filter(function (k) { return state.done[k]; }).length; }

  function completeDay(day) {
    state.done[day] = true;
    save();
    paintChrome();
    toast('Μπράβο! Day ' + day + ' marked as complete. ✓');
  }

  /* ---------------- teacher faces ---------------- */
  var teacherTurns = {};
  document.addEventListener('click', function (e) {
    var face = e.target.closest('[data-teacher-face]');
    if (!face) return;
    var id = face.getAttribute('data-teacher-face');
    var t = window.TEACHERS && window.TEACHERS[id];
    if (!t) return;
    e.preventDefault();
    var block = face.closest('.teacher');
    if (block) {
      var nextI = (Number(block.getAttribute('data-tip-i') || 0) + 1) % t.tips.length;
      var tip = t.tips[nextI];
      block.setAttribute('data-tip-i', nextI);
      var tipEl = block.querySelector('[data-tip]');
      var grEl = block.querySelector('.teacher-gr .gr');
      if (tipEl) tipEl.textContent = tip.en;
      if (grEl) grEl.textContent = tip.gr;
      block.classList.add('pop');
      setTimeout(function () { block.classList.remove('pop'); }, 400);
      return;
    }
    var pair = face.closest('.pair-item');
    if (pair) {
      var turn = teacherTurns[id] || 0;
      var tip2 = t.tips[turn % t.tips.length];
      teacherTurns[id] = turn + 1;
      var box = document.querySelector('[data-pair-bubble]');
      if (!box) return;
      box.querySelector('.who').textContent = t.name + ': ';
      box.querySelector('.what').textContent = tip2.en + ' ';
      box.querySelector('[data-pair-gr]').textContent = tip2.gr;
      box.classList.add('show');
      face.parentNode.classList.add('pop');
      setTimeout(function () { face.parentNode.classList.remove('pop'); }, 400);
    }
  });

  /* ---------------- chrome ---------------- */
  var sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menuBtn');

  function closeMenu() {
    sidebar.classList.remove('open');
    scrim.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  menuBtn.addEventListener('click', function () {
    var open = sidebar.classList.toggle('open');
    scrim.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  scrim.addEventListener('click', closeMenu);

  function paintChrome() {
    $('#streakChip').textContent = doneCount() + ' / ' + DAYS.length;
    $$('#navDays a').forEach(function (a) {
      var d = Number(a.getAttribute('data-day'));
      a.classList.toggle('done', !!state.done[d]);
    });
  }

  function buildNav() {
    var groups = {};
    DAYS.forEach(function (d) {
      (groups[d.week] = groups[d.week] || []).push(d);
    });
    var html = '';
    Object.keys(groups).sort().forEach(function (w) {
      html += '<p class="side-label" style="margin-top:10px">' + esc(weekName(w)) +
        ' · ' + esc(groups[w][0].weekTheme || '') + '</p>';
      groups[w].forEach(function (d) {
        html += '<a href="#/day/' + d.day + '" data-day="' + d.day + '">' +
          '<span class="side-day"><span class="n">' + d.day + '</span><span>' + esc(d.title) + '</span></span></a>';
      });
    });
    $('#navDays').innerHTML = html;
  }

  /* ---------------- router ---------------- */
  function currentRoute() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);
    return { name: parts[0] || 'home', arg: parts[1] };
  }

  function render() {
    var r = currentRoute();
    var html = '';
    if (r.name === 'home') html = pageHome();
    else if (r.name === 'day') html = renderDay(Number(r.arg));
    else if (r.name === 'alphabet') html = pageAlphabet();
    else if (r.name === 'grammar') html = pageGrammar();
    else if (r.name === 'vocab') html = pageVocab();
    else if (r.name === 'phrasebook') html = pagePhrasebook();
    else if (r.name === 'dialogues') html = pageDialogues();
    else if (r.name === 'book') html = pageBook();
    else if (r.name === 'progress') html = pageProgress();
    else html = pageHome();

    var main = $('#main');
    main.innerHTML = html;
    main.scrollTop = 0;
    window.scrollTo(0, 0);
    closeMenu();
    markActive(r, main);
    afterRender(main);
    paintChrome();
  }

  function markActive(r, main) {
    $$('.sidebar a[data-nav], #navDays a').forEach(function (a) { a.classList.remove('active'); });
    var sel = '.sidebar a[data-nav="' + r.name + '"]';
    var link = $(sel);
    if (r.name === 'day') link = $('#navDays a[data-day="' + r.arg + '"]');
    if (link) link.classList.add('active');
    var h = main.querySelector('h1');
    document.title = (h ? h.textContent.replace(/\s+/g, ' ').trim() + ' · ' : '') + 'Pinewood BLAST Adult Greek';
  }

  window.addEventListener('hashchange', render);

  /* ---------------- quizzes ---------------- */
  var quizzes = {};
  var qid = 0;

  window.renderQuiz = function (title, items, day) {
    var id = 'q' + (++qid);
    quizzes[id] = { items: items, day: day };
    var body = items.map(function (it, i) {
      var stem = '<div class="q-stem"><span class="q-num">' + (i + 1) + '.</span><span>' + md(it.q) + '</span></div>';
      if (it.type === 'choice') {
        return '<div class="q" data-i="' + i + '">' + stem + '<div class="options">' +
          it.options.map(function (o, j) {
            return '<button class="opt" type="button" data-j="' + j + '"><span class="key">' + 'ABCD'[j] +
              '</span><span>' + esc(o) + '</span></button>';
          }).join('') + '</div><div class="fb"></div></div>';
      }
      return '<div class="q" data-i="' + i + '">' + stem +
        '<div class="row"><input class="answer-input" type="text" autocomplete="off" spellcheck="false" ' +
        'placeholder="' + esc(it.placeholder || 'Type in Greek…') + '" aria-label="Your answer">' +
        '</div><div class="fb"></div></div>';
    }).join('');
    return '<div class="quiz" id="' + id + '" data-day="' + (day || '') + '">' +
      '<div class="quiz-head"><h3>' + esc(title || 'Check yourself') + '</h3>' +
      '<span class="pill">' + items.length + ' questions</span></div>' +
      '<div class="quiz-body">' + body +
      '<div class="quiz-foot"><button class="btn" type="button" data-check="' + id + '">Έλεγξε · Check answers</button>' +
      '<span class="score" data-score="' + id + '"></span></div></div></div>';
  };

  document.addEventListener('click', function (e) {
    var opt = e.target.closest('.opt');
    if (opt) {
      var q = opt.closest('.q');
      $$('.opt', q).forEach(function (b) { b.classList.remove('sel'); });
      opt.classList.add('sel');
      return;
    }
    var check = e.target.closest('[data-check]');
    if (check) { gradeQuiz(check.getAttribute('data-check')); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('answer-input')) {
      var q = e.target.closest('.quiz');
      if (q) gradeQuiz(q.id);
    }
  });

  function gradeQuiz(id) {
    var data = quizzes[id];
    if (!data) return;
    var quiz = document.getElementById(id);
    if (!quiz) return;
    var correct = 0, answered = 0;
    data.items.forEach(function (it, i) {
      var q = $('.q[data-i="' + i + '"]', quiz);
      var fb = $('.fb', q);
      var ok = false;
      if (it.type === 'choice') {
        var sel = $('.opt.sel', q);
        answered += sel ? 1 : 0;
        $$('.opt', q).forEach(function (b) {
          var j = Number(b.getAttribute('data-j'));
          if (j === it.a) b.classList.add('correct');
          if (sel && b === sel && j !== it.a) b.classList.add('wrong');
        });
        ok = sel && Number(sel.getAttribute('data-j')) === it.a;
      } else {
        var inp = $('.answer-input', q);
        var val = inp.value;
        if (val.trim()) answered++;
        var accept = [it.a].concat(it.accept || []).map(normalize);
        ok = accept.indexOf(normalize(val)) !== -1;
        inp.classList.toggle('ok', ok);
        inp.classList.toggle('bad', !ok && !!val.trim());
      }
      if (ok) correct++;
      fb.className = 'fb show ' + (ok ? 'good' : 'bad');
      fb.innerHTML = (ok ? '✓ Σωστά! ' : '✗ Correct answer: <b class="gr">' + esc(it.type === 'choice' ? it.options[it.a] : it.a) + '</b>. ') +
        (it.exp ? '<span class="exp">' + md(it.exp) + '</span>' : '');
    });
    var pct = Math.round((correct / data.items.length) * 100);
    var scoreEl = $('[data-score="' + id + '"]', quiz);
    scoreEl.textContent = correct + ' / ' + data.items.length + ' (' + pct + '%)';
    scoreEl.className = 'score ' + (pct >= 60 ? 'pass' : 'fail');
    if (window.teacherFeedback) {
      var holder = $('[data-teacher-fb]', quiz);
      if (!holder) {
        holder = document.createElement('div');
        holder.setAttribute('data-teacher-fb', '');
        var foot0 = $('.quiz-foot', quiz);
        foot0.parentNode.insertBefore(holder, foot0.nextSibling);
      }
      holder.innerHTML = window.teacherFeedback(pct);
    }
    if (pct >= 60) {
      var foot = $('.quiz-foot', quiz);
      if (!$('[data-complete]', foot)) {
        var b = document.createElement('button');
        b.className = 'btn olive small';
        b.setAttribute('data-complete', data.day || '');
        b.textContent = '✓ Mark day complete';
        b.addEventListener('click', function () { completeDay(Number(b.getAttribute('data-complete'))); b.disabled = true; b.textContent = '✓ Done'; });
        foot.appendChild(b);
      }
    }
    if (data.day) {
      var prev = state.scores[data.day] || { best: 0 };
      state.scores[data.day] = { best: Math.max(prev.best || 0, pct), last: pct };
      save();
    }
  }

  window.markCompleteBtn = function (day) {
    var done = !!state.done[day];
    return '<button class="btn ' + (done ? 'ghost' : '') + '" type="button" data-day-complete="' + day + '">' +
      (done ? '✓ Completed — mark again' : '✓ Mark this day complete') + '</button>';
  };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-day-complete]');
    if (b) { completeDay(Number(b.getAttribute('data-day-complete'))); b.className = 'btn ghost'; b.textContent = '✓ Completed'; }
  });

  /* ---------------- flashcards + tabs ---------------- */
  document.addEventListener('click', function (e) {
    var f = e.target.closest('.flash');
    if (f && !e.target.closest('.say')) f.classList.toggle('flipped');
    var tab = e.target.closest('.tabs button');
    if (tab) {
      var wrap = tab.closest('[data-tabs]');
      $$('.tabs button', wrap).forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
      tab.setAttribute('aria-selected', 'true');
      $$('[data-panel]', wrap).forEach(function (p) {
        p.style.display = p.getAttribute('data-panel') === tab.getAttribute('data-tab') ? '' : 'none';
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var f = e.target.closest ? e.target.closest('.flash') : null;
    if (f) { e.preventDefault(); f.classList.toggle('flipped'); }
  });

  function afterRender(main) {
    if (typeof main.querySelectorAll !== 'function') return;
    var p = new URLSearchParams(location.search);
    if (p.get('q')) { /* reserved for search */ }
  }

  /* ---------------- shared blocks ---------------- */
  function vocabTable(rows, head) {
    head = head || ['Greek', 'English', 'Note'];
    return '<div class="tbl-wrap"><table><thead><tr>' + head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows.map(function (r) {
        return '<tr>' + r.map(function (c, i) {
          if (i === 0) return '<td class="grcell"><span class="gr">' + esc(c) + '</span>' + '</td>';
          return '<td class="' + (i === 1 ? 'en' : 'note') + '">' + esc(c) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }
  window.vocabTable = vocabTable;

  function ic(name, cls) { return window.GREEK.icon ? window.GREEK.icon(name, cls) : ''; }
  function dayIc(day) { return window.GREEK.dayIcon ? window.GREEK.dayIcon(day) : 'book'; }

  /* ---------------- HOME ---------------- */
  function pageHome() {
    var weeks = {};
    DAYS.forEach(function (d) { (weeks[d.week] = weeks[d.week] || []).push(d); });
    var totalWords = 0;
    (REF.vocab || []).forEach(function (g) { totalWords += g.rows.length; });
    var totalQs = 0;
    DAYS.forEach(function (d) {
      (d.sections || []).forEach(function (s) { if (s.t === 'quiz') totalQs += s.items.length; });
    });

    var dayCards = DAYS.map(function (d) {
      var done = !!state.done[d.day];
      return '<a class="day-card' + (done ? ' done' : '') + '" href="#/day/' + d.day + '">' +
        (done ? '<span class="tick">✓</span>' : '') +
        '<span class="dnum">' + ic(dayIc(d.day), 'dicon') + ' Day ' + d.day + '</span>' +
        '<span class="dtitle">' + esc(d.title) + '</span>' +
        '<span class="dgr">' + esc(d.gr) + '</span></a>';
    }).join('');

    return '<section class="hero">' +
      '<div class="hero-inner">' +
      '<svg class="cover-logo" viewBox="0 0 128 96" role="img" aria-label="BLAST">' +
      '<g fill="none" stroke-width="13">' +
      '<path d="M34 14 10 74M34 14l24 60" stroke="#8cc462"/>' +
      '<path d="M68 26 46 80M68 26l22 54" stroke="#c6ea8a"/>' +
      '<path d="M100 38 80 86M100 38l20 48" stroke="#a3cf7a"/>' +
      '</g></svg>' +
      '<span class="kicker">Pinewood BLAST · Adult Greek · A1</span>' +
      '<h1>Learn Greek, one small day at a time</h1>' +
      '<p class="lead">A 30-day practice companion for our class using <i>Greek for you A1</i>. ' +
      'You have finished lessons 1–10 — here you revise every one of them, learn the present tense properly, ' +
      'and build the everyday Greek you need for travel, work and real conversations.</p>' +
      '<div class="hero-stats">' +
      '<div><b>' + DAYS.length + '</b><span>lessons</span></div>' +
      '<div><b>' + totalQs + '+</b><span>exercises</span></div>' +
      '<div><b>' + totalWords + '+</b><span>words</span></div>' +
      '<div><b>3</b><span>video lessons</span></div>' +
      '</div>' +
      '<div class="row" style="margin-top:22px">' +
      '<a class="btn" href="#/day/' + (firstUnfinished()) + '">' + (doneCount() ? 'Continue' : 'Start Day 1') + ' →</a>' +
      '<a class="btn ghost" href="#/alphabet">Alphabet first</a>' +
      '</div>' +
      '<div class="hero-icons">' +
      [['wave', 'γεια σας'], ['cup', 'έναν καφέ'], ['bus', 'το λεωφορείο'], ['house', 'το σπίτι']].map(function (x) {
        return '<span class="hchip">' + ic(x[0]) + ' <span class="gr">' + x[1] + '</span></span>';
      }).join('') +
      '</div>' +
      '</div>' +
      '</section>' +

      '<div class="grid two" style="margin-bottom:26px">' +
      '<div class="card" style="margin:0">' +
      '<h3>How this course works</h3>' +
      '<ol class="small" style="padding-left:1.2em;margin:0">' +
      '<li><b>10–20 minutes a day.</b> Each day is one short lesson: listen, read, then practise.</li>' +
      '<li><b>Watch, listen, repeat.</b> Each reference page has a Greek video; play it twice and read along.</li>' +
      '<li><b>Finish with the quiz.</b> Score 60% or more and the day is marked complete.</li>' +
      '<li><b>Come back tomorrow.</b> Repetition across weeks is what makes it stick.</li>' +
      '</ol></div>' +
      '<div class="card" style="margin:0">' +
      '<h3>Where to begin</h3>' +
      '<p class="small">Brand new to the alphabet? Do <a href="#/day/1">Days 1–4</a> first — they teach you to read aloud, ' +
      'which makes every later lesson easier. Already read Greek a little? Jump to <a href="#/day/5">Day 5</a>, the lesson from class.</p>' +
      '<p class="small"><a href="#/grammar">The complete present-tense guide →</a></p>' +
      '</div></div>' +

      '<div class="card" style="margin:0 0 26px"><h3 style="margin-top:0">How adults learn a language best</h3>' +
      '<p class="small muted" style="margin:0 0 12px">Six habits that matter more than talent — all of them fit around a job and a family.</p>' +
      '<div class="grid three">' +
      '<div><b class="small">1 · Little and often</b><p class="small" style="margin:.3em 0 0">Fifteen minutes six days a week beats two hours on Sunday. Your brain keeps Greek alive between sessions.</p></div>' +
      '<div><b class="small">2 · Say it out loud</b><p class="small" style="margin:.3em 0 0">Reading silently builds recognition, not speech. Repeat every phrase aloud until your mouth knows the shape of the word.</p></div>' +
      '<div><b class="small">3 · Learn phrases, not lists</b><p class="small" style="margin:.3em 0 0">Store <span class="gr">Θα ήθελα έναν καφέ, παρακαλώ</span> as one block. Grammar comes later from the blocks you already own.</p></div>' +
      '<div><b class="small">4 · Keep one notebook</b><p class="small" style="margin:.3em 0 0">Three columns: Greek, English, and a sentence of your own. Writing by hand slows you down enough to notice endings.</p></div>' +
      '<div><b class="small">5 · Make mistakes early</b><p class="small" style="margin:.3em 0 0">Adults wait to be perfect; children just talk. A wrong ending that gets you a coffee is a success, not a failure.</p></div>' +
      '<div><b class="small">6 · Use it this week</b><p class="small" style="margin:.3em 0 0">Order in Greek, label the kitchen, change your phone language, greet a Greek neighbour. Real use is what turns study into knowledge.</p></div>' +
      '</div></div>' +

      (window.teacherPair ? window.teacherPair() : '') +

      '<div class="icon-grid">' +
      [['alphabet', 'Days 1–4 · Alphabet', 'Read Greek aloud from day one'],
       ['wave', 'Days 5–9 · Greetings', 'Meet, introduce, count, describe'],
       ['bolt', 'Days 10–12 · Present tense', 'The -ω and -άω verb groups'],
       ['cup', 'Days 13–17 · Everyday life', 'Café, home, shops, transport'],
       ['briefcase', 'Days 18–21 · People & work', 'Jobs, family, health, weather'],
       ['temple', 'Days 22–30 · Fluency', 'Past, future, opinions, culture']].map(function (x) {
        return '<div class="iitem">' + ic(x[0]) + '<div><b>' + x[1] + '</b><span>' + x[2] + '</span></div></div>';
      }).join('') +
      '</div>' +

      '<div class="spread" style="margin-bottom:12px"><h2 style="margin:0">The 30-day course</h2>' +
      '<span class="pill blue">' + doneCount() + ' of ' + DAYS.length + ' complete</span></div>' +
      '<div class="grid days">' + dayCards + '</div>' +

      '<h2 style="margin-top:38px">Reference library</h2>' +
      '<div class="grid three">' +
      refCard('#/alphabet', '🔤', 'Alphabet &amp; sounds', '24 letters, digraphs, stress, reading rules.') +
      refCard('#/book', '📘', 'Book map · lessons 1–10', 'What you already know from Greek for you A1, with 100 words.') +
      refCard('#/grammar', '📐', 'Present tense', 'Every ending, every irregular verb, explained in English.') +
      refCard('#/vocab', '📚', 'Vocabulary', 'Themed word lists — food, travel, health, work.') +
      refCard('#/phrasebook', '💬', 'Phrasebook', 'What to say at the airport, café, doctor, hotel.') +
      refCard('#/dialogues', '🗣️', 'Dialogues', 'Sixteen conversations to read, hear and act out.') +
      refCard('#/progress', '📊', 'My progress', 'Your month at a glance.') +
      '</div>' +

      '<h2 style="margin-top:38px">Video lessons · Βίντεο</h2>' +
      '<p class="small muted">Short, clear lessons from Greek teachers — watch once, then read the page that goes with it.</p>' +
      '<div class="video-grid">' +
      videoEmbed('T2n0k2tUHYs', 'Το Νεοελληνικό Αλφάβητο · The Modern Greek Alphabet', 'Μιλάω Ελληνικά') +
      videoEmbed('e46eBGKW2nk', 'Το Ρήμα Είμαι · The Verb To Be', 'Μιλάω Ελληνικά', true) +
      videoEmbed('QSVx0_fMS64', 'Δίψηφα φωνήεντα · Double vowels', 'Quite Greek') +
      videoEmbed('D6ZLituTWpA', 'Ο Ενεστώτας · The Present Tense', 'Μιλάω Ελληνικά') +
      videoEmbed('LgHRNjvBhNc', 'Οι Χαιρετισμοί · Greetings', 'Μιλάω Ελληνικά') +
      videoEmbed('vs5MsJKt5wQ', 'Δίψηφα σύμφωνα · Double consonants', 'Quite Greek') +
      '</div>' +

      '<div class="note-box" style="margin-top:26px">' +
      '<p><b>About the videos.</b> The lessons are taught with real Greek videos from two YouTube teachers: ' +
      '<i>Μιλάω Ελληνικά</i> (alphabet, greetings, the present tense, the verb είμαι) and <i>Quite Greek</i> (the digraphs). They need an internet ' +
      'connection; if a video does not load inside the page, use the title link above it to open it on YouTube.</p>' +
      '<p class="small"><b>Progress</b> is stored in this browser only. In a shared preview it may not be kept — for a month of study, ' +
      'download the site and open it on your own device.</p></div>' +

      '<p class="footer-note">Pinewood BLAST Adult Greek · a practice companion for our class using <i>Greek for you A1</i>. ' +
      'Covers the alphabet, lessons 1–10 of the book, the present tense, and a full month of everyday practice.</p>';
  }

  function refCard(href, icon, title, text) {
    return '<a class="card" style="margin:0;text-decoration:none;color:inherit" href="' + href + '">' +
      '<div style="font-size:1.6rem;line-height:1">' + icon + '</div>' +
      '<h3 style="margin:.35em 0 .2em">' + title + '</h3>' +
      '<p class="small muted" style="margin:0">' + text + '</p></a>';
  }

  function videoEmbed(id, title, sub, short) {
    var url = 'https://www.youtube.com/watch?v=' + id;
    return '<figure class="video-card' + (short ? ' short' : '') + '">' +
      '<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '" title="' + esc(title) + '" ' +
      'loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>' +
      '<figcaption class="small"><b>' + esc(title) + '</b>' + (sub ? ' · ' + esc(sub) : '') +
      ' · <a href="' + url + '" target="_blank" rel="noopener">YouTube ↗</a></figcaption></figure>';
  }

  function firstUnfinished() {
    for (var i = 0; i < DAYS.length; i++) if (!state.done[DAYS[i].day]) return DAYS[i].day;
    return 1;
  }

  /* ---------------- ALPHABET ---------------- */
  function pageAlphabet() {
    var letters = window.GREEK.letters.map(function (L) {
      return '<div class="alpha-card">' +
        '<div class="big">' + L.u + ' ' + L.l + '</div>' +
        '<div class="name">' + esc(L.name) + '</div>' +
        '<div class="ipa">' + esc(L.ipa) + '</div>' +
        '<div class="hint">' + L.hint + '</div>' +
        '<div class="hint" style="margin-top:6px"><span class="gr">' + esc(L.ex) + '</span> · ' + esc(L.exEn) +
         + '</div>' +
        '</div>';
    }).join('');

    var dg = window.GREEK.digraphs.map(function (d) {
      return '<tr><td class="grcell"><span class="gr">' + esc(d.gr) + '</span></td>' +
        '<td class="en"><code>' + esc(d.ipa) + '</code></td><td class="note">' + esc(d.hint) + '</td>' +
        '<td class="note"><span class="gr">' + esc(d.ex) + '</span> · ' + esc(d.exEn) + '</td></tr>';
    }).join('');

    var rules = window.GREEK.pronRules.map(function (r) {
      return '<div class="card" style="margin:0 0 14px"><h3>' + esc(r.t) + '</h3><p class="small" style="margin:0">' + md(r.html) + '</p></div>';
    }).join('');

    return '<span class="kicker">Reference · also Days 1–4</span>' +
      '<h1>The Greek alphabet &amp; sounds</h1>' +
      '<p class="lead">Twenty-four letters, twenty-four sounds — but only five vowel sounds. Learn the sounds first and Greek spelling ' +
      'stops being mysterious.</p>' +
      '<div class="row" style="margin:18px 0 10px"><a class="btn" href="#/day/1">Practise this in Day 1 →</a></div>' +
      '<h2>Watch the alphabet · Δες το αλφάβητο</h2>' +
      '<div class="video-grid">' +
      videoEmbed('T2n0k2tUHYs', 'Το Νεοελληνικό Αλφάβητο · The Modern Greek Alphabet', 'Μιλάω Ελληνικά') +
      '</div>' +
      '<h2>Τα γράμματα · The letters</h2>' +
      '<div class="alpha-grid">' + letters + '</div>' +
      '<h2 style="margin-top:38px">Two letters, one sound</h2>' +
      '<p class="small muted">Greek builds sounds from pairs of letters. Learn these twelve and you can read almost anything. Watch each pair being pronounced, then read the table aloud.</p>' +
      '<div class="video-grid">' +
      videoEmbed('QSVx0_fMS64', 'Δίψηφα φωνήεντα · Double vowels', 'Quite Greek') +
      videoEmbed('vs5MsJKt5wQ', 'Δίψηφα σύμφωνα · Double consonants', 'Quite Greek') +
      videoEmbed('_9oqbN0fuXs', 'Συνδυασμοί αυ και ευ · αυ and ευ', 'Quite Greek') +
      '</div>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Pair</th><th>Sounds like</th><th>Rule</th><th>Example</th></tr></thead><tbody>' + dg + '</tbody></table></div>' +
      '<h2 style="margin-top:38px">Rules that make reading easier</h2>' + rules +
      '<div class="tip"><p><b>Say it out loud.</b> Greek is written the way it is spoken, letter by letter. Once you know the 24 letters ' +
      'and the stress mark, you can read any Greek word — even one you have never seen.</p></div>';
  }

  /* ---------------- GRAMMAR REFERENCE ---------------- */
  function conjBlock(rows) {
    return '<div class="conj">' + rows.map(function (r) {
      return '<div class="cell"><span class="pron">' + esc(r[0]) + '</span>' +
        '<span class="form">' + esc(r[1]) + '</span>' +
        '<span class="gloss">' + esc(r[2]) + '</span></div>';
    }).join('') + '</div>';
  }
  window.conjBlock = conjBlock;

  function pageGrammar() {
    var g = REF.grammar || {};
    return '<span class="kicker">Grammar reference</span>' +
      '<h1>The present tense · Ο ενεστώτας</h1>' +
      '<p class="lead">One tense, two English meanings: Greek <span class="gr">γράφω</span> is both “I write” and “I am writing”. ' +
      'This is the tense you will use most in your first year, and it is wonderfully regular.</p>' +
      '<h2>Watch: the present tense · Ο ενεστώτας</h2>' +
      '<div class="video-grid">' +
      videoEmbed('D6ZLituTWpA', 'Ενεργητική Φωνή · Ενεστώτας | Active Voice · Present Tense', 'Μιλάω Ελληνικά') +
      '</div>' +
      '<div data-tabs>' +
      '<div class="tabs" role="tablist" style="margin-top:20px">' +
      '<button role="tab" aria-selected="true" data-tab="a">The basics</button>' +
      '<button role="tab" aria-selected="false" data-tab="b">Group A · -ω</button>' +
      '<button role="tab" aria-selected="false" data-tab="c">Group B · -άω</button>' +
      '<button role="tab" aria-selected="false" data-tab="d">Irregulars</button>' +
      '<button role="tab" aria-selected="false" data-tab="e">Negatives &amp; questions</button>' +
      '</div>' +
      '<div data-panel="a">' + grammarBasics() + '</div>' +
      '<div data-panel="b" style="display:none">' + grammarGroupA() + '</div>' +
      '<div data-panel="c" style="display:none">' + grammarGroupB() + '</div>' +
      '<div data-panel="d" style="display:none">' + grammarIrregular() + '</div>' +
      '<div data-panel="e" style="display:none">' + grammarNegatives() + '</div>' +
      '</div>' +
      '<div class="card" style="margin-top:26px"><h3>Test yourself</h3>' +
      window.renderQuiz('Present tense — mixed drill', (g.drill || []), 16) + '</div>';
  }

  function grammarBasics() {
    return '<div class="card"><h2 style="margin-top:0">What the present tense does</h2>' +
      '<p>Greek has one present tense where English has two:</p>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Greek</th><th>English</th></tr></thead><tbody>' +
      '<tr><td class="grcell"><span class="gr">Δουλεύω στην Αθήνα.</span>' + '</td><td class="en">I work in Athens. / I am working in Athens.</td></tr>' +
      '<tr><td class="grcell"><span class="gr">Πίνω καφέ.</span>' + '</td><td class="en">I drink coffee. / I’m drinking coffee.</td></tr>' +
      '</tbody></table></div>' +
      '<p class="small muted" style="margin-top:12px">Context tells you which English translation fits: <span class="gr">κάθε μέρα</span> (every day) → “I drink”; <span class="gr">τώρα</span> (now) → “I’m drinking”.</p></div>' +

      '<div class="card"><h2 style="margin-top:0">The person is in the ending</h2>' +
      '<p>Greek often drops the pronoun, because the verb ending already says who is doing it. Pronouns are used for emphasis or contrast.</p>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Person</th><th>Pronoun</th><th>Meaning</th></tr></thead><tbody>' +
      [['1st singular', 'εγώ', 'I'], ['2nd singular', 'εσύ', 'you (one person, informal)'],
       ['3rd singular', 'αυτός / αυτή / αυτό', 'he / she / it'],
       ['1st plural', 'εμείς', 'we'], ['2nd plural', 'εσείς', 'you (plural or polite)'],
       ['3rd plural', 'αυτοί / αυτές / αυτά', 'they (m / f / n)']].map(function (r) {
        return '<tr><td class="note">' + r[0] + '</td><td class="grcell"><span class="gr">' + r[1] + '</span>' + '</td><td class="en">' + r[2] + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="note-box"><p><b>You, politely.</b> Use <span class="gr">εσείς</span> with strangers, older people, shopkeepers and officials — ' +
      'it takes the plural verb form even for one person. <span class="gr">Τι κάνετε;</span> is the polite “How are you?”; ' +
      '<span class="gr">Τι κάνεις;</span> is for friends, family and children.</p></div></div>' +

      '<div class="card"><h2 style="margin-top:0">Two big families of verbs</h2>' +
      '<p>Almost every Greek verb in the present ends in <b>-ω</b> in the “I” form. The way the other persons are built splits verbs into two groups:</p>' +
      '<div class="grid two">' +
      '<div class="note-box"><p><b>Group A (most verbs)</b><br><span class="gr">γράφω</span> → <span class="gr">γράφεις, γράφει, γράφουμε, γράφετε, γράφουν</span></p>' +
      '<p class="small">The stress stays where it is in the “I” form. Learn one, and you can conjugate hundreds.</p></div>' +
      '<div class="note-box"><p><b>Group B (-άω / -ώ)</b><br><span class="gr">μιλάω</span> → <span class="gr">μιλάς, μιλάει, μιλάμε, μιλάτε, μιλάνε</span></p>' +
      '<p class="small">These verbs have a stressed <b>α</b> or <b>ε</b> before the ending. Very common in everyday speech.</p></div>' +
      '</div></div>' +

      '<div class="card"><h2 style="margin-top:0">The one rule you must not break</h2>' +
      '<p>Greek has <b>one</b> stressed syllable per word, and it is written. When you add an ending, the stress may move — ' +
      'but it never moves further back than the third syllable from the end. That is why <span class="gr">άνθρωπος</span> becomes ' +
      '<span class="gr">ανθρώπου</span>.</p>' +
      '<p class="small muted">In this course every verb form is written with its accent, so you can simply copy it. When you type answers, ' +
      'accents are optional — the checker accepts both.</p></div>';
  }

  function vocabularyGrid(rows) {
    return '<div class="flash-grid">' + rows.map(function (r) {
      return '<div class="phrase-card"><div class="g"><span class="gr">' + esc(r[0]) + '</span>' + '</div>' +
        '<div class="e">' + esc(r[1]) + '</div></div>';
    }).join('') + '</div>';
  }

  function grammarGroupA() {
    return '<div class="card"><h2 style="margin-top:0">Group A: the pattern of most verbs</h2>' +
      '<p>Take the stem and add these six endings. The stress does not move.</p>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Person</th><th>Ending</th><th>Example: δουλεύω (work)</th></tr></thead><tbody>' +
      [['εγώ (I)', '-ω', 'δουλεύω'], ['εσύ (you)', '-εις', 'δουλεύεις'], ['αυτός/ή/ό (he/she/it)', '-ει', 'δουλεύει'],
       ['εμείς (we)', '-ουμε', 'δουλεύουμε'], ['εσείς (you pl./polite)', '-ετε', 'δουλεύετε'], ['αυτοί/ές/ά (they)', '-ουν', 'δουλεύουν']]
        .map(function (r) {
          return '<tr><td class="note">' + r[0] + '</td><td class="en"><code>' + r[1] + '</code></td>' +
            '<td class="grcell"><span class="gr">' + r[2] + '</span>' + '</td></tr>';
        }).join('') +
      '</tbody></table></div></div>' +
      [['κάνω', 'do, make', [['εγώ', 'κάνω'], ['εσύ', 'κάνεις'], ['αυτός/ή/ό', 'κάνει'], ['εμείς', 'κάνουμε'], ['εσείς', 'κάνετε'], ['αυτοί/ές/ά', 'κάνουν']]],
       ['γράφω', 'write', [['εγώ', 'γράφω'], ['εσύ', 'γράφεις'], ['αυτός/ή/ό', 'γράφει'], ['εμείς', 'γράφουμε'], ['εσείς', 'γράφετε'], ['αυτοί/ές/ά', 'γράφουν']]],
       ['μένω', 'live, stay', [['εγώ', 'μένω'], ['εσύ', 'μένεις'], ['αυτός/ή/ό', 'μένει'], ['εμείς', 'μένουμε'], ['εσείς', 'μένετε'], ['αυτοί/ές/ά', 'μένουν']]]
      ].map(function (v) {
        return '<div class="card"><div class="spread"><h3 style="margin:0"><span class="gr">' + v[0] + '</span> · ' + v[1] + '</h3>' +
          '<span class="pill blue">Group A</span></div><div style="margin-top:14px">' + conjBlock(v[2]) + '</div></div>';
      }).join('') +
      '<div class="card"><h2 style="margin-top:0">High-frequency Group A verbs</h2>' +
      '<p class="small muted">Every one of these follows the pattern above exactly.</p>' +
      vocabularyGrid([
        ['δουλεύω', 'work'], ['θέλω', 'want'], ['ξέρω', 'know'], ['βλέπω', 'see, watch'],
        ['πίνω', 'drink'], ['διαβάζω', 'read, study'], ['γράφω', 'write'], ['κάνω', 'do, make'],
        ['μένω', 'live, stay'], ['περιμένω', 'wait'], ['μαθαίνω', 'learn'], ['βγαίνω', 'go out'],
        ['μπαίνω', 'go in'], ['καταλαβαίνω', 'understand'], ['αγοράζω', 'buy'], ['δίνω', 'give'],
        ['παίρνω', 'take'], ['αφήνω', 'leave (something)'], ['ανοίγω', 'open'], ['κλείνω', 'close'],
        ['τηλεφωνώ', 'telephone'], ['πληρώνω', 'pay'], ['ταξιδεύω', 'travel'], ['τελειώνω', 'finish']
      ]) + '</div>';
  }

  function grammarGroupB() {
    return '<div class="card"><h2 style="margin-top:0">Group B: verbs in -άω / -ώ</h2>' +
      '<p>These are extremely common in conversation. The stressed <b>α</b> belongs to the stem, so the endings look different:</p>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Person</th><th>Ending</th><th>μιλάω (speak)</th><th>αγαπάω (love)</th></tr></thead><tbody>' +
      [['εγώ', '-άω / -ώ', 'μιλάω', 'αγαπάω'], ['εσύ', '-άς / -είς', 'μιλάς', 'αγαπάς'],
       ['αυτός/ή/ό', '-άει / -εί', 'μιλάει', 'αγαπάει'], ['εμείς', '-άμε / -ούμε', 'μιλάμε', 'αγαπάμε'],
       ['εσείς', '-άτε / -είτε', 'μιλάτε', 'αγαπάτε'], ['αυτοί', '-άνε / -ούν', 'μιλάνε', 'αγαπάνε']]
        .map(function (r) {
          return '<tr><td class="note">' + r[0] + '</td><td class="en"><code>' + r[1] + '</code></td>' +
            '<td class="grcell"><span class="gr">' + r[2] + '</span>' + '</td>' +
            '<td class="grcell"><span class="gr">' + r[3] + '</span>' + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
      '<div class="tip"><p><b>Two accepted versions.</b> Most -άω verbs also have a formal -ώ form: <span class="gr">μιλάω / μιλώ</span>, ' +
      '<span class="gr">μιλάς / μιλείς</span>, <span class="gr">μιλάει / μιλεί</span>. The -άω forms are what you will hear in shops, ' +
      'cafés and among friends; either is correct.</p></div></div>' +
      '<div class="card"><h2 style="margin-top:0">Group B verbs to know</h2>' + vocabularyGrid([
        ['μιλάω', 'speak, talk'], ['αγαπάω', 'love'], ['ρωτάω', 'ask'], ['ζητάω', 'ask for, request'],
        ['φοράω', 'wear'], ['γελάω', 'laugh'], ['πεινάω', 'be hungry'], ['διψάω', 'be thirsty'],
        ['κοιτάω', 'look at'], ['χαμογελάω', 'smile'], ['περπατάω', 'walk'], ['μπορώ', 'can, be able']
      ]) +
      '<div class="note-box" style="margin-top:18px"><p><b>Handy:</b> <span class="gr">Πεινάω</span> and <span class="gr">διψάω</span> ' +
      'literally mean “I am hungry/thirsty” — no verb “to be” needed. <span class="gr">Πεινάς;</span> = “Are you hungry?”</p></div></div>';
  }

  function grammarIrregular() {
    var pron = ['εγώ', 'εσύ', 'αυτός/ή/ό', 'εμείς', 'εσείς', 'αυτοί'];
    function block(title, gr, forms) {
      return '<div><h3><span class="gr">' + gr + '</span> · ' + title + '</h3>' +
        conjBlock(forms.map(function (f, i) { return [pron[i], f]; })) + '</div>';
    }
    return '<div class="card"><h2 style="margin-top:0">The three verbs you cannot avoid</h2>' +
      '<div class="grid three">' +
      block('be', 'είμαι', ['είμαι', 'είσαι', 'είναι', 'είμαστε', 'είστε', 'είναι']) +
      block('have', 'έχω', ['έχω', 'έχεις', 'έχει', 'έχουμε', 'έχετε', 'έχουν']) +
      block('do, make', 'κάνω', ['κάνω', 'κάνεις', 'κάνει', 'κάνουμε', 'κάνετε', 'κάνουν']) +
      '</div><p class="small muted" style="margin-top:14px"><span class="gr">είστε</span> and <span class="gr">είσαστε</span> are both ' +
      'correct; <span class="gr">είστε</span> is more usual.</p></div>' +

      '<h3>Watch: the verb είμαι · Το ρήμα είμαι</h3>' +
      '<div class="video-grid">' +
      videoEmbed('e46eBGKW2nk', 'Το Ρήμα Είμαι · The Verb To Be', 'Μιλάω Ελληνικά', true) +
      '</div>' +

      '<div class="card"><h2 style="margin-top:0">Contracted verbs: πάω, λέω, τρώω, ακούω, μπορώ</h2>' +
      '<p>These lose a vowel when an ending is added. They are among the most frequent verbs in Greek, so learn the six forms by heart.</p>' +
      '<div class="grid two">' +
      block('go', 'πάω', ['πάω', 'πας', 'πάει', 'πάμε', 'πάτε', 'πάνε']) +
      block('say, tell', 'λέω', ['λέω', 'λες', 'λέει', 'λέμε', 'λέτε', 'λένε']) +
      block('eat', 'τρώω', ['τρώω', 'τρως', 'τρώει', 'τρώμε', 'τρώτε', 'τρώνε']) +
      block('hear, listen', 'ακούω', ['ακούω', 'ακούς', 'ακούει', 'ακούμε', 'ακούτε', 'ακούν']) +
      block('can', 'μπορώ', ['μπορώ', 'μπορείς', 'μπορεί', 'μπορούμε', 'μπορείτε', 'μπορούν']) +
      block('want', 'θέλω', ['θέλω', 'θέλεις', 'θέλει', 'θέλουμε', 'θέλετε', 'θέλουν']) +
      '</div><div class="tip"><p><b>Πάω</b> is the everyday “go”; the formal <span class="gr">πηγαίνω</span> is regular. ' +
      '<b>Θέλω</b> is regular too — it is here because you will use it every day.</p></div></div>' +

      '<div class="card"><h2 style="margin-top:0">Small but vital: θέλω / μπορώ / ξέρω + να</h2>' +
      '<p>To say what you want, can or know how to do, use <b>να</b> + the verb in the same person:</p>' +
      '<div class="grid two">' +
      '<div class="phrase-card"><div class="g"><span class="gr">Θέλω να πάω σπίτι.</span>' + '</div><div class="e">I want to go home.</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Μπορώ να μιλήσω αγγλικά;</span>' + '</div><div class="e">Can I speak English?</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Ξέρω να μαγειρεύω.</span>' + '</div><div class="e">I know how to cook.</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Δεν θέλω να πάω.</span>' + '</div><div class="e">I don’t want to go.</div></div>' +
      '</div></div>';
  }

  function grammarNegatives() {
    return '<div class="card"><h2 style="margin-top:0">Saying no: δεν</h2>' +
      '<p>Put <b>δεν</b> directly before the verb. That is the whole rule.</p>' +
      '<div class="grid two">' +
      '<div class="phrase-card"><div class="g"><span class="gr">Δεν καταλαβαίνω.</span>' + '</div><div class="e">I don’t understand.</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Δεν είμαι από την Ελλάδα.</span>' + '</div><div class="e">I’m not from Greece.</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Δεν έχω χρόνο.</span>' + '</div><div class="e">I don’t have time.</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Δεν μιλάω καλά ελληνικά.</span>' + '</div><div class="e">I don’t speak Greek well.</div></div>' +
      '</div>' +
      '<div class="warn"><p><b>δεν or μη;</b> Use <b>δεν</b> with statements and questions. Use <b>μην</b> (or <b>μη</b> before a vowel) ' +
      'after <span class="gr">να</span> and in commands: <span class="gr">Μην το κάνεις!</span> “Don’t do it!” · ' +
      '<span class="gr">Θέλω να μην αργήσεις.</span> “I want you not to be late.”</p></div>' +
      '<p class="small muted">Two negatives are normal in Greek: <span class="gr">Δεν ξέρω τίποτα.</span> “I know nothing.” · ' +
      '<span class="gr">Δεν πάω ποτέ εκεί.</span> “I never go there.”</p></div>' +

      '<div class="card"><h2 style="margin-top:0">Asking questions</h2>' +
      '<p>No auxiliary verb and no word-order change: keep the sentence as it is and raise your voice at the end. In writing, the Greek ' +
      'question mark <b>;</b> does the job.</p>' +
      '<div class="grid two">' +
      '<div class="phrase-card"><div class="g"><span class="gr">Μιλάς ελληνικά;</span>' + '</div><div class="e">Do you speak Greek?</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Είσαι από την Αγγλία;</span>' + '</div><div class="e">Are you from England?</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Έχεις παιδιά;</span>' + '</div><div class="e">Do you have children?</div></div>' +
      '<div class="phrase-card"><div class="g"><span class="gr">Πάμε στην παραλία;</span>' + '</div><div class="e">Shall we go to the beach?</div></div>' +
      '</div>' +
      '<h3 style="margin-top:22px">Question words</h3>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Greek</th><th>English</th><th>Example</th></tr></thead><tbody>' +
      [['τι', 'what', 'Τι κάνεις; — How are you? (lit. what are you doing?)'],
       ['ποιος / ποια / ποιο', 'who, which', 'Ποιος είναι αυτός; — Who is he?'],
       ['πού', 'where', 'Πού μένεις; — Where do you live?'],
       ['πότε', 'when', 'Πότε φεύγεις; — When are you leaving?'],
       ['γιατί', 'why', 'Γιατί μαθαίνεις ελληνικά; — Why are you learning Greek?'],
       ['πώς', 'how', 'Πώς λέγεται; — What is it called?'],
       ['πόσο', 'how much', 'Πόσο κάνει; — How much does it cost?']
      ].map(function (r) {
        return '<tr><td class="grcell"><span class="gr">' + r[0] + '</span>' + '</td>' +
          '<td class="en">' + r[1] + '</td><td class="note">' + r[2] + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="note-box"><p><b>Τι κάνεις;</b> is not “what are you making?” — it is the standard “how are you?”. ' +
      'The answer can be <span class="gr">Καλά, ευχαριστώ</span> (fine, thanks).</p></div></div>' +

      '<div class="card"><h2 style="margin-top:0">Time expressions that go with the present</h2>' +
      vocabularyGrid([
        ['τώρα', 'now'], ['σήμερα', 'today'], ['αύριο', 'tomorrow'], ['κάθε μέρα', 'every day'],
        ['πάντα', 'always'], ['συχνά', 'often'], ['μερικές φορές', 'sometimes'], ['ποτέ', 'never'],
        ['το πρωί', 'in the morning'], ['το βράδυ', 'in the evening'], ['αυτή τη στιγμή', 'at this moment'],
        ['συνήθως', 'usually']
      ]) +
      '<div class="tip"><p><b>Word order.</b> Time expressions can go first or last: <span class="gr">Κάθε μέρα πίνω καφέ.</span> = ' +
      '<span class="gr">Πίνω καφέ κάθε μέρα.</span> Both are natural.</p></div></div>';
  }

  function pageVocab() {
    var groups = REF.vocab || [];
    var tabs = groups.map(function (g, i) {
      return '<button role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '" data-tab="' + g.id + '">' +
        ic(window.GREEK.groupIcon ? window.GREEK.groupIcon(g.title) : 'book') + ' ' + esc(g.title) + '</button>';
    }).join('');
    var panels = groups.map(function (g, i) {
      return '<div data-panel="' + g.id + '"' + (i === 0 ? '' : ' style="display:none"') + '>' +
        '<div class="card"><div class="spread"><div><h2 style="margin:0">' + ic(window.GREEK.groupIcon ? window.GREEK.groupIcon(g.title) : 'book', 'h2icon') + ' ' + esc(g.title) + '</h2>' +
        '<p class="small muted" style="margin:2px 0 0"><span class="gr">' + esc(g.gr || '') + '</span></p></div>' +
        '<span class="pill">' + g.rows.length + ' words</span></div>' +
        (g.intro ? '<p class="small" style="margin-top:14px">' + md(g.intro) + '</p>' : '') +
        '<div style="margin-top:16px">' + vocabTable(g.rows) + '</div></div></div>';
    }).join('');
    return '<span class="kicker">Reference</span><h1>Vocabulary</h1>' +
      '<p class="lead">Themed lists for the situations you meet every week. Read each word aloud twice, cover the English, then test yourself.</p>' +
      '<div data-tabs><div class="tabs">' + tabs + '</div>' + panels + '</div>' +
      '<div class="tip"><p><b>How to learn a list.</b> Read each word aloud three times, cover the English, then say the meaning. ' +
      'Come back to the same list two days later — spacing beats cramming.</p></div>';
  }

  function pagePhrasebook() {
    var groups = REF.phrasebook || [];
    var tabs = groups.map(function (g, i) {
      return '<button role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '" data-tab="' + g.id + '">' +
        (g.icon ? g.icon + ' ' : '') + esc(g.situation) + '</button>';
    }).join('');
    var panels = groups.map(function (g, i) {
      return '<div data-panel="' + g.id + '"' + (i === 0 ? '' : ' style="display:none"') + '>' +
        '<div class="card"><h2 style="margin-top:0">' + (g.icon ? g.icon + ' ' : '') + esc(g.situation) + '</h2>' +
        '<p class="small muted"><span class="gr">' + esc(g.gr) + '</span></p>' +
        '<div style="display:grid;gap:10px;margin-top:14px">' + g.items.map(function (it) {
          return '<div class="phrase-card"><div class="g"><span class="gr">' + esc(it.g) + '</span>' + '</div>' +
            '<div class="e">' + esc(it.e) + '</div>' + (it.u ? '<div class="u">' + esc(it.u) + '</div>' : '') + '</div>';
        }).join('') + '</div>' +
        (g.tip ? '<div class="tip" style="margin-top:16px"><p>' + md(g.tip) + '</p></div>' : '') +
        '</div></div>';
    }).join('');
    return '<span class="kicker">Reference · survival Greek</span><h1>Phrasebook</h1>' +
      '<p class="lead">What to say when you need it — at the airport, the café, the pharmacy or the town hall. ' +
      'Short phrases, with the polite forms marked.</p>' +
      '<h2>Watch: greetings · Οι χαιρετισμοί</h2>' +
      '<div class="video-grid">' +
      videoEmbed('LgHRNjvBhNc', 'Οι Χαιρετισμοί Στα Ελληνικά | The Greetings In Greek', 'Μιλάω Ελληνικά') +
      '</div>' +
      '<div data-tabs><div class="tabs">' + tabs + '</div>' + panels + '</div>';
  }

  function dialogueBlock(d) {
    var dlgId = 'dlg-' + (d.id || Math.random().toString(36).slice(2));
    return '<div class="dialogue" id="' + dlgId + '">' +
      '<div class="dlg-head"><div><b>' + esc(d.title) + '</b><div class="small muted"><span class="gr">' + esc(d.gr) + '</span></div></div>' +
      '<span class="pill blue">' + d.lines.length + ' lines</span></div>' +
      '<div class="dlg-lines">' + d.lines.map(function (l, i) {
        var colour = ['#0e5a8a', '#c0562f', '#6b7f3f', '#8a5fa8'][i % 4];
        return '<div class="dlg-line" data-g="' + esc(l.g) + '">' +
          '<span class="dlg-avatar" style="background:' + colour + '">' + esc(l.s.charAt(0)) + '</span>' +
          '<span class="dlg-who">' + esc(l.s) + '</span>' +
          '<span class="dlg-body"><div class="g"><span class="gr">' + esc(l.g) + '</span>' + '</div>' +
          '<div class="e">' + esc(l.e) + '</div></span></div>';
      }).join('') + '</div></div>';
  }
  window.dialogueBlock = dialogueBlock;

  function pageDialogues() {
    var list = REF.dialogues || [];
    return '<span class="kicker">Listening &amp; speaking</span><h1>Dialogues</h1>' +
      '<p class="lead">Short conversations, from the port of Aegina to a doctor’s waiting room. ' +
      'Read the Greek, check the English, then read both parts aloud with a partner.</p>' +
      '<div class="row" style="margin:16px 0 26px"><span class="pill blue">' + list.length + ' dialogues</span>' +
      '<span class="small muted">read each line aloud · alternate the roles</span></div>' +
      list.map(function (d) {
        return '<div class="section"><div class="spread" style="margin-bottom:8px">' +
          '<h2 style="margin:0">' + esc(d.title) + '</h2><span class="pill">' + esc(d.level || 'A1') + '</span></div>' +
          '<p class="small muted" style="margin-bottom:12px">' + esc(d.setting) + '</p>' + dialogueBlock(d) + '</div>';
      }).join('');
  }

  /* ---------------- BOOK MAP: Greek for you A1, lessons 1–10 ---------------- */
  function pageBook() {
    var B = window.GREEK.book;
    if (!B) return '<span class="kicker">Book map</span><h1>Book map</h1><p class="lead">The book map is still loading.</p>';
    var lessons = B.lessons.map(function (l) {
      var links = l.days.map(function (n) {
        var d = null;
        for (var i = 0; i < DAYS.length; i++) if (DAYS[i].day === n) { d = DAYS[i]; break; }
        return '<a href="#/day/' + n + '">Day ' + n + ((d && d.title) ? ' · ' + esc(d.title) : '') + '</a>';
      }).join(' · ');
      return '<div class="card book-lesson" id="lesson-' + l.n + '">' +
        '<div class="spread" style="align-items:flex-start"><div>' +
        '<span class="pill blue">Lesson ' + l.n + '</span>' +
        '<h3 style="margin:.5em 0 .15em">' + esc(l.gr) + '</h3>' +
        '<p class="tiny muted" style="margin:0">' + esc(l.en) + '</p></div>' +
        '<span class="pill">' + l.words.length + ' words</span></div>' +
        '<p class="small" style="margin:1em 0 .3em"><b>You can now…</b></p>' +
        '<ul class="small" style="margin:0 0 14px;padding-left:1.15em">' +
        l.can.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
        '<p class="small" style="margin:0 0 6px"><b>Λεξιλόγιο · Vocabulary</b></p>' +
        vocabTable(l.words) +
        '<p class="tiny" style="margin:12px 0 0;color:var(--muted)">Revise it on this site: ' + links + '</p>' +
        '</div>';
    }).join('');

    return '<span class="kicker">Book map · Greek for you A1</span>' +
      '<h1>Lessons 1–10: what you already know</h1>' +
      '<p class="lead">You have finished the first ten lessons of <i>Greek for you A1</i>. ' +
      'Here is the whole of it in one place: the ten lessons, what each one lets you do, and <b>' + B.wordCount +
      ' key words</b> — plus the days of this site that revise them.</p>' +
      '<div class="note-box" style="margin-bottom:22px"><p class="small" style="margin:0">' + B.note + '</p></div>' +
      (window.teacherPair ? window.teacherPair() : '') +
      '<div class="book-grid">' + lessons + '</div>' +
      '<div class="card" style="margin-top:22px;border-left:4px solid var(--gold)">' +
      '<h3 style="margin:0 0 6px">' + esc(B.next.title) + '</h3>' +
      '<p class="small" style="margin:0">' + B.next.text + '</p></div>' +
      '<p class="tiny muted" style="margin-top:18px">Words are given in the form you will use in class. ' +
      'Read each word aloud twice before you move on — your mouth remembers what your eyes skip.</p>';
  }

  function pageProgress() {
    var total = DAYS.length, done = doneCount();
    var pct = total ? Math.round((done / total) * 100) : 0;
    var cells = DAYS.map(function (d) {
      return '<div class="cell' + (state.done[d.day] ? ' done' : '') + '"><a href="#/day/' + d.day + '" title="Day ' + d.day + ': ' +
        esc(d.title) + '">' + d.day + '</a></div>';
    }).join('');
    var rows = DAYS.map(function (d) {
      var sc = state.scores[d.day];
      return '<tr><td class="note">Day ' + d.day + '</td>' +
        '<td class="en"><a href="#/day/' + d.day + '">' + esc(d.title) + '</a></td>' +
        '<td class="note">' + (state.done[d.day] ? '<span class="pill ok">✓ complete</span>' : '<span class="pill">not yet</span>') + '</td>' +
        '<td class="note">' + (sc ? sc.best + '% best' : '—') + '</td></tr>';
    }).join('');
    return '<span class="kicker">Your month</span><h1>My progress</h1>' +
      '<div class="card"><div class="spread"><h2 style="margin:0">' + done + ' of ' + total + ' days complete</h2>' +
      '<span class="pill blue">' + pct + '%</span></div>' +
      '<div class="bar" style="margin-top:14px"><i style="width:' + pct + '%"></i></div>' +
      '<div class="month-grid" style="margin-top:20px">' + cells + '</div>' +
      '<p class="small muted" style="margin-top:16px">A steady rhythm beats a long weekend: 15 minutes a day for a month will take you ' +
      'further than five hours on a Sunday.</p></div>' +
      '<div class="card"><h2 style="margin-top:0">Lesson by lesson</h2>' +
      '<div class="tbl-wrap"><table><thead><tr><th>Day</th><th>Lesson</th><th>Status</th><th>Best quiz</th></tr></thead><tbody>' +
      rows + '</tbody></table></div></div>' +
      '<div class="card"><h2 style="margin-top:0">Settings</h2>' +
      '<p class="small muted">Progress is saved in this browser only. Clearing site data erases it. ' +
      'Videos are embedded from YouTube and need an internet connection.</p>' +
      '<button class="btn ghost small" type="button" id="resetProgress">Reset my progress</button></div>';
  }

  document.addEventListener('click', function (e) {
    if (e.target.id === 'resetProgress') {
      if (!confirm('Erase all completed days and quiz scores?')) return;
      state.done = {}; state.scores = {}; save();
      render(); paintChrome();
      toast('Progress reset.');
    }
  });

  window.UI = {
    $: $, $$: $$, esc: esc, md: md, normalize: normalize,
    vocabTable: vocabTable, conjBlock: conjBlock, dialogueBlock: dialogueBlock, vocabularyGrid: vocabularyGrid
  };

  buildNav();
  if (!location.hash) location.hash = '#/';
  render();
  paintChrome();

  window.GREEK_APP = { state: state, render: render, doneCount: doneCount };
})();
