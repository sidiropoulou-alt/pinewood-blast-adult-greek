/* Pinewood BLAST Adult Greek — Ms Filiana and Ms Martha
   Two clickable teacher faces: each click shows and speaks a new tip. */
(function () {
  var T = (window.TEACHERS = window.TEACHERS || {});

  function face(o) {
    var skin = o.skin || '#f2c6a3';
    return '<svg viewBox="0 0 120 120" role="img" aria-label="' + o.label + '">' +
      '<defs><linearGradient id="bg' + o.id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + o.bg1 + '"/><stop offset="1" stop-color="' + o.bg2 + '"/></linearGradient></defs>' +
      '<circle cx="60" cy="60" r="58" fill="url(#bg' + o.id + ')" stroke="#e1d8c2" stroke-width="2"/>' +
      /* shoulders + neck */
      '<path d="M18 112c4-17 20-26 42-26s38 9 42 26z" fill="' + o.top + '"/>' +
      '<path d="M52 85h16v11a8 8 0 0 1-16 0z" fill="' + skin + '"/>' +
      /* hair behind the head */
      (o.hairBack || '') +
      /* head */
      '<ellipse cx="60" cy="58" rx="26" ry="30" fill="' + skin + '"/>' +
      /* hair in front */
      o.hair +
      /* brows */
      '<path d="M43 51c3-3 8-3 11 0M63 51c3-3 8-3 11 0" stroke="' + o.brow + '" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* eyes */
      '<ellipse cx="50" cy="59" rx="3.7" ry="4.3" fill="#4b3826"/>' +
      '<ellipse cx="70" cy="59" rx="3.7" ry="4.3" fill="#4b3826"/>' +
      '<circle cx="51.2" cy="57.5" r="1.15" fill="#fff"/><circle cx="71.2" cy="57.5" r="1.15" fill="#fff"/>' +
      '<path d="M45.4 54.6c1.8-2.2 4.6-2.2 6.4 0M64.2 54.6c1.8-2.2 4.6-2.2 6.4 0" stroke="#3a2a1c" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
      /* nose */
      '<path d="M60 61v6c0 2-1.6 3-3.4 3" stroke="#d99f79" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      /* lips */
      '<path d="M51 77c2.4-2 4.6-1 5.6.2 1-1.2 3.2-2.2 5.6-.2 1 2.4.4 4.2-2.4 4.8h-6.4c-2.8-.6-3.4-2.4-2.4-4.8z" fill="' + o.lip + '"/>' +
      /* cheeks */
      '<ellipse cx="43" cy="69" rx="5" ry="3" fill="' + o.blush + '" opacity=".5"/>' +
      '<ellipse cx="77" cy="69" rx="5" ry="3" fill="' + o.blush + '" opacity=".5"/>' +
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
      skin: '#f6d0ac', brow: '#b08b52', lip: '#c9737a', blush: '#ef9f8d',
      hairBack: '<path d="M26 55c-5 13-6 27-2 40 2 7 5 12 9 16-2-9-2-18-1-26 2-10 1-20-1-30zM94 55c5 13 6 27 2 40-2 7-5 12-9 16 2-9 2-18 1-26-2-10-1-20 1-30z" fill="#dcb25f"/>',
      hair: '<path d="M60 20c-20 0-31 13-31 33 0 8 1 15 2 21-3 11-5 19-4 26 4-6 8-9 12-9-1 7 0 12 2 16 3-6 6-10 10-12-1-9-2-17-2-25 4 4 8 6 12 6s8-2 12-6c0 8-1 16-2 25 4 2 7 6 10 12 2-4 3-9 2-16 4 0 8 3 12 9 1-7-1-15-4-26 1-6 2-13 2-21 0-20-11-33-31-33z" fill="#e8c476"/>' +
        '<path d="M40 33c4-8 11-13 20-13 10 0 17 5 21 14-6-6-13-9-21-9s-15 3-20 8z" fill="#f4dda6"/>' +
        '<path d="M34 52c1-8 4-14 8-19 1 9-1 17-4 24-2 0-3-2-4-5z" fill="#f4dda6"/>',
      extra: '<g fill="#d9a77e"><circle cx="45" cy="70" r=".9"/><circle cx="48" cy="73" r=".9"/><circle cx="42" cy="73" r=".9"/><circle cx="75" cy="70" r=".9"/><circle cx="72" cy="73" r=".9"/><circle cx="78" cy="73" r=".9"/></g>' +
        '<circle cx="87" cy="72" r="2.2" fill="#c9a227"/>'
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
      skin: '#f7d1b0', brow: '#c9a25e', lip: '#b8555f', blush: '#ee9f86',
      hairBack: '<path d="M26 55c-5 13-6 27-2 40 2 7 5 12 9 16-2-9-2-18-1-26 2-10 1-20-1-30zM94 55c5 13 6 27 2 40-2 7-5 12-9 16 2-9 2-18 1-26-2-10-1-20 1-30z" fill="#dcb25f"/>',
      hair: '<path d="M60 20c-20 0-31 13-31 33 0 8 1 15 2 21-3 11-5 19-4 26 4-6 8-9 12-9-1 7 0 12 2 16 3-6 6-10 10-12-1-9-2-17-2-25 4 4 8 6 12 6s8-2 12-6c0 8-1 16-2 25 4 2 7 6 10 12 2-4 3-9 2-16 4 0 8 3 12 9 1-7-1-15-4-26 1-6 2-13 2-21 0-20-11-33-31-33z" fill="#e8c476"/>' +
        '<path d="M40 33c4-8 11-13 20-13 10 0 17 5 21 14-6-6-13-9-21-9s-15 3-20 8z" fill="#f4dda6"/>' +
        '<path d="M34 52c1-8 4-14 8-19 1 9-1 17-4 24-2 0-3-2-4-5z" fill="#f4dda6"/>',
      extra: '<circle cx="33" cy="74" r="3.2" fill="#c9a227"/><circle cx="87" cy="74" r="3.2" fill="#c9a227"/>' +
        '<path d="M44 44c3-3 7-4 10-4M66 40c3 0 7 1 10 4" stroke="#d8ae5e" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
        '<path d="M30 96c8-4 18-5 30-5" stroke="#fff" stroke-width="1.4" fill="none" opacity=".5"/>'
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
      '<p class="teacher-gr"><span class="gr">' + tip.gr + '</span></p>' +
      '<p class="teacher-hint">Tap her face for another tip →</p>' +
      '</div></div>';
  };

  /* Compact pair of faces, used on the home page */
  window.teacherPair = function () {
    return '<div class="teacher-pair">' +
      '<div class="card teacher-intro">' +
      '<h3 style="margin-top:0">Meet your teachers</h3>' +
      '<p class="small">Two familiar faces from class. Tap either one: she will give you a tip for the day, in English and in Greek.</p>' +
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
      '</div>' +
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
      '<p class="teacher-gr"><span class="gr">' + gr + '</span></p></div></div>';
  };
})();
