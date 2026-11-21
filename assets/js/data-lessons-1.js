/* Pinewood BLAST Adult Greek — lessons 1–10 */
(function () {
  var G = window.GREEK = window.GREEK || {};
  G.days = (G.days || []).concat([

  {
    day: 1, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '15 min',
    title: 'The alphabet, part 1', gr: 'Το αλφάβητο · Α έως Μ',
    goals: [
      'Read and pronounce the first twelve Greek letters',
      'Read real Greek words aloud, even if you do not know them yet',
      'Spot the letters that look familiar but sound completely different'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Modern Greek uses <b>24 letters</b>. That is fewer than English — and, unlike English, Greek is <b>spelled the way it sounds</b>. Once you know the letters, you can read almost any word you meet: shop signs, street names, menus.</p>' +
        '<p>There are seven vowels (<span class="gr">α ε η ι ο υ ω</span>) and seventeen consonants. Today you learn the first twelve letters, Α to Μ. Take them slowly: one sound per letter, out loud.</p>' },
      { t: 'art', name: 'island' },
      { t: 'letters', title: 'Letters Α – Μ', rows: [
        ['Α α', 'άλφα (álfa)', 'a — “ah” as in father', 'μάμα · mum'],
        ['Β β', 'βήτα (víta)', 'v — as in van (never “b”)', 'βιβλίο · book'],
        ['Γ γ', 'γάμα (gáma)', 'soft gh, like a gargled g', 'γάλα · milk'],
        ['Δ δ', 'δέλτα (délta)', 'th — as in this', 'δρόμος · road'],
        ['Ε ε', 'έψιλον (épsilon)', 'e — as in bed', 'Ελένη · Helen'],
        ['Ζ ζ', 'ζήτα (zíta)', 'z — as in zoo', 'ζωή · life'],
        ['Η η', 'ήτα (íta)', 'i — as in machine (never “h”)', 'ήλιος · sun'],
        ['Θ θ', 'θήτα (thíta)', 'th — as in think', 'θάλασσα · sea'],
        ['Ι ι', 'γιώτα (yóta)', 'i — as in machine', 'ιδέα · idea'],
        ['Κ κ', 'κάπα (kápa)', 'k — as in kite', 'καφές · coffee'],
        ['Λ λ', 'λάμδα (lámda)', 'l — as in lamp', 'λάδι · oil'],
        ['Μ μ', 'μι (mi)', 'm — as in mother', 'μήλο · apple']
      ] },
      { t: 'tip', title: 'Three traps for English speakers.',
        html: 'Greek <span class="gr">Β</span> is <b>v</b>, <span class="gr">Η</span> is <b>i</b>, and <span class="gr">Ρ</span> is <b>r</b>. The capital letters look like English B, H and P, but they are not. <span class="gr">Π</span> is p, <span class="gr">Χ</span> is a throaty “ch”, and <span class="gr">Υ</span> is another i.' },
      { t: 'phrases', title: 'Read these out loud', items: [
        ['Αθήνα', 'Athens'], ['μαμά', 'mum'], ['μπαμπάς', 'dad', 'the μπ here is a b sound — you meet it on Day 3'],
        ['καφές', 'coffee'], ['γάλα', 'milk'], ['ψωμί', 'bread'], ['Ελλάδα', 'Greece'], ['ναι', 'yes'], ['όχι', 'no']
      ] },
      { t: 'quiz', title: 'Day 1 — check yourself', day: 1, items: [
        { type: 'choice', q: 'How is the letter {{g:Β β}} pronounced?', options: ['b as in boy', 'v as in van', 'f as in fan', 'p as in pen'], a: 1,
          exp: 'Greek beta is a v sound. The b sound is written μπ.' },
        { type: 'choice', q: 'How is {{g:Η η}} pronounced?', options: ['h as in hat', 'e as in bed', 'i as in machine', 'n as in no'], a: 2,
          exp: 'Ήτα is a vowel, pronounced “ee”. The word ημέρα is i-ME-ra.' },
        { type: 'choice', q: 'Which word means “sea”?', options: ['θάλασσα', 'γάλα', 'ζωή', 'λάδι'], a: 0 },
        { type: 'choice', q: 'What does {{g:καφές}} mean?', options: ['bread', 'coffee', 'apple', 'milk'], a: 1 },
        { q: 'Write “yes” in Greek.', a: 'ναι', say: 'ναι', exp: 'ναι is pronounced “ne” — one of the first surprises for English speakers.' },
        { q: 'Write the Greek word for “water”.', a: 'νερό', accept: ['νερο'], say: 'νερό' }
      ] }
    ],
    homework: [
      'Copy the twelve letters by hand, saying each sound as you write it.',
      'Read the nine words in “Read these out loud” three times without looking at the English.',
      'Tomorrow, before you start Day 2, read those same words again from memory.'
    ]
  },

  {
    day: 2, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '15 min',
    title: 'The alphabet, part 2', gr: 'Το αλφάβητο · Ν έως Ω',
    goals: [
      'Read the remaining twelve letters',
      'Know the difference between σ and ς',
      'Read a whole Greek word list without help'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Twelve letters to go, and with them you can read the entire alphabet. Notice that Greek has <b>two letters for the “o” sound</b> (<span class="gr">ο</span> and <span class="gr">ω</span>) and <b>three</b> common spellings of “i” (<span class="gr">η, ι, υ</span>). They sound identical; only spelling and word history tell them apart.</p>' },
      { t: 'letters', title: 'Letters Ν – Ω', rows: [
        ['Ν ν', 'νι (ni)', 'n — as in net', 'νερό · water'],
        ['Ξ ξ', 'ξι (ksi)', 'x — as in box', 'ξένος · stranger'],
        ['Ο ο', 'όμικρον (ómikron)', 'o — as in pot', 'πόλη · city'],
        ['Π π', 'πι (pi)', 'p — as in pen', 'πατέρας · father'],
        ['Ρ ρ', 'ρο (ro)', 'r — lightly rolled', 'ρολόι · watch'],
        ['Σ σ ς', 'σίγμα (sígma)', 's — as in sun', 'σπίτι · house'],
        ['Τ τ', 'ταυ (taf)', 't — as in table', 'τρένο · train'],
        ['Υ υ', 'ύψιλον (ípsilon)', 'i — as in machine', 'ύπνος · sleep'],
        ['Φ φ', 'φι (fi)', 'f — as in fish', 'φίλος · friend'],
        ['Χ χ', 'χι (chi)', 'ch — Scottish “loch”', 'χέρι · hand'],
        ['Ψ ψ', 'ψι (psi)', 'ps — as in lips', 'ψάρι · fish'],
        ['Ω ω', 'ωμέγα (oméga)', 'o — same as ο', 'ώρα · hour']
      ] },
      { t: 'tip', title: 'One letter, two shapes.',
        html: '<span class="gr">σ</span> is used inside a word; <span class="gr">ς</span> only at the end: <span class="gr">Σοφία</span>, <span class="gr">σπίτι</span>, <span class="gr">Ελλάς</span>. Same letter, same sound.' },
      { t: 'phrases', title: 'Your first full words', items: [
        ['νερό', 'water'], ['ψωμί', 'bread'], ['τυρί', 'cheese'], ['ελιά', 'olive'],
        ['φίλος', 'friend (male)'], ['σπίτι', 'house, home'], ['ώρα', 'hour, time'], ['χέρι', 'hand'],
        ['πατέρας', 'father'], ['μητέρα', 'mother'], ['αδελφός', 'brother'], ['αδελφή', 'sister']
      ] },
      { t: 'note', title: 'Reading tip.',
        html: 'Say each word twice: once slowly, letter by letter, then at normal speed. Your brain needs the slow pass at first — it will not need it for long.' },
      { t: 'quiz', title: 'Day 2 — check yourself', day: 2, items: [
        { type: 'choice', q: 'Which letter is pronounced “ps”?', options: ['ξ', 'ψ', 'χ', 'φ'], a: 1 },
        { type: 'choice', q: 'Which spelling of “s” goes at the end of a word?', options: ['σ', 'ς', 'Σ', 'σς'], a: 1 },
        { type: 'choice', q: 'What does {{g:σπίτι}} mean?', options: ['water', 'house', 'friend', 'hour'], a: 1 },
        { type: 'choice', q: '{{g:τυρί}} is…', options: ['cheese', 'bread', 'olive', 'milk'], a: 0 },
        { q: 'Write the Greek word for “friend” (male).', a: 'φίλος', accept: ['φιλος'], say: 'φίλος' },
        { q: 'Write “mother” in Greek.', a: 'μητέρα', accept: ['μητερα'], say: 'μητέρα' }
      ] }
    ],
    homework: [
      'Write the full alphabet from memory, capitals and small letters.',
      'Read the twelve words above aloud twice, then cover the English and translate them.',
      'Find one Greek sign, menu or label today and try to read it.'
    ]
  },

  {
    day: 3, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '18 min',
    title: 'Letter pairs and the sounds of Greek', gr: 'Δίψηφα φωνήεντα και σύμφωνα',
    goals: [
      'Read the vowel pairs αι, ει, οι, ου, αυ, ευ',
      'Read the consonant pairs μπ, ντ, γκ, γγ, τσ, τζ',
      'Understand why so many Greek words seem to be spelled with “i”'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Greek builds extra sounds by writing <b>two letters together</b>. These pairs are read as one sound, so learn them as single units. Most appear in the first words you will speak.</p>' },
      { t: 'table', title: 'Vowel pairs (δίψηφα φωνήεντα)', head: ['Pair', 'Sounds like', 'Example'], rows: [
        ['αι', 'e — as in bed', 'και (and), παιδί (child)'],
        ['ει', 'i — as in machine', 'είμαι (I am), χειμώνας (winter)'],
        ['οι', 'i — as in machine', 'οι (the, plural), οικογένεια (family)'],
        ['ου', 'u — as in food', 'μουσική (music), που (where)'],
        ['αυ', 'av / af', 'αυτός (he), αυτοκίνητο (car)'],
        ['ευ', 'ev / ef', 'ευχαριστώ (thank you), Ευρώπη (Europe)']
      ] },
      { t: 'note', title: 'Why “i” everywhere?',
        html: 'Greek kept the ancient spellings of η, ι, υ, ει and οι — all of which now sound like “i”. It is called iotacism, and it is why <span class="gr">είμαι</span> is pronounced “EE-me”, not “AY-me”. Learn words as pictures of sound, not letter-by-letter puzzles.' },
      { t: 'table', title: 'Consonant pairs (δίψηφα σύμφωνα)', head: ['Pair', 'Sounds like', 'Example'], rows: [
        ['μπ', 'b — as in book (mb inside a word)', 'μπύρα (beer), μπαμπάς (dad)'],
        ['ντ', 'd — as in door (nd inside a word)', 'ντουλάπα (wardrobe), πέντε (five)'],
        ['γκ', 'g — as in go', 'γκολ (goal), αγκαλιά (hug)'],
        ['γγ', 'ng — as in finger', 'αγγούρι (cucumber), άγγελος (angel)'],
        ['τσ', 'ts — as in cats', 'τσάι (tea), τσάντα (bag)'],
        ['τζ', 'dz — as in adze', 'τζάμι (window pane), Τζών (John)']
      ] },
      { t: 'phrases', title: 'Read these aloud', items: [
        ['και', 'and'], ['είμαι', 'I am'], ['είσαι', 'you are'], ['μπορώ', 'I can'],
        ['πέντε', 'five'], ['τσάι', 'tea'], ['μπύρα', 'beer'], ['αγγούρι', 'cucumber'],
        ['ευχαριστώ', 'thank you'], ['αυτοκίνητο', 'car'], ['μουσική', 'music'], ['οικογένεια', 'family']
      ] },
      { t: 'quiz', title: 'Day 3 — check yourself', day: 3, items: [
        { type: 'choice', q: 'How does {{g:ου}} sound?', options: ['oo as in food', 'ow as in cow', 'ee as in see', 'oh as in go'], a: 0 },
        { type: 'choice', q: 'What does {{g:μπύρα}} mean?', options: ['bread', 'beer', 'water', 'tea'], a: 1 },
        { type: 'choice', q: '{{g:πέντε}} is…', options: ['four', 'five', 'nine', 'ten'], a: 1 },
        { type: 'choice', q: 'Which pair sounds like “dz”?', options: ['τσ', 'τζ', 'γγ', 'γκ'], a: 1 },
        { q: 'Write “and” in Greek.', a: 'και', say: 'και' },
        { q: 'Write “thank you”.', a: 'ευχαριστώ', accept: ['ευχαριστω'], say: 'ευχαριστώ' }
      ] }
    ],
    homework: [
      'Read the twelve phrases three times, then write five of them from memory.',
      'Say the alphabet, then the vowel pairs, in one continuous run.',
      'Say είμαι, οικογένεια, ιδέα aloud and notice that “ει”, “οι” and “ι” sound the same.'
    ]
  },

  {
    day: 4, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '18 min',
    title: 'Stress, accents and reading like a local', gr: 'Ο τόνος και η προφορά',
    goals: [
      'Place the stress correctly in Greek words',
      'Use the accent mark (τόνος) to read new words',
      'Read a Greek address, sign and name out loud'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Every Greek word of more than one syllable carries <b>one accent</b> — the <span class="gr">τόνος</span>. It marks the stressed syllable, the one you say louder and longer. Greek stress is not decoration: <span class="gr">πότε</span> means “when”, <span class="gr">ποτέ</span> means “never”.</p><p>Three practical rules cover almost everything you will read:</p>' },
      { t: 'list', title: 'The three rules of stress', items: [
        '<b>One accent per word.</b> Never two. A word with none is a single syllable, or the accent was dropped in capitals.',
        '<b>The accent sits on one of the last three syllables.</b> <span class="gr">άνθρωπος</span> (ÁN-thro-pos), <span class="gr">ανθρώπου</span> (an-THRÓ-pou).',
        '<b>An ending can move it.</b> <span class="gr">δάσκαλος</span> → <span class="gr">δασκάλου</span>. Learn words with their accent, not without it.'
      ] },
      { t: 'table', title: 'Minimal pairs: stress changes meaning', head: ['Word', 'Meaning', 'Compare'], rows: [
        ['πότε', 'when?', 'ποτέ · never'],
        ['πώς', 'how?', 'πως · that (as in “I think that…”)'],
        ['νόμος', 'law', 'νομός · prefecture'],
        ['γέρος', 'old man', 'γερός · strong'],
        ['καλός', 'good', 'κάλος · callus']
      ] },
      { t: 'prose', html:
        '<p>Two marks you will see in print: the <b>dialytika</b> (¨) in <span class="gr">προϊόν</span> (product) or <span class="gr">Μάιος</span> (May), which tells you to pronounce the vowels separately, and the Greek <b>question mark</b>, which looks like a semicolon: <span class="gr">Τι κάνεις;</span></p>' },
      { t: 'phrases', title: 'Read a real address and sign', items: [
        ['Οδός Ερμού 15, Αθήνα', 'Ermou Street 15, Athens', 'οδός = street'],
        ['Τράπεζα', 'bank'], ['Φαρμακείο', 'pharmacy'], ['Ανοίξτε', 'open (sign)'],
        ['Κλειστό', 'closed'], ['Έξοδος', 'exit'], ['Είσοδος', 'entrance'],
        ['Καλημέρα σας', 'good morning (polite)'], ['Τι κάνετε;', 'how are you? (polite)'],
        ['Παρακαλώ, μιλάτε αγγλικά;', 'Excuse me, do you speak English?']
      ] },
      { t: 'quiz', title: 'Day 4 — check yourself', day: 4, items: [
        { type: 'choice', q: 'Where is the stress in {{g:άνθρωπος}}?', options: ['first syllable', 'second syllable', 'last syllable', 'none'], a: 0 },
        { type: 'choice', q: '{{g:ποτέ}} means…', options: ['when?', 'never', 'always', 'where?'], a: 1 },
        { type: 'choice', q: 'What does {{g:φαρμακείο}} mean?', options: ['bakery', 'bank', 'pharmacy', 'bookshop'], a: 2 },
        { type: 'choice', q: 'In Greek, the question mark looks like…', options: ['?', ';', '!', '·'], a: 1 },
        { q: 'Write “exit” in Greek.', a: 'έξοδος', accept: ['εξοδος'], say: 'έξοδος' },
        { q: 'Write “good morning” (polite form).', a: 'καλημέρα σας', accept: ['καλημερα σας'], say: 'καλημέρα σας' }
      ] }
    ],
    homework: [
      'Read every word in the “minimal pairs” table aloud, exaggerating the stressed syllable.',
      'Write your own address in Greek letters (street, number, city).',
      'Read the ten phrases twice and use one of them today.'
    ]
  },

  {
    day: 5, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '20 min',
    title: 'Welcome to Aegina: greetings', gr: 'Καλώς ήρθατε! · Χαιρετισμοί',
    goals: [
      'Greet someone at the right time of day',
      'Choose between the informal and the polite form of address',
      'Say hello, goodbye, please, thank you and sorry'
    ],
    sections: [
      { t: 'prose', html:
        '<p>You are on the ferry from Piraeus. The island of <b>Aegina</b> (<span class="gr">Αίγινα</span>) appears on the left, pistachio trees and a temple on the hill. Someone smiles at you and says <span class="gr">Καλημέρα!</span> — this is the moment your Greek starts working.</p>' },
      { t: 'art', name: 'map' },
      { t: 'phrases', title: 'Greetings by time of day', items: [
        ['Καλημέρα!', 'Good morning! (until about 12:00, often until 14:00)', 'the most common greeting of all'],
        ['Καλησπέρα!', 'Good evening! (from late afternoon)', 'used from roughly 17:00 onward'],
        ['Καληνύχτα!', 'Good night!', 'only when someone is going to bed'],
        ['Γεια σου!', 'Hi / bye (one person, informal)', 'the all-purpose friendly greeting'],
        ['Γεια σας!', 'Hello / goodbye (plural or polite)', 'safe with strangers'],
        ['Χαίρετε!', 'Hello / farewell (formal)', 'common in shops and offices'],
        ['Αντίο!', 'Goodbye!', 'borrowed from Italian'],
        ['Τα λέμε!', 'See you! (informal)', 'literally “we will say them”'],
        ['Καλώς ήρθατε!', 'Welcome!', 'to a group, or politely to one person'],
        ['Καλώς ορίσατε!', 'Welcome! (you have arrived)', 'what a host or hotel says']
      ] },
      { t: 'prose', html:
        '<p>Greek has two ways of saying “you”: <b>εσύ</b> for one person you know well — friends, family, children, colleagues your own age — and <b>εσείς</b> for more than one person <i>or</i> one person you address politely: strangers, older people, shopkeepers, officials. When in doubt, use <b>εσείς</b>. Nobody is ever offended by politeness.</p>' },
      { t: 'phrases', title: 'The five magic words', items: [
        ['Παρακαλώ', 'please · you are welcome · go ahead', 'one word, three jobs'],
        ['Ευχαριστώ', 'thank you'], ['Ευχαριστώ πολύ', 'thank you very much'],
        ['Συγγνώμη', 'sorry / excuse me (informal)'], ['Με συγχωρείτε', 'excuse me (polite)'],
        ['Ναι', 'yes'], ['Όχι', 'no'], ['Εντάξει', 'OK, all right'], ['Παρακαλώ;', 'Pardon? (I did not hear)']
      ] },
      { t: 'dialogue', title: 'At the port of Aegina', d: {
        id: 'd5', title: 'At the port of Aegina', gr: 'Στο λιμάνι της Αίγινας', level: 'A1',
        setting: 'You step off the ferry with a suitcase. A woman from your hotel is waiting.',
        lines: [
          { s: 'Μαρία', g: 'Καλημέρα σας!', e: 'Good morning!' },
          { s: 'Εσύ', g: 'Καλημέρα!', e: 'Good morning!' },
          { s: 'Μαρία', g: 'Καλώς ήρθατε στην Αίγινα. Είστε ο κύριος Τζόνσον;', e: 'Welcome to Aegina. Are you Mr Johnson?' },
          { s: 'Εσύ', g: 'Ναι, είμαι. Ευχαριστώ πολύ.', e: 'Yes, I am. Thank you very much.' },
          { s: 'Μαρία', g: 'Παρακαλώ. Πώς είστε;', e: 'You are welcome. How are you?' },
          { s: 'Εσύ', g: 'Καλά, ευχαριστώ. Και εσείς;', e: 'Fine, thank you. And you?' },
          { s: 'Μαρία', g: 'Πολύ καλά. Πάμε στο ξενοδοχείο;', e: 'Very well. Shall we go to the hotel?' },
          { s: 'Εσύ', g: 'Ναι, πάμε. Τα λέμε αργότερα!', e: 'Yes, let’s go. See you later!' }
        ]
      } },
      { t: 'tip', title: 'Titles matter.',
        html: 'Use <span class="gr">κύριε</span> (Mr), <span class="gr">κυρία</span> (Mrs/Ms) and <span class="gr">δεσποινίς</span> (Miss — increasingly replaced by κυρία). First names are used quickly in Greece, but let the Greek speaker offer first.' },
      { t: 'quiz', title: 'Day 5 — check yourself', day: 5, items: [
        { type: 'choice', q: 'It is 20:00. What do you say?', options: ['Καλημέρα', 'Καλησπέρα', 'Καληνύχτα', 'Καλώς όρισες'], a: 1 },
        { type: 'choice', q: 'You meet your friend’s grandmother. Which is safest?', options: ['Γεια σου!', 'Γεια σας!', 'Τα λέμε!', 'Έλα!'], a: 1 },
        { type: 'choice', q: '{{g:Ευχαριστώ πολύ}} means…', options: ['please', 'sorry', 'thank you very much', 'you are welcome'], a: 2 },
        { type: 'choice', q: 'Someone says {{g:Παρακαλώ;}} after you speak. They mean…', options: ['Please sit down', 'Pardon?', 'You are welcome', 'Goodbye'], a: 1 },
        { q: 'Write “good evening”.', a: 'καλησπέρα', accept: ['καλησπερα'], say: 'καλησπέρα' },
        { q: 'Write “thank you”.', a: 'ευχαριστώ', accept: ['ευχαριστω'], say: 'ευχαριστώ' },
        { q: 'Write “See you!” (informal).', a: 'τα λέμε', accept: ['τα λεμε'], say: 'Τα λέμε!' }
      ] }
    ],
    homework: [
      'Greet five people today in Greek — out loud, even to yourself in the mirror.',
      'Write the dialogue out by hand once; then act both parts aloud.',
      'Decide whether you would use εσύ or εσείς with: your neighbour, a police officer, your teacher, a child, a waiter.'
    ]
  }
  ]);
})();
