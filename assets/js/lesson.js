/* =========================================================================
   Lesson renderer — turns a lesson object from window.GREEK.days into HTML
   ========================================================================= */
(function () {
  'use strict';

  var DAYS = window.GREEK.days || [];

  function byDay(n) {
    for (var i = 0; i < DAYS.length; i++) if (DAYS[i].day === n) return DAYS[i];
    return null;
  }

  function phraseCards(items) {
    var esc = UI.esc, sayBtn = UI.sayBtn;
    return '<div style="display:grid;gap:10px">' + items.map(function (it) {
      var g = it[0], e = it[1], u = it[2];
      return '<div class="phrase-card"><div class="g"><span class="gr">' + esc(g) + '</span>' + sayBtn(g, 'small') + '</div>' +
        '<div class="e">' + esc(e) + '</div>' + (u ? '<div class="u">' + esc(u) + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  }

  function letterCards(rows) {
    var esc = UI.esc, sayBtn = UI.sayBtn;
    return '<div class="alpha-grid">' + rows.map(function (r) {
      var name = r[1].split(' (')[0];
      return '<div class="alpha-card"><div class="big">' + esc(r[0]) + sayBtn(name) + '</div>' +
        '<div class="name">' + esc(r[1]) + '</div>' +
        '<div class="ipa">' + esc(r[2]) + '</div>' +
        '<div class="hint" style="margin-top:6px">' + esc(r[3]) + sayBtn(r[3].split(' · ')[0], 'small') + '</div></div>';
    }).join('') + '</div>';
  }

  function flashCards(items) {
    var esc = UI.esc;
    return '<div class="flash-grid">' + items.map(function (it) {
      return '<div class="flash" role="button" tabindex="0" aria-label="Flip card">' +
        '<span class="front gr">' + esc(it[0]) + '</span>' +
        '<span class="back">' + esc(it[1]) + '</span>' +
        '<span class="hint">Tap to flip</span></div>';
    }).join('') + '</div>' +
      '<p class="tiny muted" style="margin:10px 0 0">Say the Greek aloud before you flip the card.</p>';
  }

  function section(s, i) {
    var t = s.t;
    var body = '';
    if (t === 'prose') body = s.html;
    else if (t === 'vocab') body = UI.vocabTable(s.rows);
    else if (t === 'conj') body = UI.conjBlock(s.rows);
    else if (t === 'letters') body = letterCards(s.rows);
    else if (t === 'table') body = UI.vocabTable(s.rows, s.head);
    else if (t === 'phrases') body = phraseCards(s.items);
    else if (t === 'flash') body = flashCards(s.items);
    else if (t === 'dialogue') body = UI.dialogueBlock(s.d);
    else if (t === 'quiz') body = window.renderQuiz(s.title || 'Practice', s.items, s.day);
    else if (t === 'list') body = '<ul class="small" style="padding-left:1.15em;margin:0">' +
      s.items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    else if (t === 'tip' || t === 'warn' || t === 'note' || t === 'ok') {
      return '<div class="' + (t === 'note' ? 'note-box' : t) + '" style="margin:0 0 18px">' + (s.title ? '<p><b>' + s.title + '</b> ' + s.html + '</p>' : s.html) + '</div>';
    }

    return '<div class="section">' +
      (s.title ? '<div class="sec-head"><span class="sec-num">' + (i + 1) + '</span><h2>' + s.title + '</h2></div>' : '') +
      body + '</div>';
  }

  window.renderDay = function (n) {
    var esc = UI.esc;
    var d = byDay(n);
    if (!d) {
      return '<span class="kicker">Not found</span><h1>That lesson does not exist</h1>' +
        '<p class="lead">There are ' + DAYS.length + ' days in this course.</p>' +
        '<a class="btn" href="#/">Back to the beginning</a>';
    }
    var idx = DAYS.indexOf(d);
    var prev = DAYS[idx - 1], next = DAYS[idx + 1];

    var goals = (d.goals || []).map(function (g) { return '<li>' + g + '</li>'; }).join('');
    var homework = (d.homework || []).map(function (g) { return '<li>' + g + '</li>'; }).join('');

    return '<span class="kicker">Day ' + d.day + ' · Week ' + d.week + ' · ' + UI.esc(d.minutes || '15 min') + '</span>' +
      '<h1>' + (window.GREEK.icon ? window.GREEK.icon(window.GREEK.dayIcon(d.day), 'h1icon') : '') + d.title + '</h1>' +
      '<p class="lead"><span class="gr">' + UI.esc(d.gr) + '</span> ' + UI.sayBtn(d.gr, 'small') + '</p>' +
      '<div class="card"><div class="spread"><h3 style="margin:0">Today you will…</h3>' +
      (d.level ? '<span class="pill blue">' + esc(d.level) + '</span>' : '') + '</div>' +
      '<ul class="small" style="padding-left:1.15em;margin:10px 0 0">' + goals + '</ul></div>' +
      '<div class="teacher-slot">' + (window.teacherCard ? window.teacherCard(d.day % 2 ? 'filiana' : 'martha', { index: d.day }) : '') + '</div>' +
      (d.sections || []).map(section).join('') +
      (homework ? '<div class="card" style="border-left:4px solid var(--gold)"><h3 style="margin:0 0 6px">Homework · Εργασία</h3>' +
        '<ol class="small" style="padding-left:1.2em;margin:0">' + homework + '</ol>' +
        '<p class="tiny muted" style="margin:10px 0 0">Ten more minutes now saves an hour of revision later.</p></div>' : '') +
      '<div class="card" style="text-align:center">' + window.markCompleteBtn(d.day) + '</div>' +
      '<div class="daynav">' +
      (prev ? '<a class="btn ghost" href="#/day/' + prev.day + '">← Day ' + prev.day + ' · ' + UI.esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn ghost" href="#/day/' + next.day + '">Day ' + next.day + ' · ' + UI.esc(next.title) + ' →</a>' : '<span></span>') +
      '</div>';
  };
})();
