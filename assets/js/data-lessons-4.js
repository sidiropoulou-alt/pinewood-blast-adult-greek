/* Pinewood BLAST Adult Greek — lessons 23–30 */
(function () {
  var G = window.GREEK = window.GREEK || {};
  G.days = (G.days || []).concat([

  {
    day: 23, week: 4, weekTheme: 'People and plans', level: 'A1+', minutes: '20 min',
    title: 'Plans: the future with θα', gr: 'Το μέλλον: θα + ενεστώτας',
    goals: [
      'Talk about tomorrow, next week and next year',
      'Form the future with θα and the present',
      'Make invitations and accept or refuse them'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Good news: Greek has no separate future tense to learn. You take the present tense you already know and put <b>θα</b> in front of it.</p>' +
        '<p><span class="gr">Πηγαίνω</span> — I go / I am going. <span class="gr">Θα πηγαίνω</span>… careful: the everyday future is <span class="gr">θα πάω</span> — I will go. ' +
        'For most verbs the future form is close to the present: <span class="gr">θα δουλεύω</span> (I will be working) and <span class="gr">θα δουλέψω</span> (I will work, once). ' +
        'At A1, learn the common future forms as phrases — people will understand you either way.</p>' },
      { t: 'conj', title: 'θα with everyday verbs', note: 'θα never changes. Only the verb after it does.', rows: [
        ['εγώ', 'θα πάω', 'I will go'],
        ['εσύ', 'θα πας', 'you will go'],
        ['αυτός / αυτή', 'θα πάει', 'he / she will go'],
        ['εμείς', 'θα πάμε', 'we will go'],
        ['εσείς', 'θα πάτε', 'you will go'],
        ['αυτοί', 'θα πάνε', 'they will go']
      ] },
      { t: 'table', title: 'Time words for the future', head: ['Greek', 'English'], rows: [
        ['αύριο', 'tomorrow'], ['μεθαύριο', 'the day after tomorrow'], ['απόψε', 'tonight'],
        ['την επόμενη εβδομάδα', 'next week'], ['τον επόμενο μήνα', 'next month'],
        ['του χρόνου', 'next year'], ['σε δύο μέρες', 'in two days'], ['αργότερα', 'later'],
        ['μετά', 'after, later'], ['σύντομα', 'soon']
      ] },
      { t: 'phrases', title: 'Invitations', items: [
        ['Τι κάνεις αύριο;', 'What are you doing tomorrow?', 'informal'],
        ['Τι κάνετε το Σάββατο;', 'What are you doing on Saturday?', 'polite'],
        ['Θα πάμε στην παραλία. Έρχεσαι;', 'We are going to the beach. Are you coming?'],
        ['Θέλεις να πιούμε έναν καφέ;', 'Do you want to have a coffee?'],
        ['Με μεγάλη μου χαρά!', 'With great pleasure!'],
        ['Δυστυχώς δεν μπορώ.', 'Unfortunately I can’t.'],
        ['Την άλλη φορά.', 'Next time.'],
        ['Στις οκτώ το βράδυ;', 'At eight in the evening?']
      ] },
      { t: 'note', title: '“Shall we…?” is just the question form.',
        html: 'Greek has no special “shall we” ending. You ask with the normal present or with <span class="gr">να</span>: ' +
        '<span class="gr">Πάμε για καφέ;</span> (shall we go for coffee?) or <span class="gr">Να πάμε για καφέ;</span> Both are natural and friendly.' },
      { t: 'dialogue', title: 'A plan for Saturday', d: {
        id: 'd23', title: 'A plan for Saturday', gr: 'Σχέδιο για το Σάββατο', level: 'A1+',
        setting: 'A phone call between two friends.',
        lines: [
          { s: 'Νίκος', g: 'Γεια σου, Σάρα! Τι κάνεις το Σάββατο;', e: 'Hi Sarah! What are you doing on Saturday?' },
          { s: 'Σάρα', g: 'Δεν έχω σχέδια. Γιατί;', e: 'I have no plans. Why?' },
          { s: 'Νίκος', g: 'Θα πάμε με το πλοίο στη Μονή. Έρχεσαι;', e: 'We are going by ferry to Moni. Are you coming?' },
          { s: 'Σάρα', g: 'Με μεγάλη μου χαρά! Τι ώρα;', e: 'With great pleasure! What time?' },
          { s: 'Νίκος', g: 'Στις εννιά το πρωί, στο λιμάνι.', e: 'At nine in the morning, at the port.' },
          { s: 'Σάρα', g: 'Τέλεια. Θα φέρω νερό και φαγητό.', e: 'Perfect. I will bring water and food.' },
          { s: 'Νίκος', g: 'Μην αργήσεις!', e: 'Don’t be late!' },
          { s: 'Σάρα', g: 'Μην ανησυχείς, θα είμαι εκεί στις εννιά.', e: 'Don’t worry, I will be there at nine.' }
        ]
      } },
      { t: 'quiz', title: 'Day 23 — check yourself', day: 23, items: [
        { type: 'choice', q: '“We will go.”', options: ['θα πάμε', 'θα πάτε', 'θα πάνε', 'θα πάω'], a: 0 },
        { type: 'choice', q: '{{g:αύριο}} means…', options: ['yesterday', 'tomorrow', 'today', 'tonight'], a: 1 },
        { type: 'choice', q: '“Do you want to have a coffee?”', options: ['Θέλεις να πιούμε έναν καφέ;', 'Θέλω έναν καφέ.', 'Πίνω έναν καφέ.', 'Πάμε έναν καφέ;'], a: 0 },
        { type: 'choice', q: 'Where does {{g:θα}} go?', options: ['after the verb', 'before the verb', 'at the end', 'it replaces the verb'], a: 1 },
        { q: 'Write “I will go to Athens tomorrow.”', a: 'θα πάω στην αθήνα αύριο', accept: ['θα παω στην αθηνα αυριο', 'αύριο θα πάω στην αθήνα'], say: 'Θα πάω στην Αθήνα αύριο.' },
        { q: 'Write “next week”.', a: 'την επόμενη εβδομάδα', accept: ['την επομενη εβδομαδα'], say: 'Την επόμενη εβδομάδα.' }
      ] }
    ],
    homework: [
      'Write five sentences about your plans for next week with θα.',
      'Invite a friend to three different things, aloud.',
      'Learn to say “Δυστυχώς δεν μπορώ” gracefully — you will need it.'
    ]
  },

  {
    day: 24, week: 4, weekTheme: 'The past and the wider world', level: 'A1+', minutes: '22 min',
    title: 'Yesterday: the simple past', gr: 'Ο αόριστος: μιλάμε για το χθες',
    goals: [
      'Recognise and use the most common past forms',
      'Tell a short story about yesterday',
      'Use χθες, προχθές and πέρυσι'
    ],
    sections: [
      { t: 'prose', html:
        '<p>The simple past — <b>αόριστος</b> — is used for finished actions: <span class="gr">Πήγα στην Αθήνα χθες.</span> — I went to Athens yesterday. ' +
        'It is the second most useful tense after the present, and for a beginner the priority is recognition: you will hear it constantly.</p>' },
      { t: 'table', title: 'The past forms you will meet first', head: ['Present', 'Past (I…)', 'Meaning'], rows: [
        ['πηγαίνω / πάω', 'πήγα', 'I went'],
        ['έρχομαι', 'ήρθα', 'I came'],
        ['τρώω', 'έφαγα', 'I ate'],
        ['πίνω', 'ήπια', 'I drank'],
        ['βλέπω', 'είδα', 'I saw'],
        ['λέω', 'είπα', 'I said'],
        ['κάνω', 'έκανα', 'I did, made'],
        ['δουλεύω', 'δούλεψα', 'I worked'],
        ['μένω', 'έμεινα', 'I stayed, lived'],
        ['θέλω', 'ήθελα', 'I wanted']
      ] },
      { t: 'conj', title: 'The past of είμαι and έχω', note: 'These two are the backbone of every story.', rows: [
        ['εγώ', 'ήμουν', 'I was'],
        ['εσύ', 'ήσουν', 'you were'],
        ['αυτός / αυτή', 'ήταν', 'he / she was'],
        ['εμείς', 'ήμασταν', 'we were'],
        ['εσείς', 'ήσασταν', 'you were'],
        ['αυτοί', 'ήταν', 'they were']
      ] },
      { t: 'table', title: 'Past time words', head: ['Greek', 'English'], rows: [
        ['χθες / εχθές', 'yesterday'], ['προχθές', 'the day before yesterday'],
        ['πέρυσι', 'last year'], ['τον περασμένο μήνα', 'last month'],
        ['την περασμένη εβδομάδα', 'last week'], ['πριν από δύο μέρες', 'two days ago'],
        ['τότε', 'then'], ['χθες το βράδυ', 'last night']
      ] },
      { t: 'prose', html:
        '<p>A tiny story using only forms from the tables above:</p>' +
        '<p><span class="gr">Χθες ήμουν στο λιμάνι. Ήπια έναν καφέ και είδα το πλοίο. Πήγα στην παραλία με τη φίλη μου. Φάγαμε ψάρι και ήπιαμε κρασί. Γυρίσαμε στο σπίτι αργά. Ήταν μια ωραία μέρα.</span></p>' +
        '<p class="small muted">Yesterday I was at the port. I drank a coffee and saw the ferry. I went to the beach with my friend. We ate fish and drank wine. We came home late. It was a nice day.</p>' },
      { t: 'note', title: 'One warning about the past.',
        html: 'The past has its own stress rules and some verbs change shape a lot (<span class="gr">βλέπω → είδα</span>). ' +
        'Do not try to generate every past form yet. Learn the twenty most common ones as whole words, and say <span class="gr">χθες</span> to be clear.' },
      { t: 'quiz', title: 'Day 24 — check yourself', day: 24, items: [
        { type: 'choice', q: '{{g:Πήγα στην παραλία.}} means…', options: ['I go to the beach.', 'I went to the beach.', 'I will go to the beach.', 'I am at the beach.'], a: 1 },
        { type: 'choice', q: 'Past of {{g:τρώω}}?', options: ['έφαγα', 'ήπια', 'είδα', 'έκανα'], a: 0 },
        { type: 'choice', q: '“It was a nice day.”', options: ['Είναι μια ωραία μέρα.', 'Ήταν μια ωραία μέρα.', 'Θα είναι μια ωραία μέρα.', 'Έχει μια ωραία μέρα.'], a: 1 },
        { type: 'choice', q: '{{g:πέρυσι}} means…', options: ['yesterday', 'last year', 'next year', 'last week'], a: 1 },
        { q: 'Write “I was at home.”', a: 'ήμουν στο σπίτι', accept: ['ημουν στο σπιτι'], say: 'Ήμουν στο σπίτι.' },
        { q: 'Write “I drank a coffee.”', a: 'ήπια έναν καφέ', accept: ['ηπια εναν καφε'], say: 'Ήπια έναν καφέ.' }
      ] }
    ],
    homework: [
      'Write six sentences about yesterday using the past forms.',
      'Learn the ten past forms in the first table by heart.',
      'Tell the story of your last weekend aloud in Greek, slowly.'
    ]
  },

  {
    day: 25, week: 5, weekTheme: 'The past and the wider world', level: 'A1+', minutes: '20 min',
    title: 'Mine, yours, ours: possession', gr: 'Κτητικά: μου, σου, του',
    goals: [
      'Say whose thing it is',
      'Use two ways to show possession',
      'Say “I must” and “I have to”'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Greek shows possession in two ways and both are easy.</p>' +
        '<p><b>1. The short word after the noun:</b> <span class="gr">το σπίτι μου</span> — the house of mine → my house. ' +
        'The little word agrees with the <i>owner</i>, not the thing.</p>' +
        '<p><b>2. The genitive:</b> <span class="gr">το σπίτι του Νίκου</span> — Nikos’s house. This is how you say “of + name”.</p>' },
      { t: 'table', title: 'The possessive words', head: ['Owner', 'Word', 'Example'], rows: [
        ['I', 'μου', 'το βιβλίο μου — my book'],
        ['you (sg.)', 'σου', 'το βιβλίο σου — your book'],
        ['he / it', 'του', 'το βιβλίο του — his book'],
        ['she', 'της', 'το βιβλίο της — her book'],
        ['we', 'μας', 'το βιβλίο μας — our book'],
        ['you (pl.)', 'σας', 'το βιβλίο σας — your book'],
        ['they', 'τους', 'το βιβλίο τους — their book']
      ] },
      { t: 'note', title: 'The article stays.',
        html: 'Unlike English, the article does not disappear: <span class="gr">ο πατέρας μου</span> — literally “the father of mine”. ' +
        'For family members you often drop it in speech: <span class="gr">Η μαμά μου</span> or just <span class="gr">μαμά μου</span>.' },
      { t: 'phrases', title: 'Whose is it?', items: [
        ['Τίνος είναι αυτό;', 'Whose is this?'],
        ['Είναι δικό μου.', 'It’s mine.'],
        ['Είναι δικό σου;', 'Is it yours?'],
        ['Όχι, δεν είναι δικό μου.', 'No, it isn’t mine.'],
        ['Είναι το κινητό της Μαρίας.', 'It’s Maria’s phone.'],
        ['Αυτό είναι το αυτοκίνητο του γείτονα.', 'This is the neighbour’s car.']
      ] },
      { t: 'prose', html:
        '<p><b>Obligation.</b> “I must / I have to” is <span class="gr">πρέπει να</span> + verb. It never changes with the person:</p>' +
        '<p><span class="gr">Πρέπει να πάω.</span> I must go. · <span class="gr">Πρέπει να δουλέψουμε.</span> We must work. · ' +
        '<span class="gr">Δεν πρέπει να καπνίζεις εδώ.</span> You must not smoke here.</p>' +
        '<p>The negative <span class="gr">δεν πρέπει</span> means “must not”, not “don’t have to”. For “I don’t need to” say ' +
        '<span class="gr">δεν χρειάζεται να…</span>.</p>' },
      { t: 'quiz', title: 'Day 25 — check yourself', day: 25, items: [
        { type: 'choice', q: '“my sister” (possessive form)', options: ['η αδελφή μου', 'μου η αδελφή', 'η μου αδελφή', 'αδελφή της'], a: 0 },
        { type: 'choice', q: '{{g:το σπίτι τους}} means…', options: ['my house', 'your house', 'their house', 'our house'], a: 2 },
        { type: 'choice', q: '“her book”', options: ['το βιβλίο του', 'το βιβλίο της', 'το βιβλίο μας', 'το βιβλίο σου'], a: 1 },
        { type: 'choice', q: '{{g:Πρέπει να φύγω.}} means…', options: ['I want to leave.', 'I must leave.', 'I can leave.', 'I left.'], a: 1 },
        { type: 'choice', q: '“You must not smoke here.”', options: ['Δεν πρέπει να καπνίζεις εδώ.', 'Δεν χρειάζεται να καπνίζεις εδώ.', 'Δεν καπνίζεις εδώ.', 'Πρέπει να μην καπνίζεις εδώ.'], a: 0 },
        { q: 'Write “my father”.', a: 'ο πατέρας μου', accept: ['ο πατερας μου', 'πατέρας μου'], say: 'Ο πατέρας μου.' },
        { q: 'Write “I have to work today.”', a: 'πρέπει να δουλέψω σήμερα', accept: ['πρεπει να δουλεψω σημερα'], say: 'Πρέπει να δουλέψω σήμερα.' }
      ] }
    ],
    homework: [
      'Label ten objects in your home in Greek with μου / σου / της.',
      'Write five sentences with πρέπει να about your week.',
      'Practise “Τίνος είναι αυτό;” with a friend.'
    ]
  },

  {
    day: 26, week: 5, weekTheme: 'The past and the wider world', level: 'A1+', minutes: '25 min',
    title: 'Formal Greek: offices and phone calls', gr: 'Επίσημα ελληνικά: υπηρεσίες και τηλέφωνο',
    goals: [
      'Use the polite form confidently with strangers and officials',
      'Book an appointment and make a phone call',
      'Understand the words on a form or a sign'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Greeks switch between <b>εσύ</b> (friends, family, children, colleagues of your age) and <b>εσείς</b> (strangers, older people, officials, shop assistants until invited otherwise). ' +
        'When in doubt, use <span class="gr">εσείς</span>; nobody is ever offended by too much politeness.</p>' +
        '<p>With <span class="gr">εσείς</span> the verb ends in <b>-ετε</b> or <b>-τε</b>: <span class="gr">Μιλάτε αγγλικά;</span> — Do you speak English?</p>' },
      { t: 'phrases', title: 'At a public office', items: [
        ['Συγγνώμη, μιλάτε αγγλικά;', 'Excuse me, do you speak English?', 'polite'],
        ['Θα ήθελα ένα ραντεβού.', 'I would like an appointment.'],
        ['Πότε μπορώ να έρθω;', 'When can I come?'],
        ['Τι χαρτιά χρειάζομαι;', 'What papers do I need?'],
        ['Έχω διαβατήριο και ταυτότητα.', 'I have a passport and an ID card.'],
        ['Πού πρέπει να υπογράψω;', 'Where do I have to sign?'],
        ['Πόσο καιρό θα πάρει;', 'How long will it take?'],
        ['Ευχαριστώ πολύ για τη βοήθεια.', 'Thank you very much for your help.']
      ] },
      { t: 'table', title: 'Words you will meet on forms and signs', head: ['Greek', 'English'], rows: [
        ['όνομα', 'first name'], ['επώνυμο', 'surname'], ['ημερομηνία γέννησης', 'date of birth'],
        ['διεύθυνση', 'address'], ['τηλέφωνο', 'telephone'], ['υπογραφή', 'signature'],
        ['έγγραφο', 'document'], ['άδεια', 'permit, licence'], ['είσοδος', 'entrance'],
        ['έξοδος', 'exit'], ['ανοιχτό', 'open'], ['κλειστό', 'closed'], ['ώρες κοινού', 'opening hours']
      ] },
      { t: 'prose', html:
        '<p><b>On the phone</b>, Greeks usually say <span class="gr">Εμπρός;</span> instead of “hello”. ' +
        'To ask for someone: <span class="gr">Μπορώ να μιλήσω με τον κύριο Παπαδόπουλο;</span> — May I speak with Mr Papadopoulos? ' +
        'To say you will call back: <span class="gr">Θα σας πάρω αργότερα.</span></p>' },
      { t: 'dialogue', title: 'At the town hall', d: {
        id: 'd26', title: 'At the town hall', gr: 'Στο δημαρχείο', level: 'A1+',
        setting: 'Sarah needs a residence certificate. She speaks to the clerk.',
        lines: [
          { s: 'Σάρα', g: 'Καλημέρα σας. Θα ήθελα ένα ραντεβού, παρακαλώ.', e: 'Good morning. I would like an appointment, please.' },
          { s: 'Υπάλληλος', g: 'Καλημέρα. Για ποιο θέμα;', e: 'Good morning. What is it about?' },
          { s: 'Σάρα', g: 'Χρειάζομαι βεβαίωση κατοικίας.', e: 'I need a certificate of residence.' },
          { s: 'Υπάλληλος', g: 'Έχετε ταυτότητα ή διαβατήριο;', e: 'Do you have an ID card or passport?' },
          { s: 'Σάρα', g: 'Ναι, έχω διαβατήριο. Και ένα λογαριασμό ρεύματος.', e: 'Yes, I have a passport. And an electricity bill.' },
          { s: 'Υπάλληλος', g: 'Πολύ καλά. Μπορείτε την Πέμπτη στις δέκα;', e: 'Very well. Can you come on Thursday at ten?' },
          { s: 'Σάρα', g: 'Ναι, ευχαριστώ. Πού είναι το γραφείο;', e: 'Yes, thank you. Where is the office?' },
          { s: 'Υπάλληλος', g: 'Πρώτος όροφος, δεξιά. Θα σας περιμένουμε.', e: 'First floor, on the right. We will be expecting you.' }
        ]
      } },
      { t: 'note', title: 'The magic phrase for foreigners.',
        html: '<span class="gr">Μιλάτε αγγλικά;</span> and <span class="gr">Μιλάω λίγα ελληνικά.</span> — I speak a little Greek. ' +
        'Saying the second one first almost always makes people help you more, and switch to English only if they want to.' },
      { t: 'quiz', title: 'Day 26 — check yourself', day: 26, items: [
        { type: 'choice', q: 'Polite “Do you speak English?”', options: ['Μιλάς αγγλικά;', 'Μιλάτε αγγλικά;', 'Μιλάω αγγλικά;', 'Μιλάνε αγγλικά;'], a: 1 },
        { type: 'choice', q: '“I would like an appointment.”', options: ['Θέλω ραντεβού.', 'Θα ήθελα ένα ραντεβού.', 'Έχω ραντεβού.', 'Κάνω ραντεβού.'], a: 1 },
        { type: 'choice', q: '{{g:επώνυμο}} means…', options: ['first name', 'surname', 'signature', 'address'], a: 1 },
        { type: 'choice', q: '{{g:Εμπρός;}} on the phone means…', options: ['Come in.', 'Hello?', 'Forward.', 'Goodbye.'], a: 1 },
        { type: 'choice', q: '“What papers do I need?”', options: ['Τι χαρτιά χρειάζομαι;', 'Πού είναι τα χαρτιά;', 'Έχω χαρτιά;', 'Πότε είναι τα χαρτιά;'], a: 0 },
        { q: 'Write “I speak a little Greek.”', a: 'μιλάω λίγα ελληνικά', accept: ['μιλαω λιγα ελληνικα', 'μιλώ λίγα ελληνικά'], say: 'Μιλάω λίγα ελληνικά.' }
      ] }
    ],
    homework: [
      'Practise the whole town-hall dialogue aloud, playing both roles.',
      'Write your own personal details in Greek the way a form would ask.',
      'Learn the eight office phrases by heart — they save whole afternoons.'
    ]
  },

  {
    day: 27, week: 5, weekTheme: 'The past and the wider world', level: 'A1+', minutes: '22 min',
    title: 'Travel: hotels, ferries and complaints', gr: 'Ταξίδι: ξενοδοχείο, πλοίο, παράπονα',
    goals: [
      'Book and check into a room',
      'Ask about times, tickets and luggage',
      'Complain politely and get a result'
    ],
    sections: [
      { t: 'phrases', title: 'Hotel', items: [
        ['Έχω μια κράτηση στο όνομα Σάρα Τζόουνς.', 'I have a reservation in the name Sarah Jones.'],
        ['Για δύο βράδια, παρακαλώ.', 'For two nights, please.'],
        ['Πόσο κάνει το δωμάτιο;', 'How much is the room?'],
        ['Το πρωινό περιλαμβάνεται;', 'Is breakfast included?'],
        ['Υπάρχει Wi-Fi στο δωμάτιο;', 'Is there Wi-Fi in the room?'],
        ['Θα ήθελα ένα δωμάτιο με θέα στη θάλασσα.', 'I would like a room with a sea view.'],
        ['Μπορώ να αφήσω τις αποσκευές μου εδώ;', 'Can I leave my luggage here?'],
        ['Τι ώρα είναι το check-out;', 'What time is check-out?']
      ] },
      { t: 'phrases', title: 'Ferries and tickets', items: [
        ['Δύο εισιτήρια για τη Σαντορίνη, παρακαλώ.', 'Two tickets to Santorini, please.'],
        ['Τι ώρα φεύγει το πλοίο;', 'What time does the ferry leave?'],
        ['Πόσο διαρκεί το ταξίδι;', 'How long does the trip take?'],
        ['Από ποια πύλη;', 'From which gate?'],
        ['Είναι με επιστροφή.', 'It is a return ticket.'],
        ['Χρειάζομαι θέση στο κατάστρωμα.', 'I need a seat on the deck.']
      ] },
      { t: 'note', title: 'Complaining — the Greek way.',
        html: 'Start soft, stay calm and use <span class="gr">θα ήθελα</span>: <span class="gr">Συγγνώμη, θα ήθελα να αλλάξω δωμάτιο· το κλιματιστικό δεν δουλεύει.</span> ' +
        '— Sorry, I would like to change rooms; the air conditioning doesn’t work. ' +
        'The formula is: <b>Συγγνώμη + θα ήθελα να… + the problem</b>. It works in hotels, shops and offices.' },
      { t: 'table', title: 'Travel words', head: ['Greek', 'English'], rows: [
        ['αεροδρόμιο', 'airport'], ['λιμάνι', 'port'], ['πλοίο', 'ship, ferry'],
        ['αποσκευές', 'luggage'], ['κράτηση', 'reservation'], ['δωμάτιο', 'room'],
        ['κλειδί', 'key'], ['πετσέτα', 'towel'], ['καθαρό', 'clean'], ['βρώμικο', 'dirty'],
        ['χαλασμένο', 'broken'], ['βοήθεια', 'help']
      ] },
      { t: 'dialogue', title: 'A problem with the room', d: {
        id: 'd27', title: 'A problem with the room', gr: 'Πρόβλημα με το δωμάτιο', level: 'A1+',
        setting: 'Sarah speaks to the receptionist.',
        lines: [
          { s: 'Σάρα', g: 'Συγγνώμη, θα ήθελα να αλλάξω δωμάτιο.', e: 'Sorry, I would like to change rooms.' },
          { s: 'Ρεσεψιόν', g: 'Τι συμβαίνει;', e: 'What is the matter?' },
          { s: 'Σάρα', g: 'Το κλιματιστικό δεν δουλεύει και δεν έχει ζεστό νερό.', e: 'The air conditioning doesn’t work and there is no hot water.' },
          { s: 'Ρεσεψιόν', g: 'Λυπάμαι πολύ. Θα στείλω αμέσως τον τεχνικό.', e: 'I am very sorry. I will send the technician at once.' },
          { s: 'Σάρα', g: 'Ευχαριστώ. Μπορώ να έχω ένα άλλο δωμάτιο απόψε;', e: 'Thank you. Can I have another room tonight?' },
          { s: 'Ρεσεψιόν', g: 'Βεβαίως. Το 305, με θέα στη θάλασσα.', e: 'Of course. Room 305, with a sea view.' },
          { s: 'Σάρα', g: 'Τέλεια, σας ευχαριστώ πολύ.', e: 'Perfect, thank you very much.' }
        ]
      } },
      { t: 'quiz', title: 'Day 27 — check yourself', day: 27, items: [
        { type: 'choice', q: '“Is breakfast included?”', options: ['Το πρωινό περιλαμβάνεται;', 'Έχει πρωινό;', 'Θέλω πρωινό.', 'Πόσο κάνει το πρωινό;'], a: 0 },
        { type: 'choice', q: '{{g:με επιστροφή}} means…', options: ['one way', 'return', 'refund', 'reserved'], a: 1 },
        { type: 'choice', q: '“The air conditioning is broken.”', options: ['Το κλιματιστικό δεν δουλεύει.', 'Το κλιματιστικό είναι κρύο.', 'Δεν έχω κλιματιστικό.', 'Το κλιματιστικό είναι ακριβό.'], a: 0 },
        { type: 'choice', q: '{{g:αποσκευές}} means…', options: ['tickets', 'keys', 'luggage', 'rooms'], a: 2 },
        { q: 'Write “How much is the room?”', a: 'πόσο κάνει το δωμάτιο', accept: ['ποσο κανει το δωματιο'], say: 'Πόσο κάνει το δωμάτιο;' },
        { q: 'Write “Two tickets, please.”', a: 'δύο εισιτήρια παρακαλώ', accept: ['δυο εισιτηρια παρακαλω', 'δύο εισιτήρια, παρακαλώ'], say: 'Δύο εισιτήρια, παρακαλώ.' }
      ] }
    ],
    homework: [
      'Book a hotel aloud in Greek, inventing the answers.',
      'Learn the complaint formula and use it three times on paper.',
      'Read the travel word list and mark the five you will actually need.'
    ]
  },

  {
    day: 28, week: 5, weekTheme: 'Culture and company', level: 'A1+', minutes: '25 min',
    title: 'Greek culture: names, food and hospitality', gr: 'Πολιτισμός: γιορτές, φαγητό, φιλοξενία',
    goals: [
      'Understand name days, Easter and the Greek calendar',
      'Use the wishes Greeks say all year round',
      'Behave correctly at a table and in a home'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Language alone will not make you welcome; these few customs will. In Greece the <b>name day</b> ' +
        '(<span class="gr">η γιορτή</span>) of the saint you are named after matters more than your birthday. ' +
        'You say <span class="gr">Χρόνια πολλά!</span> — many years — to everyone celebrating.</p>' },
      { t: 'phrases', title: 'Wishes you will hear constantly', items: [
        ['Χρόνια πολλά!', 'Many happy years! (birthdays, name days)'],
        ['Καλημέρα!', 'Good morning!'],
        ['Καλό μήνα!', 'Good month! (said on the 1st)'],
        ['Καλή εβδομάδα!', 'Good week! (said on Mondays)'],
        ['Καλό ταξίδι!', 'Have a good trip!'],
        ['Καλή όρεξη!', 'Enjoy your meal!'],
        ['Στην υγειά μας!', 'To our health! (a toast)'],
        ['Καλή τύχη!', 'Good luck!'],
        ['Καληνύχτα!', 'Good night!']
      ] },
      { t: 'prose', html:
        '<p><b>Easter</b> (<span class="gr">το Πάσχα</span>) is the biggest festival of the year — bigger than Christmas. ' +
        'You will hear <span class="gr">Καλό Πάσχα</span> before and <span class="gr">Χριστός Ανέστη</span> after midnight on Saturday. ' +
        'The reply is <span class="gr">Αληθώς Ανέστη</span>. On 25 March Greeks celebrate Independence Day with parades; ' +
        'on 28 October they say <span class="gr">Χρόνια πολλά</span> for <span class="gr">το Όχι</span>.</p>' },
      { t: 'note', title: 'At the table.',
        html: 'Food is shared: plates go in the middle and everyone takes a little. Bread is never put upside down and never thrown away. ' +
        'If you are invited to a home, bring something for the table — a dessert, wine or flowers, but <b>not</b> white flowers or chrysanthemums, which are for funerals. ' +
        'Expect to be offered more than you can eat; a small second helping is polite. When you leave, say <span class="gr">Ευχαριστώ για τη φιλοξενία.</span>' },
      { t: 'table', title: 'Food words worth knowing', head: ['Greek', 'English'], rows: [
        ['ψωμί', 'bread'], ['τυρί', 'cheese'], ['ελιές', 'olives'], ['λάδι', 'oil'],
        ['ντομάτα', 'tomato'], ['αγγούρι', 'cucumber'], ['κρεμμύδι', 'onion'], ['σκόρδο', 'garlic'],
        ['αρνί', 'lamb'], ['κοτόπουλο', 'chicken'], ['ψάρι', 'fish'], ['θαλασσινά', 'seafood'],
        ['γλυκό', 'sweet, dessert'], ['νόστιμο', 'tasty'], ['χορτοφάγος', 'vegetarian']
      ] },
      { t: 'dialogue', title: 'Dinner at a Greek home', d: {
        id: 'd28', title: 'Dinner at a Greek home', gr: 'Δείπνο σε ελληνικό σπίτι', level: 'A1+',
        setting: 'Sarah is invited to dinner by her neighbour, Mrs Eleni.',
        lines: [
          { s: 'Ελένη', g: 'Σάρα, έλα μέσα! Καλώς ήρθες.', e: 'Sarah, come in! Welcome.' },
          { s: 'Σάρα', g: 'Ευχαριστώ πολύ. Σου έφερα ένα γλυκό.', e: 'Thank you very much. I brought you a dessert.' },
          { s: 'Ελένη', g: 'Πολύ ευγενικό! Κάθισε εδώ.', e: 'Very kind! Sit here.' },
          { s: 'Σάρα', g: 'Τι ωραία μυρωδιά!', e: 'What a lovely smell!' },
          { s: 'Ελένη', g: 'Είναι μουσακάς. Θέλεις λίγο κρασί;', e: 'It’s moussaka. Would you like a little wine?' },
          { s: 'Σάρα', g: 'Ναι, ευχαριστώ. Στην υγειά μας!', e: 'Yes, thank you. To our health!' },
          { s: 'Ελένη', g: 'Καλή όρεξη! Θέλεις κι άλλο;', e: 'Enjoy your meal! Would you like some more?' },
          { s: 'Σάρα', g: 'Λίγο ακόμα, είναι νόστιμο. Ευχαριστώ για τη φιλοξενία.', e: 'A little more, it’s delicious. Thank you for your hospitality.' }
        ]
      } },
      { t: 'quiz', title: 'Day 28 — check yourself', day: 28, items: [
        { type: 'choice', q: 'What do you say to someone on their name day?', options: ['Καληνύχτα!', 'Χρόνια πολλά!', 'Καλό ταξίδι!', 'Στην υγειά μας!'], a: 1 },
        { type: 'choice', q: '{{g:Καλή όρεξη!}} means…', options: ['Good luck!', 'Enjoy your meal!', 'Good night!', 'Cheers!'], a: 1 },
        { type: 'choice', q: 'Which flowers should you NOT bring to a Greek home?', options: ['roses', 'white flowers', 'sunflowers', 'any flowers'], a: 1 },
        { type: 'choice', q: 'The biggest Greek festival is…', options: ['Christmas', 'Easter', 'New Year', 'Carnival'], a: 1 },
        { type: 'choice', q: '{{g:χορτοφάγος}} means…', options: ['greedy', 'vegetarian', 'chef', 'sweet'], a: 1 }
      ] }
    ],
    homework: [
      'Learn the nine wishes and use one each day this week.',
      'Write a short invitation to a Greek friend for dinner.',
      'Find out which name day belongs to someone you know.'
    ]
  },

  {
    day: 29, week: 5, weekTheme: 'Culture and company', level: 'A2', minutes: '22 min',
    title: 'Opinions: I like, I prefer, I think', gr: 'Γνώμες: μου αρέσει, προτιμώ, νομίζω',
    goals: [
      'Say what you like and dislike',
      'Compare two things',
      'Give a simple opinion and disagree politely'
    ],
    sections: [
      { t: 'prose', html:
        '<p><b>μου αρέσει</b> literally means “it pleases me”. The thing is the subject, so the verb follows the <i>thing</i>, not you:</p>' +
        '<p><span class="gr">Μου αρέσει το κρασί.</span> I like wine. · <span class="gr">Μου αρέσουν τα νησιά.</span> I like the islands.</p>' +
        '<p>Singular thing → <span class="gr">αρέσει</span>. Plural thing → <span class="gr">αρέσουν</span>. The person changes the little word: ' +
        '<span class="gr">σου αρέσει;</span> do you like it? · <span class="gr">του αρέσει</span> he likes it · <span class="gr">μας αρέσει</span> we like it.</p>' },
      { t: 'table', title: 'Likes and opinions', head: ['Greek', 'English'], rows: [
        ['Μου αρέσει πολύ.', 'I like it very much.'],
        ['Δεν μου αρέσει καθόλου.', 'I don’t like it at all.'],
        ['Μου αρέσουν τα ψάρια.', 'I like fish.'],
        ['Προτιμώ το τσάι από τον καφέ.', 'I prefer tea to coffee.'],
        ['Νομίζω ότι είναι ωραία.', 'I think it is nice.'],
        ['Κατά τη γνώμη μου…', 'In my opinion…'],
        ['Έχεις δίκιο.', 'You are right.'],
        ['Δεν είμαι σίγουρος / σίγουρη.', 'I am not sure.'],
        ['Συμφωνώ απόλυτα.', 'I completely agree.']
      ] },
      { t: 'prose', html:
        '<p><b>Comparing.</b> <span class="gr">πιο</span> + adjective = more: <span class="gr">πιο μεγάλο</span> bigger, <span class="gr">πιο ωραίο</span> nicer. ' +
        'Than = <span class="gr">από</span>: <span class="gr">Η Αθήνα είναι πιο μεγάλη από την Αίγινα.</span> — Athens is bigger than Aegina.</p>' +
        '<p>Some are irregular and very common: <span class="gr">καλός → καλύτερος</span> (better), <span class="gr">κακός → χειρότερος</span> (worse), ' +
        '<span class="gr">μεγάλος → μεγαλύτερος</span> (bigger).</p>' },
      { t: 'dialogue', title: 'Which do you prefer?', d: {
        id: 'd29', title: 'Which do you prefer?', gr: 'Τι προτιμάς;', level: 'A2',
        setting: 'Two friends compare two islands.',
        lines: [
          { s: 'Νίκος', g: 'Σου αρέσει πιο πολύ η Αίγινα ή η Σαντορίνη;', e: 'Do you like Aegina or Santorini more?' },
          { s: 'Σάρα', g: 'Μου αρέσει πιο πολύ η Αίγινα. Είναι πιο ήσυχη.', e: 'I like Aegina more. It is quieter.' },
          { s: 'Νίκος', g: 'Ναι, αλλά η Σαντορίνη είναι πιο ωραία.', e: 'Yes, but Santorini is prettier.' },
          { s: 'Σάρα', g: 'Έχεις δίκιο, αλλά είναι και πιο ακριβή.', e: 'You are right, but it is also more expensive.' },
          { s: 'Νίκος', g: 'Συμφωνώ. Κατά τη γνώμη μου, η Αίγινα είναι καλύτερη για διακοπές.', e: 'I agree. In my opinion, Aegina is better for holidays.' }
        ]
      } },
      { t: 'note', title: 'That little word ότι.',
        html: '<span class="gr">Νομίζω ότι…</span>, <span class="gr">πιστεύω ότι…</span>, <span class="gr">ξέρω ότι…</span> — I think / believe / know that… ' +
        'It never changes. Just add a full sentence after it.' },
      { t: 'quiz', title: 'Day 29 — check yourself', day: 29, items: [
        { type: 'choice', q: '“I like the islands.”', options: ['Μου αρέσει τα νησιά.', 'Μου αρέσουν τα νησιά.', 'Αρέσω τα νησιά.', 'Μου αρέσει το νησί.'], a: 1 },
        { type: 'choice', q: '“I prefer tea to coffee.”', options: ['Προτιμώ το τσάι από τον καφέ.', 'Προτιμώ το τσάι με τον καφέ.', 'Μου αρέσει το τσάι.', 'Θέλω τσάι, όχι καφέ.'], a: 0 },
        { type: 'choice', q: 'Comparative of {{g:καλός}}?', options: ['πιο καλός', 'καλύτερος', 'καλότερος', 'καλίτερος'], a: 1 },
        { type: 'choice', q: '{{g:Έχεις δίκιο.}} means…', options: ['You are right.', 'You are wrong.', 'You have money.', 'You are late.'], a: 0 },
        { type: 'choice', q: '“In my opinion…”', options: ['Στη γνώμη μου…', 'Κατά τη γνώμη μου…', 'Με τη γνώμη μου…', 'Για γνώμη…'], a: 1 },
        { q: 'Write “I don’t like it at all.”', a: 'δεν μου αρέσει καθόλου', accept: ['δεν μου αρεσει καθολου'], say: 'Δεν μου αρέσει καθόλου.' }
      ] }

    ],
    homework: [
      'Write five sentences with μου αρέσει / μου αρέσουν.',
      'Compare two cities you know in Greek, using πιο and από.',
      'Listen to a Greek song and write down three words you recognise.'
    ]
  },

  {
    day: 30, week: 5, weekTheme: 'Culture and company', level: 'A1+', minutes: '40 min',
    title: 'Final test and what next', gr: 'Τελικό τεστ και συνέχεια',
    goals: [
      'Test everything from thirty days',
      'See exactly what to revise',
      'Plan your next month of Greek'
    ],
    sections: [
      { t: 'prose', html:
        '<p>This is the final check. Thirty questions, mixing alphabet, grammar, vocabulary and situations. ' +
        'Take it without notes; the result tells you which days to revisit. There is no pass mark — the point is the map it gives you.</p>' },
      { t: 'quiz', title: 'Final test — 30 questions', day: 30, items: [
        { type: 'choice', q: 'How many letters does the Greek alphabet have?', options: ['22', '24', '26', '28'], a: 1 },
        { type: 'choice', q: 'Which letter is always pronounced “th” as in <i>this</i>?', options: ['θ', 'δ', 'β', 'γ'], a: 1 },
        { type: 'choice', q: 'The accent (τόνος) shows…', options: ['a long vowel', 'the stressed syllable', 'a question', 'a capital letter'], a: 1 },
        { type: 'choice', q: '{{g:Καλησπέρα}} is said…', options: ['in the morning', 'in the afternoon and evening', 'at night only', 'when leaving'], a: 1 },
        { type: 'choice', q: '“My name is Sarah.”', options: ['Λέγομαι Σάρα.', 'Με λένε Σάρα.', 'Είμαι Σάρα.', 'all three'], a: 3 },
        { type: 'choice', q: '{{g:Είμαι από την Αγγλία.}} means…', options: ['I live in England.', 'I am from England.', 'I am going to England.', 'I am English.'], a: 1 },
        { type: 'choice', q: 'Which is feminine?', options: ['ο δρόμος', 'η θάλασσα', 'το βιβλίο', 'ο άνθρωπος'], a: 1 },
        { type: 'choice', q: 'Plural of {{g:το παιδί}}?', options: ['τα παιδιά', 'οι παιδοί', 'τα παιδής', 'οι παίδες'], a: 0 },
        { type: 'choice', q: '“I don’t speak Greek.”', options: ['Δεν μιλάω ελληνικά.', 'Δεν λέω ελληνικά.', 'Μιλάω ελληνικά;', 'Δεν ξέρω ελληνικά.'], a: 0 },
        { type: 'choice', q: '{{g:θέλω}} means…', options: ['I can', 'I want', 'I know', 'I must'], a: 1 },
        { type: 'choice', q: '{{g:μπορώ}} means…', options: ['I want', 'I can', 'I have', 'I go'], a: 1 },
        { type: 'choice', q: 'Correct question for “Do you have…?”', options: ['Έχεις…;', 'Έχω…;', 'Έχετε…; (to one friend)', 'Είσαι…;'], a: 0 },
        { type: 'choice', q: '{{g:δεν}} goes…', options: ['before the verb', 'after the verb', 'at the end', 'nowhere'], a: 0 },
        { type: 'choice', q: '“seven”', options: ['έξι', 'επτά', 'οκτώ', 'εννέα'], a: 1 },
        { type: 'choice', q: '“It is 8:30.”', options: ['Είναι οκτώ και μισή.', 'Είναι οκτώ παρά μισή.', 'Είναι μισή οκτώ.', 'Είναι οκτώ και τέταρτο.'], a: 0 },
        { type: 'choice', q: '{{g:χθες}} means…', options: ['today', 'tomorrow', 'yesterday', 'now'], a: 2 },
        { type: 'choice', q: '“I went to the market.”', options: ['Πηγαίνω στην αγορά.', 'Πήγα στην αγορά.', 'Θα πάω στην αγορά.', 'Είμαι στην αγορά.'], a: 1 },
        { type: 'choice', q: '“Tomorrow I will work.”', options: ['Αύριο δούλεψα.', 'Αύριο θα δουλέψω.', 'Αύριο δουλεύω πάντα.', 'Χθες δούλεψα.'], a: 1 },
        { type: 'choice', q: '{{g:το βιβλίο μου}} means…', options: ['my book', 'your book', 'his book', 'the book'], a: 0 },
        { type: 'choice', q: '{{g:πρέπει να}} expresses…', options: ['possibility', 'obligation', 'permission', 'past'], a: 1 },
        { type: 'choice', q: 'At a taverna, you ask for the bill with…', options: ['Τον λογαριασμό, παρακαλώ.', 'Το μενού, παρακαλώ.', 'Νερό, παρακαλώ.', 'Την πόρτα, παρακαλώ.'], a: 0 },
        { type: 'choice', q: '{{g:με τα πόδια}} means…', options: ['by bus', 'on foot', 'by car', 'by boat'], a: 1 },
        { type: 'choice', q: '“Where is the pharmacy?”', options: ['Πού είναι το φαρμακείο;', 'Τι είναι το φαρμακείο;', 'Πότε είναι το φαρμακείο;', 'Ποιος είναι ο φαρμακοποιός;'], a: 0 },
        { type: 'choice', q: '{{g:Με πονάει το κεφάλι μου.}} means…', options: ['My head hurts.', 'I hit my head.', 'My head is cold.', 'I have a hat.'], a: 0 },
        { type: 'choice', q: '“It is raining.”', options: ['Βρέχει.', 'Χιονίζει.', 'Κάνει ζέστη.', 'Φυσάει.'], a: 0 },
        { type: 'choice', q: '{{g:Καλή όρεξη!}} is said…', options: ['when leaving', 'before eating', 'when someone is ill', 'on a birthday'], a: 1 },
        { type: 'choice', q: 'Polite form of {{g:μιλάς}}?', options: ['μιλάτε', 'μιλάμε', 'μιλάνε', 'μιλάω'], a: 0 },
        { type: 'choice', q: '{{g:Χρόνια πολλά!}} is for…', options: ['name days and birthdays', 'funerals', 'new shops', 'only Easter'], a: 0 },
        { type: 'choice', q: '“I like the sea.”', options: ['Μου αρέσει η θάλασσα.', 'Μου αρέσουν η θάλασσα.', 'Αρέσω τη θάλασσα.', 'Θέλω θάλασσα.'], a: 0 },
        { type: 'choice', q: 'Which sentence is polite to a stranger?', options: ['Πού είναι το μουσείο;', 'Συγγνώμη, μπορείτε να μου πείτε πού είναι το μουσείο;', 'Μουσείο πού;', 'Δώσε μου το μουσείο.'], a: 1 }
      ] },
      { t: 'prose', html:
        '<p><b>Where you are now.</b> If you can do most of this test, you are at a solid A1 — you can introduce yourself, shop, order, ask directions, talk about your day, family and plans, and read simple signs.</p>' },
      { t: 'table', title: 'Your next month', head: ['Focus', 'What to do'], rows: [
        ['Vocabulary', '20 new words a day, always in a sentence, always aloud'],
        ['Listening', 'One Greek podcast episode a day; Easy Greek is a good start'],
        ['Speaking', 'Two 30-minute conversations a week; a tutor or a language partner'],
        ['Reading', 'Children’s books and simple news; underline, don’t translate'],
        ['Writing', 'A five-line diary entry every evening'],
        ['Grammar', 'The past tense in detail, then the subjunctive after να']
      ] },
      { t: 'note', title: 'The one habit that decides everything.',
        html: 'Twenty minutes every day beats three hours on Sunday, every time. Speak from day one, make mistakes loudly, and let Greeks correct you — ' +
        'they almost always will, kindly, and that correction is the lesson.' },
      { t: 'flash', title: 'Flashcards: survival Greek, one last time', items: [
        ['Γεια σας!', 'Hello!'], ['Καλημέρα σας.', 'Good morning.'],
        ['Ευχαριστώ πολύ.', 'Thank you very much.'], ['Συγνώμη.', 'Sorry / excuse me.'],
        ['Μιλάτε αγγλικά;', 'Do you speak English?'], ['Δεν καταλαβαίνω.', 'I don’t understand.'],
        ['Πόσο κάνει;', 'How much is it?'], ['Τον λογαριασμό, παρακαλώ.', 'The bill, please.'],
        ['Πού είναι η τουαλέτα;', 'Where is the toilet?'], ['Χρειάζομαι γιατρό.', 'I need a doctor.'],
        ['Βοήθεια!', 'Help!'], ['Τα λέμε!', 'See you!']
      ] }
    ],    homework: [
      'Write down every question you missed and the day that teaches it.',
      'Record yourself doing the Day 22 two-minute speech again and compare.',
      'Choose your podcast and your two weekly conversations now, today.'
    ]
  }

  ]);
})();
