/* Pinewood BLAST Adult Greek — Ms Filiana and Ms Martha
   Two clickable teacher faces: each click shows and speaks a new tip. */
(function () {
  var T = (window.TEACHERS = window.TEACHERS || {});

  function face(o) {
    return '<svg viewBox="0 0 120 120" role="img" aria-label="' + o.label + '">' +
      '<defs><linearGradient id="bg' + o.id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + o.bg1 + '"/><stop offset="1" stop-color="' + o.bg2 + '"/></linearGradient></defs>' +
      '<circle cx="60" cy="60" r="58" fill="url(#bg' + o.id + ')" stroke="#e1d8c2" stroke-width="2"/>' +
      /* shoulders */
      '<path d="M18 112c4-17 20-26 42-26s38 9 42 26z" fill="' + o.top + '"/>' +
      '<path d="M52 86h16v10a8 8 0 01-16 0z" fill="#e8b48f"/>' +
      /* neck + head */
      '<ellipse cx="60" cy="58" rx="27" ry="30" fill="#f2c6a3"/>' +
      /* hair */
      o.hair +
      /* eyes */
      '<ellipse cx="50" cy="57" rx="3.4" ry="4" fill="#3b2a1e"/>' +
      '<ellipse cx="70" cy="57" rx="3.4" ry="4" fill="#3b2a1e"/>' +
      '<circle cx="51.2" cy="55.6" r="1.1" fill="#fff"/><circle cx="71.2" cy="55.6" r="1.1" fill="#fff"/>' +
      /* brows */
      '<path d="M44 49c4-3 8-3 11-1M65 48c3-2 7-2 11 1" stroke="#5a4433" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* nose + smile */
      '<path d="M60 60v7c0 2-2 3-4 3" stroke="#d99f79" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 74c3 4 7 6 10 6s7-2 10-6" stroke="#a5503f" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      /* cheeks */
      '<ellipse cx="43" cy="68" rx="5" ry="3" fill="#eda98f" opacity=".55"/>' +
      '<ellipse cx="77" cy="68" rx="5" ry="3" fill="#eda98f" opacity=".55"/>' +
      o.extra +
      '</svg>';
  }

  T.martha = {
    id: 'martha',
    name: 'Ms Martha',
    gr: 'Κυρία Μάρθα',
    role: 'Grammar & pronunciation · Γραμματική',
    tips: [
      { en: 'Two colours of vowel: stress the syllable with the accent, and keep the others short. Listen to the rhythm before you read the word.', gr: 'καφές, νερό, παρακαλώ' },
      { en: 'The article tells you the gender: ο for masculine, η for feminine, το for neuter. Learn each noun with its article from day one.', gr: 'ο δρόμος, η θάλασσα, το σπίτι' },
      { en: 'In the present tense the ending carries the person — the pronoun is optional. λέω, λες, λέει, λέμε, λέτε, λένε.', gr: 'Εγώ μένω στην Αθήνα.' },
      { en: 'Verbs in -άω lose the ώ in the plural: μιλάω, μιλάς, μιλάει, μιλάμε, μιλάτε, μιλάνε.', gr: 'Μιλάτε ελληνικά;' },
      { en: 'Questions rise at the end and take a Greek question mark (;). Word order can stay the same as a statement.', gr: 'Μένεις στην Αίγινα;' },
      { en: 'One sound, five spellings: η, ι, υ, ει, οι all say “ee”. Your ear cannot choose the spelling — your memory must.', gr: 'η γη, το παιδί, το ψωμί' },
      { en: '“Δεν” goes straight before the verb, and the accent moves: δεν θέλω, δεν ξέρω, δεν πάω.', gr: 'Δεν καταλαβαίνω.' },
      { en: 'For polite requests use the plural form of the verb, even with one person: Μπορείτε;, Θέλετε;, Παρακαλώ.', gr: 'Μπορείτε να μου πείτε;' },
      { en: 'Accents are never optional in writing. The same letters without the accent can be a different word.', gr: 'πότε (when) · ποτέ (never)' },
      { en: 'When you read aloud, group words in phrases, not one by one. Greek flows in pairs: θέλω νερό, πάμε σπίτι.', gr: 'Θέλω έναν καφέ, παρακαλώ.' },
      { en: 'The future is easy: θα + present tense. No new endings to learn.', gr: 'Θα πάω αύριο.' },
      { en: 'μιλάω / μιλάς / μιλάει — the third person singular is the shape you will hear most in conversation.', gr: 'Αυτός μιλάει πολύ καλά.' },
      { en: 'Masculine nouns in -ος take -οι in the plural, feminine in -η take -ες, neuter in -ο take -α.', gr: 'ο φίλος → οι φίλοι, η μέρα → οι μέρες' }
    ],
    face: face({
      id: 'm', label: 'Ms Martha', bg1: '#e8f0e3', bg2: '#cfdfc6', top: '#2f5d43',
      hair: '<path d="M32 45c0-17 12-27 28-27s28 10 28 27c0 8-3 13-4 16-2-11-5-17-8-19-6 4-16 6-26 3-6-2-9-4-10-1-3 4-4 10-4 17-2-4-4-8-4-16z" fill="#5c4632"/>' +
        '<path d="M31 44c-4 12-3 22 0 28 2-10 3-19 2-28zM89 44c4 12 3 22 0 28-2-10-3-19-2-28z" fill="#5c4632"/>',
      extra: '<g stroke="#3f3427" stroke-width="2" fill="none"><circle cx="50" cy="57" r="8"/><circle cx="70" cy="57" r="8"/><path d="M58 57h4"/></g>' +
        '<circle cx="70" cy="84" r="2.4" fill="#c9a227"/>'
    })
  };

  T.filiana = {
    id: 'filiana',
    name: 'Ms Filiana',
    gr: 'Κυρία Φιλιάνα',
    role: 'Conversation & vocabulary · Κουβέντα',
    tips: [
      { en: 'Start every conversation the Greek way: Καλημέρα until about noon, Καλησπέρα after. Add σας to be polite.', gr: 'Καλημέρα σας!' },
      { en: 'You only need three phrases at a café: Θέλω…, Παρακαλώ, Τον λογαριασμό. Everything else is a bonus.', gr: 'Έναν καφέ, παρακαλώ.' },
      { en: 'When you do not understand, say it and smile: Δεν καταλαβαίνω. Μπορείτε να το πείτε πιο αργά;', gr: 'Δεν καταλαβαίνω.' },
      { en: 'Answer with a little more than yes or no. “Ναι, βέβαια” and “Όχι, ευχαριστώ” sound natural and friendly.', gr: 'Ναι, βέβαια.' },
      { en: 'Prices: ask Πόσο κάνει; and listen for the number plus ευρώ. Greeks often say the euro sign as “ευρώ”.', gr: 'Πόσο κάνει;' },
      { en: 'At the pharmacy say what hurts with Με πονάει… + the part of the body. It works for almost everything.', gr: 'Με πονάει το κεφάλι.' },
      { en: 'Ask about the other person. Greek conversation is full of Εσύ;, Εσείς;, Και εσύ; — it keeps the talk going.', gr: 'Και εσύ, τι κάνεις;' },
      { en: 'Use να + verb for “let me / can I”: Να πληρώσω; is how you ask to pay.', gr: 'Να πληρώσω, παρακαλώ;' },
      { en: 'Small talk is weather, food and family. Three safe openers: Τι κάνεις;, Τι καιρό κάνει;, Από πού είσαι;', gr: 'Από πού είσαι;' },
      { en: 'Say ευχαριστώ and παρακαλώ often. Greeks use them at the start, middle and end of an exchange.', gr: 'Ευχαριστώ πολύ.' },
      { en: 'Ordering for two: Θα πάρουμε… (we will have). It sounds relaxed and is exactly what a taverna expects.', gr: 'Θα πάρουμε δύο σαλάτες.' },
      { en: 'When you leave, say it properly: Αντίο, καλή συνέχεια! or Καλό βράδυ! depending on the hour.', gr: 'Καλή συνέχεια!' },
      { en: 'Learn whole phrases, not single words. “Ένα εισιτήριο για την Αίγινα” is easier to use than the parts.', gr: 'Ένα εισιτήριο για την Αίγινα.' }
    ],
    face: face({
      id: 'f', label: 'Ms Filiana', bg1: '#f7e9da', bg2: '#e8cdb3', top: '#a3642f',
      hair: '<path d="M30 52c0-20 13-32 30-32s30 12 30 32c0 6-1 10-2 13-3-13-8-20-14-23-8 5-20 6-29 2-5 3-8 9-10 21-2-4-5-8-5-13z" fill="#3d2a1f"/>' +
        '<path d="M30 52c-6 14-6 30 2 40 1-16 3-28 4-40zM90 52c6 14 6 30-2 40-1-16-3-28-4-40z" fill="#3d2a1f"/>',
      extra: '<circle cx="34" cy="72" r="3.2" fill="#c9a227"/><circle cx="86" cy="72" r="3.2" fill="#c9a227"/>' +
        '<path d="M55 44c3-2 7-2 10 0" stroke="#3d2a1f" stroke-width="1.6" fill="none"/>'
    })
  };

  function tipAt(id, i) {
    var t = T[id];
    if (!t) return { en: '', gr: '' };
    var tips = t.tips;
    return tips[((i % tips.length) + tips.length) % tips.length];
  }

  var counters = { martha: 0, filiana: 0 };

  window.teacherCard = function (id, opts) {
    opts = opts || {};
    var t = T[id];
    if (!t) return '';
    var i = opts.index != null ? opts.index : counters[id];
    var tip = tipAt(id, i);
    return '<div class="teacher teacher-' + id + '" data-teacher="' + id + '" data-tip-i="' + i + '">' +
      '<button class="teacher-face" data-teacher-face="' + id + '" aria-label="Ask ' + t.name + ' for a tip">' + t.face +
      '<span class="teacher-pulse" aria-hidden="true"></span></button>' +
      '<div class="teacher-body">' +
      '<p class="teacher-name"><b>' + t.name + '</b> <span>· ' + t.role + '</span></p>' +
      '<p class="teacher-tip" data-tip>' + tip.en + '</p>' +
      '<p class="teacher-gr"><span class="gr">' + tip.gr + '</span>' +
      '<button class="say" data-say="' + tip.gr.replace(/"/g, '&quot;') + '" aria-label="Hear the Greek">🔊</button></p>' +
      '<p class="teacher-hint">Tap her face for another tip →</p>' +
      '</div></div>';
  };

  /* Compact pair of faces, used on the home page */
  window.teacherPair = function () {
    return '<div class="teacher-pair">' +
      '<div class="card teacher-intro">' +
      '<h3 style="margin-top:0">Meet your teachers</h3>' +
      '<p class="small">Two familiar faces from class. Tap either one: she will give you a tip for the day and say the Greek out loud.</p>' +
      '<div class="pair-row">' +
      '<div class="pair-item" data-teacher="martha">' +
      '<button class="teacher-face" data-teacher-face="martha" aria-label="Ask Ms Martha for a tip">' + T.martha.face + '<span class="teacher-pulse" aria-hidden="true"></span></button>' +
      '<p class="pair-name"><b>Ms Martha</b><small>Grammar &amp; pronunciation</small></p></div>' +
      '<div class="pair-item" data-teacher="filiana">' +
      '<button class="teacher-face" data-teacher-face="filiana" aria-label="Ask Ms Filiana for a tip">' + T.filiana.face + '<span class="teacher-pulse" aria-hidden="true"></span></button>' +
      '<p class="pair-name"><b>Ms Filiana</b><small>Conversation &amp; vocabulary</small></p></div>' +
      '</div>' +
      '<div class="pair-bubble" data-pair-bubble><span class="who"></span><span class="what"></span>' +
      '<span class="gr" data-pair-gr></span>' +
      '<button class="say" data-say="" aria-label="Hear the Greek">🔊</button></div>' +
      '<p class="tiny muted" style="margin:8px 0 0">' + T.martha.tips.length + ' tips from each teacher — tap again for the next.</p>' +
      '</div></div>';
  };

  /* Called after a quiz is graded: a teacher reacts to the score */
  window.teacherFeedback = function (pct) {
    var good = pct >= 80, ok = pct >= 60;
    var who = good ? T.martha : ok ? T.filiana : T.filiana;
    var en = good ? 'Μπράβο! That is a strong score — say the answers out loud once more and they are yours.'
      : ok ? 'That is a pass. Look again at the ones you missed, then say each correct answer aloud.'
        : 'Do not worry — this is exactly what practice is for. Read the correct answers, then try the quiz again tomorrow.';
    var gr = good ? 'Μπράβο σου!' : ok ? 'Καλή δουλειά!' : 'Μην ανησυχείς.';
    return '<div class="teacher teacher-inline teacher-' + who.id + '">' +
      '<div class="teacher-face static">' + who.face + '</div>' +
      '<div class="teacher-body"><p class="teacher-name"><b>' + who.name + '</b> <span>· ' + who.role + '</span></p>' +
      '<p class="teacher-tip">' + en + '</p>' +
      '<p class="teacher-gr"><span class="gr">' + gr + '</span>' +
      '<button class="say" data-say="' + gr + '" aria-label="Hear the Greek">🔊</button></p></div></div>';
  };
})();
