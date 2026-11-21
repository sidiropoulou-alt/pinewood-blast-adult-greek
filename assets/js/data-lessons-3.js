/* Greek for Beginners — lessons 13–22 */
(function () {
  var G = window.GREEK = window.GREEK || {};
  G.days = (G.days || []).concat([

  {
    day: 13, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '22 min',
    title: 'My day: time and routine', gr: 'Η μέρα μου · Ώρα και ρουτίνα',
    goals: [
      'Tell the time the Greek way',
      'Describe your daily routine with present-tense verbs',
      'Place frequency words correctly'
    ],
    sections: [
      { t: 'table', title: 'Telling the time', head: ['Greek', 'English'], rows: [
        ['Τι ώρα είναι;', 'What time is it?'],
        ['Είναι μία η ώρα.', 'It is one o’clock.'],
        ['Είναι τρεις η ώρα.', 'It is three o’clock.'],
        ['Είναι τρεις και δέκα.', 'It is ten past three.'],
        ['Είναι τέσσερις παρά τέταρτο.', 'It is a quarter to four.'],
        ['Είναι τρεις και μισή.', 'It is half past three.'],
        ['Στις οκτώ το βράδυ.', 'At eight in the evening.']
      ] },
      { t: 'note', title: 'Two words for “at”.',
        html: 'For a clock time use <span class="gr">στις</span>: <span class="gr">στις τρεις</span> — at three. For “in the morning / afternoon / evening / at night” use ' +
        '<span class="gr">το πρωί, το μεσημέρι, το απόγευμα, το βράδυ</span>. Together: <span class="gr">στις τρεις το μεσημέρι</span>.' },
      { t: 'conj', title: 'Everyday verbs', note: 'All of these follow the -ω pattern you learned on Day 10.', rows: [
        ['εγώ', 'ξυπνάω', 'I wake up'],
        ['εγώ', 'πηγαίνω', 'I go'],
        ['εγώ', 'τρώω', 'I eat'],
        ['εγώ', 'πίνω', 'I drink'],
        ['εγώ', 'δουλεύω', 'I work'],
        ['εγώ', 'γυρίζω', 'I return, come back'],
        ['εγώ', 'κοιμάμαι', 'I sleep'],
        ['εγώ', 'διαβάζω', 'I study, read']
      ] },
      { t: 'table', title: 'One verb, six forms: πηγαίνω (to go)', head: ['Person', 'Form', 'Meaning'], rows: [
        ['εγώ', 'πηγαίνω', 'I go'], ['εσύ', 'πηγαίνεις', 'you go'], ['αυτός / αυτή', 'πηγαίνει', 'he / she goes'],
        ['εμείς', 'πηγαίνουμε', 'we go'], ['εσείς', 'πηγαίνετε', 'you go'], ['αυτοί', 'πηγαίνουν', 'they go']
      ] },
      { t: 'table', title: 'How often?', head: ['Greek', 'English', 'Position'], rows: [
        ['πάντα', 'always', 'before the verb'],
        ['συνήθως', 'usually', 'before the verb'],
        ['συχνά', 'often', 'before the verb'],
        ['μερικές φορές', 'sometimes', 'at the start or end'],
        ['σπάνια', 'rarely', 'before the verb'],
        ['ποτέ', 'never', 'with δεν: δεν πίνω ποτέ'],
        ['κάθε μέρα', 'every day', 'start or end']
      ] },
      { t: 'prose', html:
        '<p>Put it together: <span class="gr">Ξυπνάω στις επτά. Πίνω καφέ και τρώω πρωινό. Πηγαίνω στη δουλειά με το λεωφορείο. Γυρίζω στις έξι το απόγευμα. Το βράδυ διαβάζω ελληνικά και κοιμάμαι στις έντεκα.</span></p>' +
        '<p class="small muted">Read it aloud twice. Then change every sentence to describe your own day.</p>' },
      { t: 'dialogue', title: 'A morning at the bakery', d: {
        id: 'd13', title: 'A morning at the bakery', gr: 'Το πρωί στον φούρνο', level: 'A1',
        setting: 'Seven thirty in the morning, a small bakery in Aegina.',
        lines: [
          { s: 'Πωλήτρια', g: 'Καλημέρα σας!', e: 'Good morning!' },
          { s: 'Σάρα', g: 'Καλημέρα. Ένα ψωμί, παρακαλώ.', e: 'Good morning. One loaf of bread, please.' },
          { s: 'Πωλήτρια', g: 'Μόνο ένα ψωμί;', e: 'Only one loaf?' },
          { s: 'Σάρα', g: 'Ναι, και δύο κουλούρια.', e: 'Yes, and two sesame rolls.' },
          { s: 'Πωλήτρια', g: 'Ορίστε. Δύο ευρώ και πενήντα.', e: 'Here you are. Two euros fifty.' },
          { s: 'Σάρα', g: 'Τι ώρα ανοίγετε;', e: 'What time do you open?' },
          { s: 'Πωλήτρια', g: 'Ανοίγουμε στις έξι το πρωί, κάθε μέρα.', e: 'We open at six in the morning, every day.' },
          { s: 'Σάρα', g: 'Τέλεια. Ευχαριστώ πολύ!', e: 'Perfect. Thank you very much!' }
        ]
      } },
      { t: 'quiz', title: 'Day 13 — check yourself', day: 13, items: [
        { type: 'choice', q: '{{g:Είναι τρεις και μισή.}}', options: ['2:30', '3:30', '3:15', '4:30'], a: 1 },
        { type: 'choice', q: '“I wake up at seven.”', options: ['Ξυπνάω στις επτά.', 'Ξυπνάω σε επτά.', 'Ξυπνάω την επτά.', 'Ξυπνάω επτά η ώρα στις.'], a: 0 },
        { type: 'choice', q: 'Where does {{g:πάντα}} go?', options: ['after the verb', 'before the verb', 'at the very end only', 'nowhere'], a: 1 },
        { type: 'choice', q: '“We eat.”', options: ['τρώω', 'τρως', 'τρώμε', 'τρώνε'], a: 2 },
        { q: 'Write “It is eight o’clock.”', a: 'είναι οκτώ η ώρα', accept: ['ειναι οκτω η ωρα', 'είναι οχτώ η ώρα'], say: 'Είναι οκτώ η ώρα.' },
        { q: 'Write “I drink coffee every day.”', a: 'πίνω καφέ κάθε μέρα', accept: ['πινω καφε καθε μερα'], say: 'Πίνω καφέ κάθε μέρα.' }
      ] }
    ],
    homework: [
      'Write your own day from waking up to going to bed — eight sentences.',
      'Say the times of your three meals aloud in Greek.',
      'Listen to the bakery dialogue twice and repeat each line.'
    ]
  },

  {
    day: 14, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '22 min',
    title: 'At the café and the taverna', gr: 'Στο καφέ και στην ταβέρνα',
    goals: [
      'Order food and drink the way Greeks do',
      'Use the accusative after θέλω and τρώω',
      'Ask for the bill and say you enjoyed it'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Ordering is the best first conversation you can have in Greece. The pattern is short: <span class="gr">Θέλω + object, παρακαλώ</span> or <span class="gr">Θα ήθελα</span> — I would like. ' +
        'Waiters will say <span class="gr">Ορίστε;</span> when they come to take your order and <span class="gr">Ορίστε!</span> when they bring it.</p>' },
      { t: 'note', title: 'The object changes its ending.',
        html: 'When a noun is the object of a verb it usually takes the <b>accusative</b>: masculine <span class="gr">ο καφές → τον καφέ</span>, feminine <span class="gr">η μπίρα → την μπίρα</span> (often written <span class="gr">την μπίρα</span> or <span class="gr">τη μπίρα</span>), neuter <span class="gr">το νερό → το νερό</span> (unchanged). ' +
        'So: <span class="gr">Θέλω έναν καφέ</span>, <span class="gr">Θέλω μια μπίρα</span>, <span class="gr">Θέλω νερό</span>.' },
      { t: 'numbers', title: 'Food and drink to order', items: [
        ['ψωμί', 'bread'], ['νερό', 'water'], ['καφές', 'coffee'], ['τσάι', 'tea'],
        ['μπίρα', 'beer'], ['κρασί', 'wine'], ['γάλα', 'milk'], ['χυμός', 'juice'],
        ['σαλάτα', 'salad'], ['ψάρι', 'fish'], ['κρέας', 'meat'], ['κοτόπουλο', 'chicken'],
        ['τυρί', 'cheese'], ['ελιές', 'olives'], ['πατάτες', 'potatoes'], ['γλυκό', 'dessert']
      ] },
      { t: 'table', title: 'Menu words that appear everywhere', head: ['Greek', 'English', 'Note'], rows: [
        ['μεζές / μεζέδες', 'small plates', 'the Greek way to eat: many small dishes'],
        ['ορεκτικά', 'starters', ''],
        ['κυρίως πιάτο', 'main course', ''],
        ['σήμερα', 'today', '“Το πιάτο της ημέρας” = dish of the day'],
        ['χωρίς κρέας', 'without meat', 'useful for vegetarians'],
        ['νόστιμο', 'tasty', ''],
        ['φρέσκο', 'fresh', ''],
        ['λογαριασμός', 'the bill', '']
      ] },
      { t: 'phrases', title: 'Ordering, step by step', items: [
        ['Μια θέση για δύο, παρακαλώ.', 'A table for two, please.'],
        ['Τι έχετε σήμερα;', 'What do you have today?'],
        ['Θα ήθελα μια σαλάτα και ψάρι.', 'I would like a salad and fish.', 'θα ήθελα is the polite “I would like”'],
        ['Χωρίς κρέας, παρακαλώ.', 'Without meat, please.'],
        ['Ένα νερό, παρακαλώ.', 'A water, please.'],
        ['Τον λογαριασμό, παρακαλώ.', 'The bill, please.'],
        ['Ήταν πολύ νόστιμο!', 'It was delicious!'],
        ['Μπορώ να πληρώσω με κάρτα;', 'Can I pay by card?']
      ] },
      { t: 'dialogue', title: 'Lunch by the harbour', d: {
        id: 'd14', title: 'Lunch by the harbour', gr: 'Μεσημεριανό στο λιμάνι', level: 'A1',
        setting: 'A taverna table under a vine, twenty metres from the water.',
        lines: [
          { s: 'Σερβιτόρος', g: 'Καλημέρα σας! Τι θα πάρετε;', e: 'Good morning! What will you have?' },
          { s: 'Σάρα', g: 'Θα ήθελα μια σαλάτα και ψάρι, παρακαλώ.', e: 'I would like a salad and fish, please.' },
          { s: 'Σερβιτόρος', g: 'Και να πιείτε;', e: 'And to drink?' },
          { s: 'Σάρα', g: 'Ένα νερό και ένα ποτήρι κρασί.', e: 'A water and a glass of wine.' },
          { s: 'Σερβιτόρος', g: 'Είστε Αγγλίδα;', e: 'Are you English?' },
          { s: 'Σάρα', g: 'Ναι, αλλά μένω εδώ τώρα. Μαθαίνω ελληνικά.', e: 'Yes, but I live here now. I am learning Greek.' },
          { s: 'Σερβιτόρος', g: 'Μπράβο! Μιλάτε πολύ καλά.', e: 'Well done! You speak very well.' },
          { s: 'Σάρα', g: 'Ευχαριστώ. Τον λογαριασμό, παρακαλώ.', e: 'Thank you. The bill, please.' }
        ]
      } },
      { t: 'quiz', title: 'Day 14 — check yourself', day: 14, items: [
        { type: 'choice', q: '“I would like a coffee.”', options: ['Θέλω έναν καφέ.', 'Θέλω ο καφές.', 'Θέλω η καφές.', 'Θέλω ένα καφές.'], a: 0 },
        { type: 'choice', q: '{{g:Τον λογαριασμό, παρακαλώ.}} means…', options: ['The menu, please.', 'The bill, please.', 'The water, please.', 'A table, please.'], a: 1 },
        { type: 'choice', q: 'Which is “olives”?', options: ['ελιές', 'πατάτες', 'τυρί', 'ψωμί'], a: 0 },
        { type: 'choice', q: 'You are vegetarian. What do you say?', options: ['Με κρέας, παρακαλώ.', 'Χωρίς κρέας, παρακαλώ.', 'Πολύ κρέας, παρακαλώ.', 'Το κρέας είναι νόστιμο.'], a: 1 },
        { q: 'Write “The bill, please.”', a: 'τον λογαριασμό παρακαλώ', accept: ['τον λογαριασμο παρακαλω', 'το λογαριασμό παρακαλώ'], say: 'Τον λογαριασμό, παρακαλώ.' },
        { q: 'Write “water” in Greek.', a: 'νερό', accept: ['νερο'], say: 'νερό' }
      ] }
    ],
    homework: [
      'Copy the menu words into a list and add five dishes you like.',
      'Order a full meal aloud: table, dish, drink, bill.',
      'Learn “Θα ήθελα…” and use it in three sentences.'
    ]
  },

  {
    day: 15, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '20 min',
    title: 'Where I live: prepositions', gr: 'Πού μένω · Προθέσεις',
    goals: [
      'Describe your home and neighbourhood',
      'Use σε, από, με and δίπλα σε correctly',
      'Say where things are'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Three prepositions do most of the work: <b>σε</b> (in, at, to), <b>από</b> (from) and <b>με</b> (with). ' +
        'σε merges with the article: <span class="gr">σε + τον → στον</span>, <span class="gr">σε + την → στην</span>, <span class="gr">σε + το → στο</span>. ' +
        'So “in Athens” is <span class="gr">στην Αθήνα</span>, and “at home” is <span class="gr">στο σπίτι</span>.</p>' },
      { t: 'table', title: 'The place words you need', head: ['Greek', 'English'], rows: [
        ['το σπίτι', 'the house'], ['το διαμέρισμα', 'the flat, apartment'], ['η γειτονιά', 'the neighbourhood'],
        ['ο δρόμος', 'the street, road'], ['η πλατεία', 'the square'], ['το μαγαζί', 'the shop'],
        ['το φαρμακείο', 'the pharmacy'], ['το σούπερ μάρκετ', 'the supermarket'],
        ['η παραλία', 'the beach'], ['το λιμάνι', 'the port'], ['η εκκλησία', 'the church']
      ] },
      { t: 'table', title: 'Where exactly?', head: ['Greek', 'English', 'Example'], rows: [
        ['δίπλα σε', 'next to', 'δίπλα στο φαρμακείο'],
        ['απέναντι από', 'opposite', 'απέναντι από την εκκλησία'],
        ['κοντά σε', 'near', 'κοντά στην παραλία'],
        ['μακριά από', 'far from', 'μακριά από το κέντρο'],
        ['πάνω σε', 'on', 'πάνω στο τραπέζι'],
        ['κάτω από', 'under', 'κάτω από το κρεβάτι'],
        ['μπροστά από', 'in front of', 'μπροστά από το σπίτι'],
        ['πίσω από', 'behind', 'πίσω από το μαγαζί']
      ] },
      { t: 'phrases', title: 'Talking about home', items: [
        ['Μένω σε ένα μικρό διαμέρισμα.', 'I live in a small flat.'],
        ['Το σπίτι μου είναι κοντά στη θάλασσα.', 'My house is near the sea.'],
        ['Μένω στο κέντρο της Αίγινας.', 'I live in the centre of Aegina.'],
        ['Το φαρμακείο είναι δίπλα στο σούπερ μάρκετ.', 'The pharmacy is next to the supermarket.'],
        ['Πού είναι η παραλία;', 'Where is the beach?'],
        ['Είναι δέκα λεπτά με τα πόδια.', 'It is ten minutes on foot.'],
        ['Έχω ένα μπαλκόνι με θέα.', 'I have a balcony with a view.']
      ] },
      { t: 'note', title: 'Ten minutes from what?',
        html: '<span class="gr">με τα πόδια</span> — on foot; <span class="gr">με το λεωφορείο</span> — by bus; <span class="gr">με το ποδήλατο</span> — by bicycle. ' +
        'The same <b>με</b> means “with”: <span class="gr">μένω με τη γυναίκα μου</span> — I live with my wife.' },
      { t: 'quiz', title: 'Day 15 — check yourself', day: 15, items: [
        { type: 'choice', q: '{{g:Μένω ___ Αθήνα.}}', options: ['στην', 'στον', 'στο', 'σε'], a: 0 },
        { type: 'choice', q: '{{g:Το φαρμακείο είναι ___ την εκκλησία.}} (opposite)', options: ['δίπλα σε', 'απέναντι από', 'πάνω σε', 'με'], a: 1 },
        { type: 'choice', q: '“I live with my family.”', options: ['Μένω από την οικογένειά μου.', 'Μένω με την οικογένειά μου.', 'Μένω στην οικογένειά μου.', 'Μένω για την οικογένειά μου.'], a: 1 },
        { type: 'choice', q: '{{g:με τα πόδια}} means…', options: ['by bus', 'on foot', 'by car', 'with friends'], a: 1 },
        { q: 'Write “at home”.', a: 'στο σπίτι', accept: ['στο σπιτι'], say: 'Στο σπίτι.' },
        { q: 'Write “near the beach”.', a: 'κοντά στην παραλία', accept: ['κοντα στην παραλια'], say: 'Κοντά στην παραλία.' }
      ] }
    ],
    homework: [
      'Describe your home in five sentences: size, street, what is next to it.',
      'Draw a simple map of your street and label five places in Greek.',
      'Say how you travel to work and how long it takes.'
    ]
  },

  {
    day: 16, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '20 min',
    title: 'Shopping and prices', gr: 'Ψώνια και τιμές',
    goals: [
      'Count to one hundred',
      'Ask “how much does it cost?” and understand the answer',
      'Use the plural of common nouns'
    ],
    sections: [
      { t: 'numbers', title: 'Eleven to twenty', items: [
        ['έντεκα', 'eleven'], ['δώδεκα', 'twelve'], ['δεκατρία', 'thirteen'], ['δεκατέσσερα', 'fourteen'],
        ['δεκαπέντε', 'fifteen'], ['δεκαέξι', 'sixteen'], ['δεκαεπτά', 'seventeen'], ['δεκαοκτώ', 'eighteen'],
        ['δεκαεννέα', 'nineteen'], ['είκοσι', 'twenty']
      ] },
      { t: 'table', title: 'The tens', head: ['Greek', 'Number'], rows: [
        ['τριάντα', '30'], ['σαράντα', '40'], ['πενήντα', '50'], ['εξήντα', '60'],
        ['εβδομήντα', '70'], ['ογδόντα', '80'], ['ενενήντα', '90'], ['εκατό', '100']
      ] },
      { t: 'note', title: 'Building any number.',
        html: 'Just say the tens, then <b>και</b>, then the unit: <span class="gr">είκοσι και πέντε</span> = 25, <span class="gr">τριάντα και τρία</span> = 33. ' +
        'In prices you will hear <span class="gr">πενήντα λεπτά</span> (50 cents) and <span class="gr">ένα ευρώ</span>. The euro is <span class="gr">το ευρώ</span>, plural <span class="gr">τα ευρώ</span>.' },
      { t: 'phrases', title: 'In a shop', items: [
        ['Πόσο κάνει;', 'How much does it cost?', 'the everyday way to ask a price'],
        ['Πόσο κοστίζει;', 'How much does it cost?', 'more formal'],
        ['Κάνει τρία ευρώ.', 'It costs three euros.'],
        ['Είναι πολύ ακριβό.', 'It is too expensive.'],
        ['Έχετε κάτι πιο φθηνό;', 'Do you have something cheaper?'],
        ['Μπορώ να το δοκιμάσω;', 'Can I try it on?'],
        ['Το παίρνω.', 'I’ll take it.'],
        ['Με κάρτα ή με μετρητά;', 'By card or in cash?']
      ] },
      { t: 'table', title: 'Plural endings you will meet', head: ['Singular', 'Plural', 'Meaning'], rows: [
        ['ο καφές', 'οι καφέδες', 'the coffees'],
        ['η ελιά', 'οι ελιές', 'the olives'],
        ['το ψωμί', 'τα ψωμιά', 'the loaves'],
        ['ο δρόμος', 'οι δρόμοι', 'the streets'],
        ['η τιμή', 'οι τιμές', 'the prices'],
        ['το μαγαζί', 'τα μαγαζιά', 'the shops']
      ] },
      { t: 'prose', html:
        '<p>Feminine nouns in <b>-η</b> usually become <b>-ες</b>; neuter nouns in <b>-ί</b> become <b>-ιά</b>; masculine in <b>-ος</b> become <b>-οι</b>. ' +
        'You do not need to memorise this today — notice it, and use the singular when you are unsure. Greeks will understand you.</p>' },
      { t: 'dialogue', title: 'At the market', d: {
        id: 'd16', title: 'At the market', gr: 'Στην αγορά', level: 'A1',
        setting: 'Saturday morning, a stall of tomatoes and olives.',
        lines: [
          { s: 'Μάρκος', g: 'Καλημέρα! Τι θέλετε σήμερα;', e: 'Good morning! What would you like today?' },
          { s: 'Σάρα', g: 'Πόσο κάνουν οι ντομάτες;', e: 'How much are the tomatoes?' },
          { s: 'Μάρκος', g: 'Δύο ευρώ το κιλό.', e: 'Two euros a kilo.' },
          { s: 'Σάρα', g: 'Θα πάρω ένα κιλό. Και ελιές;', e: 'I’ll take a kilo. And olives?' },
          { s: 'Μάρκος', g: 'Έξι ευρώ το κιλό. Είναι πολύ καλές.', e: 'Six euros a kilo. They are very good.' },
          { s: 'Σάρα', g: 'Εντάξει, μισό κιλό. Πόσο κάνουν όλα;', e: 'All right, half a kilo. How much is everything?' },
          { s: 'Μάρκος', g: 'Πέντε ευρώ.', e: 'Five euros.' },
          { s: 'Σάρα', g: 'Ορίστε. Ευχαριστώ!', e: 'Here you are. Thank you!' }
        ]
      } },
      { t: 'quiz', title: 'Day 16 — check yourself', day: 16, items: [
        { type: 'choice', q: '{{g:σαράντα και πέντε}} =', options: ['35', '45', '55', '40.5'], a: 1 },
        { type: 'choice', q: '“How much does it cost?”', options: ['Πόσο κάνει;', 'Πού είναι;', 'Τι κάνεις;', 'Πότε είναι;'], a: 0 },
        { type: 'choice', q: 'Plural of {{g:η ελιά}}?', options: ['οι ελιά', 'οι ελιές', 'τα ελιά', 'τους ελιές'], a: 1 },
        { type: 'choice', q: '{{g:Είναι πολύ ακριβό.}} means…', options: ['It is very cheap.', 'It is very expensive.', 'It is very good.', 'It is very small.'], a: 1 },
        { q: 'Write the number 30 in Greek.', a: 'τριάντα', accept: ['τριαντα'], say: 'τριάντα' },
        { q: 'Write “I’ll take it.”', a: 'το παίρνω', accept: ['το παιρνω'], say: 'Το παίρνω.' }
      ] }
    ],
    homework: [
      'Count aloud from 20 to 100 in tens, three times.',
      'Write the price of five things you bought this week in Greek words.',
      'Practise the market dialogue, playing both roles.'
    ]
  },

  {
    day: 17, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '20 min',
    title: 'Getting around: transport and directions', gr: 'Μετακινήσεις και κατευθύνσεις',
    goals: [
      'Buy a ticket and ask about times',
      'Understand simple directions',
      'Use the polite imperative forms'
    ],
    sections: [
      { t: 'table', title: 'Transport words', head: ['Greek', 'English'], rows: [
        ['το λεωφορείο', 'the bus'], ['το πλοίο', 'the ship, ferry'], ['το ταξί', 'the taxi'],
        ['το τρένο', 'the train'], ['το αεροπλάνο', 'the plane'], ['το ποδήλατο', 'the bicycle'],
        ['το εισιτήριο', 'the ticket'], ['η στάση', 'the stop'], ['το δρομολόγιο', 'the timetable, route']
      ] },
      { t: 'phrases', title: 'At the ticket office', items: [
        ['Ένα εισιτήριο για την Αθήνα, παρακαλώ.', 'One ticket to Athens, please.'],
        ['Πόσο κάνει το εισιτήριο;', 'How much is the ticket?'],
        ['Τι ώρα φεύγει το πλοίο;', 'What time does the ferry leave?'],
        ['Πότε φτάνουμε;', 'When do we arrive?'],
        ['Από ποια στάση;', 'From which stop?'],
        ['Πηγαίνει στο λιμάνι;', 'Does it go to the port?'],
        ['Πού είναι η στάση του λεωφορείου;', 'Where is the bus stop?']
      ] },
      { t: 'table', title: 'Directions you will hear', head: ['Greek', 'English'], rows: [
        ['πάντα ευθεία', 'straight ahead'], ['στρίψτε δεξιά', 'turn right'], ['στρίψτε αριστερά', 'turn left'],
        ['είναι κοντά', 'it is near'], ['είναι μακριά', 'it is far'], ['πρώτος δρόμος', 'first street'],
        ['στη γωνία', 'at the corner'], ['μετά τη γέφυρα', 'after the bridge'], ['πάνω στον λόφο', 'up the hill']
      ] },
      { t: 'note', title: 'Two ways to tell someone what to do.',
        html: '<span class="gr">Στρίψε δεξιά</span> is for one person you know (informal); <span class="gr">Στρίψτε δεξιά</span> is plural or polite. ' +
        'Most signs and strangers will use the polite form. When you ask, use <span class="gr">Μπορείτε να μου πείτε…;</span> — could you tell me…?' },
      { t: 'prose', html:
        '<p><b>One word to notice:</b> <span class="gr">πηγαίνω</span> means “go”, but Greeks also say <span class="gr">πάω</span> in everyday speech. ' +
        'Both are correct: <span class="gr">Πάω στην Αθήνα αύριο.</span></p>' },
      { t: 'dialogue', title: 'Asking the way', d: {
        id: 'd17', title: 'Asking the way', gr: 'Ρωτάω τον δρόμο', level: 'A1',
        setting: 'Near the port of Aegina, holding a map.',
        lines: [
          { s: 'Σάρα', g: 'Συγγνώμη, πού είναι το φαρμακείο;', e: 'Excuse me, where is the pharmacy?' },
          { s: 'Νίκος', g: 'Πάτε ευθεία και στρίψτε δεξιά στη γωνία.', e: 'Go straight and turn right at the corner.' },
          { s: 'Σάρα', g: 'Είναι μακριά;', e: 'Is it far?' },
          { s: 'Νίκος', g: 'Όχι, πέντε λεπτά με τα πόδια.', e: 'No, five minutes on foot.' },
          { s: 'Σάρα', g: 'Είναι ανοιχτό τώρα;', e: 'Is it open now?' },
          { s: 'Νίκος', g: 'Ναι, ανοίγει στις οκτώ.', e: 'Yes, it opens at eight.' },
          { s: 'Σάρα', g: 'Ευχαριστώ πολύ!', e: 'Thank you very much!' },
          { s: 'Νίκος', g: 'Παρακαλώ, καλή μέρα!', e: 'You’re welcome, have a good day!' }
        ]
      } },
      { t: 'quiz', title: 'Day 17 — check yourself', day: 17, items: [
        { type: 'choice', q: '{{g:στρίψτε αριστερά}} means…', options: ['turn right', 'turn left', 'go straight', 'stop here'], a: 1 },
        { type: 'choice', q: '“What time does the ferry leave?”', options: ['Τι ώρα φεύγει το πλοίο;', 'Πού είναι το πλοίο;', 'Πόσο κάνει το πλοίο;', 'Πότε έρχεται το πλοίο;'], a: 0 },
        { type: 'choice', q: '{{g:το εισιτήριο}} is…', options: ['the timetable', 'the ticket', 'the stop', 'the ship'], a: 1 },
        { type: 'choice', q: 'Polite “turn right” for a stranger:', options: ['Στρίψε δεξιά.', 'Στρίψτε δεξιά.', 'Στρίβω δεξιά.', 'Δεξιά στρίψαμε.'], a: 1 },
        { q: 'Write “Where is the bus stop?”', a: 'πού είναι η στάση του λεωφορείου', accept: ['που ειναι η σταση του λεωφορειου', 'πού είναι η στάση'], say: 'Πού είναι η στάση του λεωφορείου;' },
        { q: 'Write “It is near.”', a: 'είναι κοντά', accept: ['ειναι κοντα'], say: 'Είναι κοντά.' }
      ] }
    ],
    homework: [
      'Plan a journey in Greek: “I go to … by …”.',
      'Learn the directions table by heart; test yourself in the street.',
      'Record yourself asking for directions and listen back.'
    ]
  },

  {
    day: 18, week: 3, weekTheme: 'Everyday Greek', level: 'A1', minutes: '20 min',
    title: 'Work and what I do', gr: 'Η δουλειά μου',
    goals: [
      'Say what your job is',
      'Use μπορώ and ξέρω with a following verb',
      'Talk about your working day'
    ],
    sections: [
      { t: 'prose', html:
        '<p>To say your job, Greek does not use an article: <span class="gr">Είμαι δασκάλα.</span> — I am a teacher. ' +
        'To say where you work: <span class="gr">Δουλεύω σε ένα γραφείο.</span> — I work in an office.</p>' },
      { t: 'table', title: 'Jobs', head: ['Greek (m / f)', 'English'], rows: [
        ['ο δάσκαλος / η δασκάλα', 'teacher'], ['ο γιατρός / η γιατρός', 'doctor'],
        ['ο μηχανικός / η μηχανικός', 'engineer'], ['ο δικηγόρος / η δικηγόρος', 'lawyer'],
        ['ο σερβιτόρος / η σερβιτόρα', 'waiter / waitress'], ['ο οδηγός / η οδηγός', 'driver'],
        ['ο πωλητής / η πωλήτρια', 'shop assistant'], ['ο αγρότης / η αγρότισσα', 'farmer'],
        ['ο συνταξιούχος / η συνταξιούχος', 'retired person'], ['ο φοιτητής / η φοιτήτρια', 'student']
      ] },
      { t: 'note', title: 'Male or female forms.',
        html: 'Some jobs change ending for a woman (<span class="gr">δάσκαλος → δασκάλα</span>), some stay the same (<span class="gr">γιατρός</span>), ' +
        'and a few have a different word altogether. When unsure, use the masculine form with <span class="gr">η</span>: <span class="gr">η γιατρός</span> is correct.' },
      { t: 'conj', title: 'μπορώ — I can', note: 'Followed by να + verb: μπορώ να δουλέψω = I can work.', rows: [
        ['εγώ', 'μπορώ', 'I can'], ['εσύ', 'μπορείς', 'you can'], ['αυτός / αυτή', 'μπορεί', 'he / she can'],
        ['εμείς', 'μπορούμε', 'we can'], ['εσείς', 'μπορείτε', 'you can'], ['αυτοί', 'μπορούν', 'they can']
      ] },
      { t: 'phrases', title: 'Talking about work', items: [
        ['Τι δουλειά κάνεις;', 'What do you do?', 'informal'],
        ['Τι δουλειά κάνετε;', 'What do you do?', 'polite'],
        ['Είμαι δασκάλα.', 'I am a teacher.'],
        ['Δουλεύω σε ένα γραφείο.', 'I work in an office.'],
        ['Δουλεύω από το σπίτι.', 'I work from home.'],
        ['Ξέρω λίγα ελληνικά.', 'I know a little Greek.'],
        ['Μιλάω αγγλικά και λίγα ελληνικά.', 'I speak English and a little Greek.'],
        ['Μπορώ να δουλέψω αύριο.', 'I can work tomorrow.']
      ] },
      { t: 'table', title: 'Word partners', head: ['Greek', 'English'], rows: [
        ['δουλεύω πολύ', 'I work a lot'], ['δουλεύω λίγο', 'I work a little'],
        ['έχω δουλειά', 'I have work'], ['δεν έχω δουλειά', 'I don’t have work'],
        ['ψάχνω δουλειά', 'I’m looking for work'], ['είμαι στο γραφείο', 'I am at the office']
      ] },
      { t: 'quiz', title: 'Day 18 — check yourself', day: 18, items: [
        { type: 'choice', q: '“I am a doctor.” (a woman speaking)', options: ['Είμαι γιατρός.', 'Είμαι μια γιατρός.', 'Είμαι η γιατρός μου.', 'Είμαι σε γιατρό.'], a: 0 },
        { type: 'choice', q: '{{g:Μπορούμε να δουλέψουμε.}} means…', options: ['We can work.', 'We want to work.', 'We work now.', 'They can work.'], a: 0 },
        { type: 'choice', q: '“What do you do?” (polite)', options: ['Τι δουλειά κάνεις;', 'Τι δουλειά κάνετε;', 'Πού δουλεύεις;', 'Τι κάνουμε;'], a: 1 },
        { type: 'choice', q: '{{g:Ξέρω}} means…', options: ['I can', 'I know', 'I want', 'I see'], a: 1 },
        { q: 'Write “I work from home.”', a: 'δουλεύω από το σπίτι', accept: ['δουλευω απο το σπιτι'], say: 'Δουλεύω από το σπίτι.' },
        { q: 'Write “I speak a little Greek.”', a: 'μιλάω λίγα ελληνικά', accept: ['μιλαω λιγα ελληνικα', 'μιλάω λίγο ελληνικά'], say: 'Μιλάω λίγα ελληνικά.' }
      ] }
    ],
    homework: [
      'Write five sentences about your job: what, where, when, with whom, how long.',
      'Practise “Μπορώ να…” with five different verbs.',
      'Ask three people in your head “Τι δουλειά κάνεις;” and answer for them.'
    ]
  },

  {
    day: 19, week: 4, weekTheme: 'People and plans', level: 'A1', minutes: '20 min',
    title: 'Family and the people around me', gr: 'Η οικογένεια και οι άνθρωποι',
    goals: [
      'Name the members of a family',
      'Use μου, σου, του to say “my, your, his”',
      'Describe someone with έχω and είναι'
    ],
    sections: [
      { t: 'numbers', title: 'Family words', items: [
        ['η οικογένεια', 'the family'], ['ο πατέρας', 'the father'], ['η μητέρα', 'the mother'],
        ['ο γιος', 'the son'], ['η κόρη', 'the daughter'], ['ο αδελφός', 'the brother'],
        ['η αδελφή', 'the sister'], ['ο παππούς', 'the grandfather'], ['η γιαγιά', 'the grandmother'],
        ['ο σύζυγος', 'the husband'], ['η σύζυγος', 'the wife'], ['το παιδί', 'the child'],
        ['ο φίλος / η φίλη', 'the friend'], ['ο γείτονας', 'the neighbour']
      ] },
      { t: 'note', title: '“My” is a little word after the noun.',
        html: 'Greek says <span class="gr">ο πατέρας μου</span> — literally “the father of mine”. The possessives are <span class="gr">μου</span> (my), ' +
        '<span class="gr">σου</span> (your), <span class="gr">του / της</span> (his / her), <span class="gr">μας</span> (our), <span class="gr">σας</span> (your, plural), ' +
        '<span class="gr">τους</span> (their). The article stays.' },
      { t: 'table', title: 'Possessives in action', head: ['Greek', 'English'], rows: [
        ['ο πατέρας μου', 'my father'], ['η μητέρα σου', 'your mother'],
        ['ο αδελφός του', 'his brother'], ['η αδελφή της', 'her sister'],
        ['το σπίτι μας', 'our house'], ['τα παιδιά σας', 'your children'],
        ['οι φίλοι τους', 'their friends']
      ] },
      { t: 'prose', html:
        '<p><b>Watch the family trap:</b> <span class="gr">αδελφός</span> means brother, but <span class="gr">αδελφή</span> means sister — and for many Greeks ' +
        '<span class="gr">ξαδέλφη</span> is a female cousin. Say <span class="gr">ο ξάδελφός μου</span> / <span class="gr">η ξαδέλφη μου</span> for cousins.</p>' },
      { t: 'phrases', title: 'Describing people', items: [
        ['Έχω δύο παιδιά.', 'I have two children.'],
        ['Είμαι παντρεμένος / παντρεμένη.', 'I am married.', 'masculine / feminine'],
        ['Είμαι χωρισμένος / χωρισμένη.', 'I am divorced.'],
        ['Ζω μόνος / μόνη μου.', 'I live alone.'],
        ['Η γυναίκα μου είναι δασκάλα.', 'My wife is a teacher.'],
        ['Ο γιος μου είναι δέκα χρονών.', 'My son is ten years old.'],
        ['Έχουμε έναν σκύλο και μια γάτα.', 'We have a dog and a cat.']
      ] },
      { t: 'dialogue', title: 'Talking about family', d: {
        id: 'd19', title: 'Talking about family', gr: 'Μιλάμε για την οικογένεια', level: 'A1',
        setting: 'Two neighbours in the street, after church on Sunday.',
        lines: [
          { s: 'Ελένη', g: 'Καλημέρα, Σάρα! Τι κάνεις;', e: 'Good morning, Sarah! How are you?' },
          { s: 'Σάρα', g: 'Καλά, ευχαριστώ. Εσύ;', e: 'Well, thanks. And you?' },
          { s: 'Ελένη', g: 'Καλά. Είναι αυτά τα παιδιά σου;', e: 'Fine. Are these your children?' },
          { s: 'Σάρα', g: 'Ναι, ο γιος μου και η κόρη μου.', e: 'Yes, my son and my daughter.' },
          { s: 'Ελένη', g: 'Πόσο χρονών είναι;', e: 'How old are they?' },
          { s: 'Σάρα', g: 'Ο γιος μου είναι δέκα και η κόρη μου επτά.', e: 'My son is ten and my daughter is seven.' },
          { s: 'Ελένη', g: 'Μιλάνε ελληνικά;', e: 'Do they speak Greek?' },
          { s: 'Σάρα', g: 'Λίγο, αλλά μαθαίνουν γρήγορα!', e: 'A little, but they are learning fast!' }
        ]
      } },
      { t: 'quiz', title: 'Day 19 — check yourself', day: 19, items: [
        { type: 'choice', q: '“my mother”', options: ['μητέρα μου', 'η μητέρα μου', 'μου μητέρα', 'η μου μητέρα'], a: 1 },
        { type: 'choice', q: '{{g:τα παιδιά τους}} means…', options: ['our children', 'your children', 'their children', 'my children'], a: 2 },
        { type: 'choice', q: '“My sister”', options: ['η αδελφή μου', 'ο αδελφός μου', 'η ξαδέλφη μου', 'η μητέρα μου'], a: 0 },
        { type: 'choice', q: '{{g:Είμαι παντρεμένη.}} is said by…', options: ['a man', 'a woman', 'a child', 'anyone'], a: 1 },
        { q: 'Write “my father”.', a: 'ο πατέρας μου', accept: ['ο πατερας μου', 'πατέρας μου'], say: 'Ο πατέρας μου.' },
        { q: 'Write “I have two children.”', a: 'έχω δύο παιδιά', accept: ['εχω δυο παιδια'], say: 'Έχω δύο παιδιά.' }
      ] }
    ],
    homework: [
      'Draw your family tree and label each person in Greek with μου.',
      'Write four sentences about ages and jobs in your family.',
      'Say the dialogue aloud, taking both parts.'
    ]
  },

  {
    day: 20, week: 4, weekTheme: 'People and plans', level: 'A1', minutes: '20 min',
    title: 'Health: the pharmacy and the doctor', gr: 'Υγεία: φαρμακείο και γιατρός',
    goals: [
      'Say what hurts and how you feel',
      'Ask for medicine at the pharmacy',
      'Book a doctor’s appointment'
    ],
    sections: [
      { t: 'prose', html:
        '<p>In Greece the pharmacy — <span class="gr">το φαρμακείο</span>, marked with a green cross — is your first stop for minor problems. ' +
        'The pharmacist will ask <span class="gr">Τι σας συμβαίνει;</span> (what is wrong?) and can give advice without an appointment.</p>' },
      { t: 'phrases', title: 'Saying what is wrong', items: [
        ['Δεν αισθάνομαι καλά.', 'I don’t feel well.'],
        ['Έχω πονοκέφαλο.', 'I have a headache.'],
        ['Έχω πονόλαιμο.', 'I have a sore throat.'],
        ['Με πονάει η κοιλιά μου.', 'My stomach hurts.'],
        ['Έχω πυρετό.', 'I have a fever.'],
        ['Βήχω πολύ.', 'I am coughing a lot.'],
        ['Είμαι αλλεργικός / αλλεργική στην πενικιλίνη.', 'I am allergic to penicillin.'],
        ['Χρειάζομαι ένα παυσίπονο.', 'I need a painkiller.']
      ] },
      { t: 'note', title: '“It hurts me”.',
        html: 'Greek uses the pattern <b>με πονάει + body part</b>: <span class="gr">με πονάει το κεφάλι μου</span> — my head hurts. ' +
        'The body part takes <b>το</b> for neuter words. With the verb <span class="gr">πονάω</span> you can also simply say <span class="gr">πονάει το πόδι μου</span>.' },
      { t: 'table', title: 'Body and symptoms', head: ['Greek', 'English'], rows: [
        ['το κεφάλι', 'the head'], ['το στομάχι', 'the stomach'], ['ο λαιμός', 'the throat'],
        ['το χέρι', 'the arm, hand'], ['το πόδι', 'the leg, foot'], ['η πλάτη', 'the back'],
        ['το δόντι', 'the tooth'], ['ο πυρετός', 'the fever'], ['το κρύωμα', 'the cold (illness)']
      ] },
      { t: 'phrases', title: 'At the pharmacy', items: [
        ['Έχετε κάτι για τον πονοκέφαλο;', 'Do you have something for a headache?'],
        ['Θέλω ένα παυσίπονο, παρακαλώ.', 'I would like a painkiller, please.'],
        ['Πόσες φορές την ημέρα;', 'How many times a day?'],
        ['Πρέπει να πάρω αντιβιοτικό;', 'Do I need to take an antibiotic?'],
        ['Χρειάζομαι συνταγή;', 'Do I need a prescription?'],
        ['Πού είναι το πλησιέστερο νοσοκομείο;', 'Where is the nearest hospital?']
      ] },
      { t: 'dialogue', title: 'At the pharmacy', d: {
        id: 'd20', title: 'At the pharmacy', gr: 'Στο φαρμακείο', level: 'A1',
        setting: 'A green cross on the corner; the pharmacist looks up from a box of pills.',
        lines: [
          { s: 'Φαρμακοποιός', g: 'Καλησπέρα, τι σας συμβαίνει;', e: 'Good evening, what is wrong?' },
          { s: 'Σάρα', g: 'Έχω πονοκέφαλο από το πρωί.', e: 'I have had a headache since morning.' },
          { s: 'Φαρμακοποιός', g: 'Έχετε πυρετό;', e: 'Do you have a fever?' },
          { s: 'Σάρα', g: 'Όχι, μόνο πονοκέφαλο.', e: 'No, only a headache.' },
          { s: 'Φαρμακοποιός', g: 'Πάρτε αυτό. Ένα κάθε έξι ώρες.', e: 'Take this. One every six hours.' },
          { s: 'Σάρα', g: 'Χρειάζομαι συνταγή;', e: 'Do I need a prescription?' },
          { s: 'Φαρμακοποιός', g: 'Όχι, είναι χωρίς συνταγή.', e: 'No, it is without prescription.' },
          { s: 'Σάρα', g: 'Ευχαριστώ πολύ. Καλή συνέχεια!', e: 'Thank you very much. Have a good evening!' }
        ]
      } },
      { t: 'quiz', title: 'Day 20 — check yourself', day: 20, items: [
        { type: 'choice', q: '{{g:Έχω πυρετό.}} means…', options: ['I have a cold.', 'I have a fever.', 'I have a headache.', 'I am tired.'], a: 1 },
        { type: 'choice', q: '“My stomach hurts.”', options: ['Με πονάει η κοιλιά μου.', 'Πονάω την κοιλιά.', 'Η κοιλιά πονάει με.', 'Έχω κοιλιά.'], a: 0 },
        { type: 'choice', q: '{{g:το φαρμακείο}} is…', options: ['the hospital', 'the pharmacy', 'the doctor', 'the medicine'], a: 1 },
        { type: 'choice', q: '“Do I need a prescription?”', options: ['Χρειάζομαι συνταγή;', 'Χρειάζομαι φάρμακο;', 'Έχετε συνταγή;', 'Πόσο κάνει;'], a: 0 },
        { q: 'Write “I don’t feel well.”', a: 'δεν αισθάνομαι καλά', accept: ['δεν αισθανομαι καλα', 'δεν αισθάνομαι καλά'], say: 'Δεν αισθάνομαι καλά.' },
        { q: 'Write “I have a headache.”', a: 'έχω πονοκέφαλο', accept: ['εχω πονοκεφαλο'], say: 'Έχω πονοκέφαλο.' }
      ] }
    ],
    homework: [
      'Learn the eight symptom phrases by heart.',
      'Write a short note to a pharmacist describing two symptoms.',
      'Practise “Με πονάει…” with five body parts.'
    ]
  },

  {
    day: 21, week: 4, weekTheme: 'People and plans', level: 'A1', minutes: '18 min',
    title: 'Weather, seasons and small talk', gr: 'Ο καιρός και οι εποχές',
    goals: [
      'Talk about the weather in the present tense',
      'Name the seasons and months',
      'Make small talk like a local'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Weather talk is the easiest small talk in any language. Greek uses <b>κάνει</b> for most weather: <span class="gr">κάνει κρύο</span> — it is cold, ' +
        '<span class="gr">κάνει ζέστη</span> — it is hot. The verb is always third person singular, with no subject.</p>' },
      { t: 'table', title: 'The weather today', head: ['Greek', 'English'], rows: [
        ['Τι καιρό κάνει;', 'What is the weather like?'],
        ['Κάνει καλό καιρό.', 'The weather is good.'],
        ['Κάνει κρύο.', 'It is cold.'],
        ['Κάνει ζέστη.', 'It is hot.'],
        ['Βρέχει.', 'It is raining.'],
        ['Χιονίζει.', 'It is snowing.'],
        ['Φυσάει.', 'It is windy.'],
        ['Έχει ήλιο.', 'It is sunny.'],
        ['Είναι συννεφιασμένα.', 'It is cloudy.']
      ] },
      { t: 'table', title: 'The four seasons', head: ['Greek', 'English', 'Months'], rows: [
        ['η άνοιξη', 'spring', 'Μάρτιος, Απρίλιος, Μάιος'],
        ['το καλοκαίρι', 'summer', 'Ιούνιος, Ιούλιος, Αύγουστος'],
        ['το φθινόπωρο', 'autumn', 'Σεπτέμβριος, Οκτώβριος, Νοέμβριος'],
        ['ο χειμώνας', 'winter', 'Δεκέμβριος, Ιανουάριος, Φεβρουάριος']
      ] },
      { t: 'note', title: 'How Greeks greet the weather.',
        html: 'When it is hot, people say <span class="gr">Τι ζέστη!</span> — what heat! When it is cold, <span class="gr">Τι κρύο!</span> ' +
        'In August, the wind that cools the islands is <span class="gr">το μελτέμι</span>. Small words like these make you sound at home.' },
      { t: 'phrases', title: 'Small talk openers', items: [
        ['Τι κάνει ο καιρός σήμερα;', 'What is the weather like today?'],
        ['Αύριο θα κάνει ζέστη.', 'Tomorrow it will be hot.'],
        ['Μου αρέσει το καλοκαίρι.', 'I like summer.'],
        ['Δεν μου αρέσει ο χειμώνας.', 'I don’t like winter.'],
        ['Τι ωραία μέρα!', 'What a beautiful day!'],
        ['Πάμε στην παραλία;', 'Shall we go to the beach?']
      ] },
      { t: 'quiz', title: 'Day 21 — check yourself', day: 21, items: [
        { type: 'choice', q: '{{g:Βρέχει.}} means…', options: ['It is snowing.', 'It is raining.', 'It is windy.', 'It is sunny.'], a: 1 },
        { type: 'choice', q: '“It is cold.”', options: ['Κάνει ζέστη.', 'Κάνει κρύο.', 'Έχει ήλιο.', 'Φυσάει.'], a: 1 },
        { type: 'choice', q: '{{g:το φθινόπωρο}} is…', options: ['spring', 'summer', 'autumn', 'winter'], a: 2 },
        { type: 'choice', q: 'Which month comes after Ιούνιος?', options: ['Μάιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος'], a: 1 },
        { q: 'Write “It is hot.”', a: 'κάνει ζέστη', accept: ['κανει ζεστη'], say: 'Κάνει ζέστη.' },
        { q: 'Write “I like summer.”', a: 'μου αρέσει το καλοκαίρι', accept: ['μου αρεσει το καλοκαιρι'], say: 'Μου αρέσει το καλοκαίρι.' }
      ] }

    ],
    homework: [
      'Describe today’s weather in three Greek sentences.',
      'Learn the seasons and their months.',
      'Write five small-talk sentences you could use at a bus stop.'
    ]
  },

  {
    day: 22, week: 4, weekTheme: 'People and plans', level: 'A1', minutes: '25 min',
    title: 'Review: everyday Greek', gr: 'Επανάληψη: η καθημερινή γλώσσα',
    goals: [
      'Check what stuck from days 13–21',
      'Find your weak spots before week 5',
      'Speak for two minutes without stopping'
    ],
    sections: [
      { t: 'prose', html:
        '<p>No new grammar today. This is a <b>retrieval day</b>: the quiz below mixes everything from week 3. ' +
        'Answer from memory, then go back to the day named in each explanation.</p>' },
      { t: 'quiz', title: 'Week 3 review', day: 22, items: [
        { type: 'choice', q: '“It is half past two.”', options: ['Είναι δύο και μισή.', 'Είναι δύο και τέταρτο.', 'Είναι μία και μισή.', 'Είναι δύο παρά μισή.'], a: 0 },
        { type: 'choice', q: '{{g:Θέλω ___ καφέ.}}', options: ['ένα', 'έναν', 'μία', 'το'], a: 1 },
        { type: 'choice', q: '“I live in Athens.”', options: ['Μένω στην Αθήνα.', 'Μένω σε Αθήνα.', 'Μένω από την Αθήνα.', 'Μένω με την Αθήνα.'], a: 0 },
        { type: 'choice', q: '{{g:Το κατάστημα είναι ___ την εκκλησία.}} (next to)', options: ['δίπλα στην', 'μακριά από', 'πάνω στην', 'πίσω στην'], a: 0 },
        { type: 'choice', q: '“45” in Greek words:', options: ['σαράντα πέντε', 'πενήντα τέσσερα', 'τριάντα πέντε', 'σαράντα και πέντε'], a: 3 },
        { type: 'choice', q: '{{g:Πόσο κάνει;}} asks…', options: ['where it is', 'how much it costs', 'what time it is', 'who it is'], a: 1 },
        { type: 'choice', q: 'Polite “turn left”:', options: ['Στρίψε αριστερά.', 'Στρίψτε αριστερά.', 'Στρίβω αριστερά.', 'Αριστερή στροφή.'], a: 1 },
        { type: 'choice', q: '“I am a teacher.” (a woman)', options: ['Είμαι δάσκαλος.', 'Είμαι δασκάλα.', 'Είμαι η δασκάλα μου.', 'Έχω δασκάλα.'], a: 1 },
        { type: 'choice', q: '{{g:η αδελφή μου}} means…', options: ['my brother', 'my sister', 'my mother', 'my daughter'], a: 1 },
        { type: 'choice', q: '“My head hurts.”', options: ['Με πονάει το κεφάλι μου.', 'Πονάω το κεφάλι.', 'Έχω κεφάλι.', 'Το κεφάλι μου είναι.'], a: 0 },
        { type: 'choice', q: '{{g:Χιονίζει.}} means…', options: ['It is raining.', 'It is snowing.', 'It is sunny.', 'It is windy.'], a: 1 },
        { type: 'choice', q: 'Which is “the bill”?', options: ['το μενού', 'ο λογαριασμός', 'το πιάτο', 'η θέση'], a: 1 }
      ] },
      { t: 'note', title: 'Two minutes, out loud.',
        html: 'Set a timer for two minutes and speak Greek without stopping. Cover: your name, where you live, your job, your family, your day, the weather. ' +
        'Do not look anything up. When the timer rings, write down the three words you could not remember and learn them tonight.' },
      { t: 'prose', html:
        '<p><b>Target for week 3:</b> you can survive a day in a Greek town — order food, find a pharmacy, ask directions, buy a ticket and introduce your family. ' +
        'Week 4 adds the future, the past and the phrases you need for bureaucracy and travel.</p>' },
      { t: 'flash', title: 'Flashcards: the everyday nouns', items: [
        ['το ψωμί', 'bread'], ['ο καφές', 'coffee'], ['το νερό', 'water'],
        ['ο λογαριασμός', 'the bill'], ['η στάση', 'the stop'], ['το εισιτήριο', 'the ticket'],
        ['το φαρμακείο', 'the pharmacy'], ['το νοσοκομείο', 'the hospital'],
        ['η δουλειά', 'work / job'], ['το σπίτι', 'home / house'],
        ['το κατάστημα', 'the shop'], ['η γειτονιά', 'the neighbourhood'],
        ['ακριβό', 'expensive'], ['φθηνό', 'cheap'], ['κοντά', 'near'], ['μακριά', 'far'],
        ['ανοιχτό', 'open'], ['κλειστό', 'closed']
      ] }
    ],    homework: [
      'Redo every question you got wrong in the quiz.',
      'Write a 100-word text about your life using at least ten verbs.',
      'Read the whole of Day 13 aloud as a warm-up.'
    ]
  }

  ]);
})();
