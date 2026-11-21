/* Pinewood BLAST Adult Greek — lessons 6–12 */
(function () {
  var G = window.GREEK = window.GREEK || {};
  G.days = (G.days || []).concat([

  {
    day: 6, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '18 min',
    title: 'I am: introducing yourself', gr: 'Είμαι · Συστήνομαι',
    goals: [
      'Conjugate the verb είμαι (to be)',
      'Introduce yourself, say your name and where you are from',
      'Ask someone’s name politely and informally'
    ],
    sections: [
      { t: 'prose', html:
        '<p><span class="gr">Είμαι</span> means “I am” and it is the most useful verb in Greek. You will use it for your name, your nationality, your job, your mood and your location. Learn it by heart today; everything else can wait.</p>' },
      { t: 'conj', title: 'είμαι — to be (present)', rows: [
        ['εγώ', 'είμαι', 'I am'],
        ['εσύ', 'είσαι', 'you are (informal)'],
        ['αυτός / αυτή / αυτό', 'είναι', 'he / she / it is'],
        ['εμείς', 'είμαστε', 'we are'],
        ['εσείς', 'είστε', 'you are (plural / polite)'],
        ['αυτοί / αυτές / αυτά', 'είναι', 'they are']
      ] },
      { t: 'tip', title: 'Two things English speakers get wrong.',
        html: 'Greek has <b>no word for “it” as a subject</b> and no “do” in questions: <span class="gr">Είσαι από την Αγγλία;</span> is simply “Are you from England?”. And Greeks usually put the article before a first name: <span class="gr">Είμαι ο Γιάννης</span> — literally “I am the John”.' },
      { t: 'phrases', title: 'Introducing yourself', items: [
        ['Είμαι η Σάρα.', 'I am Sarah.', 'use ο for a man, η for a woman'],
        ['Με λένε Σάρα.', 'My name is Sarah.', 'literally “they call me Sarah”'],
        ['Πώς σε λένε;', 'What is your name? (informal)'], ['Πώς σας λένε;', 'What is your name? (polite)'],
        ['Χαίρω πολύ.', 'Nice to meet you.', 'literally “I rejoice greatly”'],
        ['Από πού είσαι;', 'Where are you from? (informal)'], ['Από πού είστε;', 'Where are you from? (polite)'],
        ['Είμαι από την Αγγλία.', 'I am from England.'], ['Μένω στην Αθήνα.', 'I live in Athens.', 'μένω = I live, you learn it on Day 15']
      ] },
      { t: 'table', title: 'Nationalities (male / female)', head: ['Country', 'He is…', 'She is…'], rows: [
        ['Αγγλία · England', 'Άγγλος', 'Αγγλίδα'],
        ['Αμερική · America', 'Αμερικανός', 'Αμερικανίδα'],
        ['Γερμανία · Germany', 'Γερμανός', 'Γερμανίδα'],
        ['Γαλλία · France', 'Γάλλος', 'Γαλλίδα'],
        ['Ιταλία · Italy', 'Ιταλός', 'Ιταλίδα'],
        ['Ισπανία · Spain', 'Ισπανός', 'Ισπανίδα'],
        ['Ολλανδία · Netherlands', 'Ολλανδός', 'Ολλανδέζα'],
        ['Ελλάδα · Greece', 'Έλληνας', 'Ελληνίδα']
      ] },
      { t: 'table', title: 'Jobs you will need', head: ['Greek', 'English', 'Note'], rows: [
        ['δάσκαλος / δασκάλα', 'teacher (primary)', 'δάσκαλος is also used generally'],
        ['καθηγητής / καθηγήτρια', 'teacher (secondary), professor', ''],
        ['γιατρός', 'doctor', 'same form for men and women'],
        ['μηχανικός', 'engineer', 'same form for men and women'],
        ['νοσηλευτής / νοσηλεύτρια', 'nurse', ''],
        ['σερβιτόρος / σερβιτόρα', 'waiter / waitress', ''],
        ['φοιτητής / φοιτήτρια', 'student (university)', ''],
        ['συνταξιούχος', 'retired (person)', 'same form for both']
      ] },
      { t: 'dialogue', title: 'First day at the language school', d: {
        id: 'd6', title: 'First day at the language school', gr: 'Πρώτη μέρα στο σχολείο', level: 'A1',
        setting: 'A small classroom in Aegina town. Two adult students meet before the lesson.',
        lines: [
          { s: 'Νίκος', g: 'Γεια σου! Είμαι ο Νίκος. Πώς σε λένε;', e: 'Hi! I am Nikos. What is your name?' },
          { s: 'Σάρα', g: 'Με λένε Σάρα. Χαίρω πολύ.', e: 'My name is Sarah. Nice to meet you.' },
          { s: 'Νίκος', g: 'Από πού είσαι, Σάρα;', e: 'Where are you from, Sarah?' },
          { s: 'Σάρα', g: 'Είμαι από την Αγγλία, από το Λονδίνο. Εσύ;', e: 'I am from England, from London. And you?' },
          { s: 'Νίκος', g: 'Είμαι από την Αθήνα, αλλά μένω στην Αίγινα.', e: 'I am from Athens, but I live on Aegina.' },
          { s: 'Σάρα', g: 'Τι δουλειά κάνεις;', e: 'What do you do for a living?' },
          { s: 'Νίκος', g: 'Είμαι δάσκαλος. Και εσύ;', e: 'I am a teacher. And you?' },
          { s: 'Σάρα', g: 'Είμαι νοσηλεύτρια. Δεν είμαι Ελληνίδα, αλλά μιλάω λίγα ελληνικά!', e: 'I am a nurse. I am not Greek, but I speak a little Greek!' }
        ]
      } },
      { t: 'quiz', title: 'Day 6 — check yourself', day: 6, items: [
        { type: 'choice', q: '{{g:Εμείς ___ από την Ελλάδα.}}', options: ['είμαι', 'είσαι', 'είμαστε', 'είναι'], a: 2 },
        { type: 'choice', q: 'A woman says where she is from. Which is right?', options: ['Είμαι Άγγλος.', 'Είμαι Αγγλίδα.', 'Είμαι Αγγλία.', 'Είμαι από Αγγλίδα.'], a: 1 },
        { type: 'choice', q: '{{g:Χαίρω πολύ}} means…', options: ['I am very well', 'Nice to meet you', 'Thank you very much', 'See you soon'], a: 1 },
        { type: 'choice', q: 'How do you ask a 70-year-old stranger their name?', options: ['Πώς σε λένε;', 'Πώς σας λένε;', 'Πώς είσαι;', 'Τι κάνεις;'], a: 1 },
        { q: 'Write “I am from England” (a woman speaking).', a: 'είμαι από την αγγλία', accept: ['είμαι απο την αγγλία', 'ειμαι απο την αγγλια'], say: 'Είμαι από την Αγγλία.' },
        { q: 'Complete: Εσύ ___ δάσκαλος;', a: 'είσαι', accept: ['εισαι'], say: 'Εσύ είσαι δάσκαλος;' }
      ] }
    ],
    homework: [
      'Write five sentences about yourself with είμαι: name, nationality, job, city, mood.',
      'Say the six forms of είμαι out loud until you can do it without looking.',
      'Introduce yourself aloud in 30 seconds, as if to a new neighbour.'
    ]
  },

  {
    day: 7, week: 1, weekTheme: 'Sounds & first words', level: 'A1', minutes: '18 min',
    title: 'Numbers, days and prices', gr: 'Αριθμοί, ημέρες, τιμές',
    goals: [
      'Count from 0 to 10 and use the numbers in real situations',
      'Say the days of the week and understand opening hours',
      'Ask about age, price and phone numbers'
    ],
    sections: [
      { t: 'numbers', title: '0 – 10, with audio', items: [
        ['0', 'μηδέν', 'midén'], ['1', 'ένα', 'éna'], ['2', 'δύο', 'dýo'], ['3', 'τρία', 'tría'],
        ['4', 'τέσσερα', 'téssera'], ['5', 'πέντε', 'pénte'], ['6', 'έξι', 'éxi'], ['7', 'επτά', 'eptá'],
        ['8', 'οκτώ', 'októ'], ['9', 'εννέα', 'ennéa'], ['10', 'δέκα', 'déka']
      ] },
      { t: 'note', title: 'Why three and four have two forms.',
        html: 'For counting you say <span class="gr">τρία</span> and <span class="gr">τέσσερα</span>. Before a masculine noun you say <span class="gr">τρεις</span> and <span class="gr">τέσσερις</span>: <span class="gr">τρεις καφέδες</span> (three coffees). ' +
        'You will also hear <span class="gr">εφτά</span> for 7 and <span class="gr">οχτώ</span> for 8 — both are correct.' },
      { t: 'table', title: 'Useful bigger numbers', head: ['Number', 'Greek', 'Example'], rows: [
        ['11', 'έντεκα', 'έντεκα ευρώ'],
        ['12', 'δώδεκα', 'δώδεκα η ώρα · twelve o’clock'],
        ['20', 'είκοσι', 'είκοσι λεπτά · twenty minutes'],
        ['30', 'τριάντα', 'τριάντα χρονών · thirty years old'],
        ['50', 'πενήντα', ''],
        ['100', 'εκατό', 'εκατό ευρώ'],
        ['1000', 'χίλια', '']
      ] },
      { t: 'table', title: 'The days of the week', head: ['Greek', 'English', 'Note'], rows: [
        ['Δευτέρα', 'Monday', ''],
        ['Τρίτη', 'Tuesday', ''],
        ['Τετάρτη', 'Wednesday', ''],
        ['Πέμπτη', 'Thursday', ''],
        ['Παρασκευή', 'Friday', ''],
        ['Σάββατο', 'Saturday', 'from the Hebrew sabbath'],
        ['Κυριακή', 'Sunday', 'from Κύριος, the Lord']
      ] },
      { t: 'phrases', title: 'Numbers in real life', items: [
        ['Πόσο κάνει;', 'How much does it cost?'], ['Κάνει πέντε ευρώ.', 'It costs five euros.'],
        ['Πόσων χρονών είσαι;', 'How old are you? (informal)'], ['Είμαι σαράντα χρονών.', 'I am forty years old.'],
        ['Ποιο είναι το τηλέφωνό σου;', 'What is your phone number?'],
        ['Τι ώρα είναι;', 'What time is it?'], ['Είναι τρεις η ώρα.', 'It is three o’clock.'],
        ['Τη Δευτέρα δουλεύω.', 'On Monday I work.', 'the article changes to τη for days']
      ] },
      { t: 'quiz', title: 'Day 7 — check yourself', day: 7, items: [
        { type: 'choice', q: '{{g:επτά}} is…', options: ['6', '7', '8', '9'], a: 1 },
        { type: 'choice', q: 'Which day is {{g:Πέμπτη}}?', options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], a: 2 },
        { type: 'choice', q: '“It costs twelve euros.”', options: ['Κάνει δώδεκα ευρώ.', 'Κάνει είκοσι ευρώ.', 'Κάνει δύο ευρώ.', 'Κάνει δέκα ευρώ.'], a: 0 },
        { type: 'choice', q: 'You want three coffees. Which is correct?', options: ['τρία καφέδες', 'τρεις καφέδες', 'τρεις καφές', 'τρία καφές'], a: 1 },
        { q: 'Write the number 5 in Greek letters.', a: 'πέντε', accept: ['πεντε'], say: 'πέντε' },
        { q: 'Write “Monday”.', a: 'δευτέρα', accept: ['δευτερα'], say: 'Δευτέρα' },
        { q: 'Write “How much does it cost?”', a: 'πόσο κάνει', accept: ['ποσο κανει', 'πόσο κάνει;'], say: 'Πόσο κάνει;' }
      ] }
    ],
    homework: [
      'Count to ten aloud five times, forwards and backwards.',
      'Say your age, your phone number and today’s day in Greek.',
      'When you next pay for something, say the price in Greek in your head.'
    ]
  },

  {
    day: 8, week: 2, weekTheme: 'People & the present tense', level: 'A1', minutes: '20 min',
    title: 'Portraits: describing people', gr: 'Πορτρέτα · Περιγράφω ανθρώπους',
    goals: [
      'Use adjectives that agree with the person’s gender',
      'Describe hair, eyes, height and character',
      'Play the true-or-false portrait game from the original lesson'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Greek adjectives change their ending to match the noun they describe. Most follow one of two patterns: <b>-ος / -η / -ο</b> (ψηλός, ψηλή, ψηλό) or <b>-ος / -α / -ο</b> (μεγάλος, μεγάλη, μεγάλο). ' +
        'For a man use the first form, for a woman the second: <span class="gr">Ο Νίκος είναι ψηλός. Η Μαρία είναι ψηλή.</span></p>' },
      { t: 'table', title: 'Appearance and character', head: ['Masculine', 'Feminine', 'Meaning'], rows: [
        ['ψηλός', 'ψηλή', 'tall'],
        ['κοντός', 'κοντή', 'short (height)'],
        ['αδύνατος', 'αδύνατη', 'slim, thin'],
        ['νέος', 'νέα', 'young'],
        ['μεγάλος', 'μεγάλη', 'big, older'],
        ['μικρός', 'μικρή', 'small, younger'],
        ['όμορφος', 'όμορφη', 'beautiful, handsome'],
        ['έξυπνος', 'έξυπνη', 'clever'],
        ['ευγενικός', 'ευγενική', 'polite, kind'],
        ['ήσυχος', 'ήσυχη', 'quiet, calm'],
        ['κοινωνικός', 'κοινωνική', 'sociable'],
        ['κουρασμένος', 'κουρασμένη', 'tired'],
        ['χαρούμενος', 'χαρούμενη', 'happy'],
        ['θυμωμένος', 'θυμωμένη', 'angry']
      ] },
      { t: 'phrases', title: 'Hair and eyes with έχω', items: [
        ['Έχω μαύρα μαλλιά.', 'I have black hair.', 'μαλλιά is plural in Greek'],
        ['Έχω γαλάζια μάτια.', 'I have blue eyes.'], ['Έχει γένια.', 'He has a beard.'],
        ['Η Μαρία έχει καστανά μαλλιά.', 'Maria has brown hair.'],
        ['Ο Νίκος φοράει γυαλιά.', 'Nikos wears glasses.'],
        ['Είναι ψηλός και αδύνατος.', 'He is tall and slim.'],
        ['Είναι πολύ ευγενική.', 'She is very polite.']
      ] },
      { t: 'note', title: 'Portrait game (from Lesson 1 of the course).',
        html: 'Look at a photo of a person and say three sentences in Greek. Then say one false sentence: ' +
        '<span class="gr">Η Άννα είναι ψηλή. Έχει μαύρα μαλλιά. Είναι δασκάλα. Είναι θυμωμένη.</span> — which one is the lie? ' +
        'Do this with a friend, or write it for yourself and check the next day.' },
      { t: 'dialogue', title: 'Describing a new colleague', d: {
        id: 'd8', title: 'Describing a new colleague', gr: 'Περιγράφω μια νέα συνάδελφο', level: 'A1',
        setting: 'Two friends look at a photo from the office party.',
        lines: [
          { s: 'Ρένα', g: 'Ποια είναι αυτή;', e: 'Who is that (woman)?' },
          { s: 'Πέτρος', g: 'Είναι η καινούρια συνάδελφος, η Έλενα.', e: 'She is the new colleague, Elena.' },
          { s: 'Ρένα', g: 'Πώς είναι;', e: 'What is she like?' },
          { s: 'Πέτρος', g: 'Είναι ψηλή, έχει καστανά μαλλιά και γαλάζια μάτια.', e: 'She is tall, she has brown hair and blue eyes.' },
          { s: 'Ρένα', g: 'Είναι κοινωνική;', e: 'Is she sociable?' },
          { s: 'Πέτρος', g: 'Πολύ! Μιλάει με όλους και είναι πάντα χαρούμενη.', e: 'Very! She talks to everyone and is always cheerful.' },
          { s: 'Ρένα', g: 'Και ο άντρας δίπλα της;', e: 'And the man next to her?' },
          { s: 'Πέτρος', g: 'Α, αυτός είναι ο αδελφός μου. Είναι κοντός και πολύ ήσυχος.', e: 'Ah, that is my brother. He is short and very quiet.' }
        ]
      } },
      { t: 'quiz', title: 'Day 8 — portraits: true or false?', day: 8, items: [
        { type: 'choice', q: '“Maria is tall.”', options: ['Η Μαρία είναι ψηλός.', 'Η Μαρία είναι ψηλή.', 'Η Μαρία είναι ψηλό.', 'Η Μαρία είναι ψηλά.'], a: 1 },
        { type: 'choice', q: '{{g:Έχω γαλάζια μάτια.}} means…', options: ['I have blue eyes.', 'I have black hair.', 'I have brown eyes.', 'I have grey hair.'], a: 0 },
        { type: 'choice', q: 'Which word means “tired”?', options: ['χαρούμενος', 'θυμωμένος', 'κουρασμένος', 'ήσυχος'], a: 2 },
        { type: 'choice', q: 'A man is sociable. Which is right?', options: ['Είναι κοινωνική.', 'Είναι κοινωνικός.', 'Είναι κοινωνικό.', 'Είναι κοινωνικές.'], a: 1 },
        { q: 'Write “He is short.”', a: 'είναι κοντός', accept: ['ειναι κοντος'], say: 'Είναι κοντός.' },
        { q: 'Write “I have black hair.”', a: 'έχω μαύρα μαλλιά', accept: ['εχω μαυρα μαλλια'], say: 'Έχω μαύρα μαλλιά.' }
      ] }
    ],
    homework: [
      'Describe three people you know in five Greek sentences each.',
      'Write three true sentences and one false one about a photo; test yourself tomorrow.',
      'Learn the ten adjectives you are most likely to use about yourself.'
    ]
  },

  {
    day: 9, week: 2, weekTheme: 'People & the present tense', level: 'A1', minutes: '20 min',
    title: 'One island, two islands: article, gender, plural', gr: 'Άρθρα, γένος, πληθυντικός',
    goals: [
      'Choose ο, η or το for a new word',
      'Form the plural of nouns and articles',
      'Use ένας, μία, ένα correctly'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Every Greek noun has a gender and carries an article: <b>ο</b> (masculine), <b>η</b> (feminine), <b>το</b> (neuter). ' +
        'Learn each noun with its article from day one — <span class="gr">ο δρόμος</span>, <span class="gr">η θάλασσα</span>, <span class="gr">το νησί</span> — because the article tells you how the word will change everywhere else in the sentence.</p>' },
      { t: 'table', title: 'Endings that give the gender away', head: ['Gender', 'Typical ending', 'Examples'], rows: [
        ['Masculine · ο', '-ος, -ης, -ας, -ές, -ούς', 'ο δρόμος, ο ναύτης, ο πατέρας, ο καφές, ο παππούς'],
        ['Feminine · η', '-α, -η, -ου', 'η θάλασσα, η ζωή, η αγορά, η νοσοκόμα'],
        ['Neuter · το', '-ο, -ι, -μα, -ος', 'το νησί, το σπίτι, το όνομα, το λάθος']
      ] },
      { t: 'note', title: 'The -ος trap.',
        html: 'Words ending in -ος are <b>usually</b> masculine, but a handful of common ones are feminine (<span class="gr">η είσοδος</span>, entrance; <span class="gr">η έξοδος</span>, exit; <span class="gr">η μέθοδος</span>, method) and a few are neuter (<span class="gr">το λάθος</span>, mistake; <span class="gr">το μέρος</span>, place). ' +
        'Always learn the article together with the noun.' },
      { t: 'table', title: 'Singular → plural', head: ['Singular', 'Plural', 'Rule'], rows: [
        ['ο δρόμος', 'οι δρόμοι', '-ος → -οι'],
        ['ο ναύτης', 'οι ναύτες', '-ης → -ες'],
        ['ο πατέρας', 'οι πατεράδες', '-ας → -άδες'],
        ['η θάλασσα', 'οι θάλασσες', '-α → -ες'],
        ['η ζωή', 'οι ζωές', '-ή → -ές'],
        ['το νησί', 'τα νησιά', '-ί → -ιά'],
        ['το σπίτι', 'τα σπίτια', '-ι → -ια'],
        ['το όνομα', 'τα ονόματα', '-μα → -ματα']
      ] },
      { t: 'note', title: 'Indefinite article: a / an.',
        html: '<span class="gr">ένας</span> (masculine), <span class="gr">μία</span> or <span class="gr">μια</span> (feminine), <span class="gr">ένα</span> (neuter): ' +
        '<span class="gr">ένας δρόμος, μία θάλασσα, ένα νησί</span>. There is no plural of “a”; use the definite article or no article: <span class="gr">έχω σκύλο</span> — I have a dog (in general).' },
      { t: 'phrases', title: 'From the geography step of Lesson 1', items: [
        ['Η Αίγινα είναι ένα νησί.', 'Aegina is an island.'],
        ['Η Ελλάδα έχει πολλά νησιά.', 'Greece has many islands.'],
        ['Το Αιγαίο είναι μια θάλασσα.', 'The Aegean is a sea.'],
        ['Η Αθήνα είναι μια μεγάλη πόλη.', 'Athens is a big city.'],
        ['Ο Πειραιάς είναι ένα λιμάνι.', 'Piraeus is a port.']
      ] },
      { t: 'quiz', title: 'Day 9 — check yourself', day: 9, items: [
        { type: 'choice', q: 'Which article goes with {{g:θάλασσα}}?', options: ['ο', 'η', 'το', 'οι'], a: 1 },
        { type: 'choice', q: 'Plural of {{g:το σπίτι}}?', options: ['οι σπίτοι', 'τα σπίτια', 'τα σπίτι', 'οι σπίτια'], a: 1 },
        { type: 'choice', q: 'Plural of {{g:ο δρόμος}}?', options: ['οι δρόμοι', 'οι δρόμοι', 'τα δρόμια', 'οι δρόμους'], a: 0 },
        { type: 'choice', q: '“Greece has many islands.”', options: ['Η Ελλάδα έχει πολλά νησιά.', 'Η Ελλάδα έχω πολλά νησιά.', 'Η Ελλάδα έχει πολλές νησιά.', 'Ο Ελλάδα έχει πολλά νησιά.'], a: 0 },
        { q: 'Write “a sea” with the indefinite article.', a: 'μία θάλασσα', accept: ['μια θάλασσα', 'μια θαλασσα', 'μία θαλασσα'], say: 'Μία θάλασσα.' },
        { q: 'Plural of {{g:το όνομα}}?', a: 'τα ονόματα', accept: ['τα ονοματα'], say: 'Τα ονόματα.' }
      ] }
    ],
    homework: [
      'Walk around your home and name ten objects with their article (ο/η/το).',
      'Take five nouns you know and say their plural aloud.',
      'Write “Greece is a country. Aegina is an island. Athens is a city.” in Greek.'
    ]
  },

  {
    day: 10, week: 2, weekTheme: 'People & the present tense', level: 'A1', minutes: '25 min',
    title: 'The present tense, group A: -ω verbs', gr: 'Ενεστώτας · Ρήματα σε -ω',
    goals: [
      'See the pattern of the biggest verb group',
      'Conjugate μιλάω, δουλεύω and μένω',
      'Make negative sentences with δεν'
    ],
    sections: [
      { t: 'prose', html:
        '<p>Most Greek verbs in the present tense end in <b>-ω</b> in the “I” form. Take off the -ω and add a different ending for each person. ' +
        'The endings are the same for almost every verb in this group, so once you know one verb you know the shape of hundreds.</p>' },
      { t: 'conj', title: 'δουλεύω — to work', rows: [
        ['εγώ', 'δουλεύω', 'I work / I am working'],
        ['εσύ', 'δουλεύεις', 'you work'],
        ['αυτός / αυτή / αυτό', 'δουλεύει', 'he / she / it works'],
        ['εμείς', 'δουλεύουμε', 'we work'],
        ['εσείς', 'δουλεύετε', 'you work (plural / polite)'],
        ['αυτοί / αυτές / αυτά', 'δουλεύουν', 'they work']
      ] },
      { t: 'table', title: 'The endings to memorise', head: ['Person', 'Ending', 'Example (μένω, to live)'], rows: [
        ['εγώ', '-ω', 'μένω'],
        ['εσύ', '-εις', 'μένεις'],
        ['αυτός / αυτή', '-ει', 'μένει'],
        ['εμείς', '-ουμε', 'μένουμε'],
        ['εσείς', '-ετε', 'μένετε'],
        ['αυτοί', '-ουν', 'μένουν']
      ] },
      { t: 'conj', title: 'μιλάω — to speak', note: 'μιλάω and μιλώ are both correct; the -άω form is more common in everyday speech.', rows: [
        ['εγώ', 'μιλάω / μιλώ', 'I speak'],
        ['εσύ', 'μιλάς', 'you speak'],
        ['αυτός / αυτή', 'μιλάει / μιλά', 'he / she speaks'],
        ['εμείς', 'μιλάμε', 'we speak'],
        ['εσείς', 'μιλάτε', 'you speak'],
        ['αυτοί', 'μιλάνε / μιλούν', 'they speak']
      ] },
      { t: 'note', title: 'Negation: δεν goes before the verb.',
        html: '<span class="gr">Δεν δουλεύω σήμερα.</span> — I am not working today. <span class="gr">Δεν μιλάω γαλλικά.</span> — I do not speak French. ' +
        'There is no “do not”: just <b>δεν</b> + verb. Before a vowel δεν keeps its ν: <span class="gr">δεν είμαι</span>.' },
      { t: 'phrases', title: 'Everyday sentences with -ω verbs', items: [
        ['Δουλεύω σε ένα σχολείο.', 'I work at a school.'],
        ['Μένω στην Αίγινα.', 'I live on Aegina.'],
        ['Μιλάω λίγα ελληνικά.', 'I speak a little Greek.'],
        ['Μιλάτε αγγλικά;', 'Do you speak English? (polite)'],
        ['Δεν καταλαβαίνω.', 'I don’t understand.', 'καταλαβαίνω = I understand'],
        ['Τι δουλειά κάνεις;', 'What do you do?'], ['Πού μένεις;', 'Where do you live?']
      ] },
      { t: 'quiz', title: 'Day 10 — check yourself', day: 10, items: [
        { type: 'choice', q: '{{g:Εσύ ___ στην Αθήνα.}}', options: ['μένω', 'μένεις', 'μένει', 'μένουμε'], a: 1 },
        { type: 'choice', q: '{{g:Εμείς ___ αγγλικά.}}', options: ['μιλάς', 'μιλάει', 'μιλάμε', 'μιλάνε'], a: 2 },
        { type: 'choice', q: '“They work.”', options: ['δουλεύω', 'δουλεύετε', 'δουλεύουν', 'δουλεύει'], a: 2 },
        { type: 'choice', q: '“I do not speak Greek.”', options: ['Μιλάω δεν ελληνικά.', 'Δεν μιλάω ελληνικά.', 'Δεν μιλάς ελληνικά.', 'Δεν μιλάω ελληνικός.'], a: 1 },
        { q: 'Conjugate: εσείς ___ (δουλεύω).', a: 'δουλεύετε', accept: ['δουλευετε'], say: 'Εσείς δουλεύετε.' },
        { q: 'Write “I live in Athens.”', a: 'μένω στην αθήνα', accept: ['μενω στην αθηνα', 'μένω στην Αθήνα'], say: 'Μένω στην Αθήνα.' }
      ] }
    ],
    homework: [
      'Write the full present tense of μένω and μιλάω from memory.',
      'Say five true sentences about yourself with -ω verbs.',
      'Make each of those five sentences negative with δεν.'
    ]
  },

  {
    day: 11, week: 2, weekTheme: 'People & the present tense', level: 'A1', minutes: '22 min',
    title: 'Group B verbs: θέλω, μπορώ, ξέρω', gr: 'Ρήματα σε -άω και ανώμαλα',
    goals: [
      'Conjugate the -άω sub-group (αγαπάω, μπορώ)',
      'Use θέλω, μπορώ and ξέρω in real requests',
      'Say what you can and cannot do'
    ],
    sections: [
      { t: 'prose', html:
        '<p>A second large group of verbs ends in <b>-άω</b> or <b>-ώ</b> in the “I” form. They behave almost like the -ω verbs, but the endings are shorter: ' +
        '<span class="gr">μιλάω → μιλάς, μιλάει, μιλάμε, μιλάτε, μιλάνε</span>. Learn three very common ones today; you will meet the rest as they come.</p>' },
      { t: 'conj', title: 'θέλω — to want', rows: [
        ['εγώ', 'θέλω', 'I want'],
        ['εσύ', 'θέλεις', 'you want'],
        ['αυτός / αυτή', 'θέλει', 'he / she wants'],
        ['εμείς', 'θέλουμε', 'we want'],
        ['εσείς', 'θέλετε', 'you want'],
        ['αυτοί', 'θέλουν', 'they want']
      ] },
      { t: 'conj', title: 'μπορώ — to be able to, can', rows: [
        ['εγώ', 'μπορώ', 'I can'],
        ['εσύ', 'μπορείς', 'you can'],
        ['αυτός / αυτή', 'μπορεί', 'he / she can'],
        ['εμείς', 'μπορούμε', 'we can'],
        ['εσείς', 'μπορείτε', 'you can'],
        ['αυτοί', 'μπορούν', 'they can']
      ] },
      { t: 'conj', title: 'ξέρω — to know', rows: [
        ['εγώ', 'ξέρω', 'I know'],
        ['εσύ', 'ξέρεις', 'you know'],
        ['αυτός / αυτή', 'ξέρει', 'he / she knows'],
        ['εμείς', 'ξέρουμε', 'we know'],
        ['εσείς', 'ξέρετε', 'you know'],
        ['αυτοί', 'ξέρουν', 'they know']
      ] },
      { t: 'note', title: 'Two verbs, one sentence.',
        html: 'After θέλω, μπορώ and ξέρω you can put a second verb in the same form as “I”: <span class="gr">Θέλω να μάθω ελληνικά</span> — I want to learn Greek. ' +
        '<span class="gr">Μπορώ να μιλήσω λίγο;</span> — Can I speak a little? The little word <b>να</b> links the two verbs. You will use this pattern constantly.' },
      { t: 'phrases', title: 'Requests you will really use', items: [
        ['Θέλω έναν καφέ, παρακαλώ.', 'I would like a coffee, please.'],
        ['Θέλετε νερό;', 'Would you like water? (polite)'],
        ['Μπορώ να πληρώσω με κάρτα;', 'Can I pay by card?'],
        ['Μπορείτε να μιλάτε πιο αργά;', 'Could you speak more slowly?'],
        ['Δεν μπορώ σήμερα.', 'I can’t today.'],
        ['Ξέρω λίγα ελληνικά.', 'I know a little Greek.'],
        ['Δεν ξέρω.', 'I don’t know.', 'the most useful sentence in any language']
      ] },
      { t: 'quiz', title: 'Day 11 — check yourself', day: 11, items: [
        { type: 'choice', q: '{{g:Εσύ ___ να έρθεις;}}', options: ['μπορώ', 'μπορείς', 'μπορεί', 'μπορούν'], a: 1 },
        { type: 'choice', q: '“We want water.”', options: ['θέλω νερό', 'θέλετε νερό', 'θέλουμε νερό', 'θέλουν νερό'], a: 2 },
        { type: 'choice', q: '{{g:Δεν ξέρω.}} means…', options: ['I don’t want.', 'I don’t know.', 'I can’t.', 'I don’t live here.'], a: 1 },
        { type: 'choice', q: 'Which is the polite way to ask someone to repeat?', options: ['Τι;', 'Μπορείτε να το πείτε ξανά;', 'Δεν ξέρω.', 'Πώς σε λένε;'], a: 1 },
        { q: 'Write “I can” (first person of μπορώ).', a: 'μπορώ', accept: ['μπορω'], say: 'Μπορώ.' },
        { q: 'Complete: Θέλω ___ μάθω ελληνικά. (the linking word)', a: 'να', say: 'Θέλω να μάθω ελληνικά.' }
      ] }

    ],
    homework: [
      'Write five things you want and five things you can do, using θέλω and μπορώ + να.',
      'Practise “Δεν ξέρω” and “Μπορείτε να μιλάτε πιο αργά;” aloud ten times each.',
      'Order a coffee out loud in Greek, even if only to yourself.'
    ]
  },

  {
    day: 12, week: 2, weekTheme: 'People & the present tense', level: 'A1', minutes: '25 min',
    title: 'Week 2 review: questions and possessives', gr: 'Επανάληψη 2 · Ερωτήσεις και κτητικά',
    goals: [
      'Ask yes/no and wh- questions correctly',
      'Use μου, σου, του, της, μας, σας, τους',
      'Check everything from days 6–11'
    ],
    sections: [
      { t: 'note', title: 'Yes/no questions need no extra word.',
        html: 'Just raise your voice at the end: <span class="gr">Μιλάς ελληνικά;</span> — Do you speak Greek? <span class="gr">Είσαι από την Αγγλία;</span> — Are you from England? ' +
        'For a polite answer use <span class="gr">Ναι</span> (yes) or <span class="gr">Όχι</span> (no). Greeks often answer a negative question with <span class="gr">Μάλιστα</span> — indeed.' },
      { t: 'table', title: 'Question words', head: ['Greek', 'English', 'Example'], rows: [
        ['τι', 'what', 'Τι κάνεις; · How are you? (lit. what do you do?)'],
        ['ποιος / ποια / ποιο', 'who, which', 'Ποιος είναι; · Who is it?'],
        ['πού', 'where', 'Πού μένεις; · Where do you live?'],
        ['πότε', 'when', 'Πότε φεύγεις; · When are you leaving?'],
        ['γιατί', 'why', 'Γιατί μαθαίνεις ελληνικά;'],
        ['πώς', 'how', 'Πώς είσαι; · How are you?'],
        ['πόσο', 'how much', 'Πόσο κάνει;'],
        ['πόσων', 'how many (years)', 'Πόσων χρονών είσαι;']
      ] },
      { t: 'table', title: 'Possessives go after the noun', head: ['Person', 'Word', 'Example'], rows: [
        ['my', 'μου', 'το σπίτι μου · my house'],
        ['your (informal)', 'σου', 'το όνομά σου · your name'],
        ['his / her / its', 'του / της', 'η γυναίκα του · his wife'],
        ['our', 'μας', 'η δουλειά μας · our job'],
        ['your (plural / polite)', 'σας', 'το τηλέφωνό σας'],
        ['their', 'τους', 'τα παιδιά τους · their children']
      ] },
      { t: 'phrases', title: 'Small talk sentences built from week 2', items: [
        ['Πώς είσαι σήμερα;', 'How are you today?'], ['Είμαι καλά, ευχαριστώ.', 'I am well, thank you.'],
        ['Πού δουλεύεις;', 'Where do you work?'], ['Δουλεύω σε ένα γραφείο.', 'I work in an office.'],
        ['Μιλάς ελληνικά;', 'Do you speak Greek?'], ['Μιλάω λίγα, αλλά μαθαίνω.', 'I speak a little, but I am learning.'],
        ['Ποια είναι η δουλειά σου;', 'What is your job?']
      ] },
      { t: 'quiz', title: 'Day 12 — week 2 review', day: 12, items: [
        { type: 'choice', q: '{{g:Πού}} means…', options: ['when', 'where', 'why', 'who'], a: 1 },
        { type: 'choice', q: '“my name”', options: ['μου όνομα', 'το όνομα μου', 'το όνομά μου', 'όνομα το μου'], a: 2 },
        { type: 'choice', q: '{{g:Μιλάς αγγλικά;}} is…', options: ['You speak English.', 'Do you speak English?', 'I speak English.', 'Speak English!'], a: 1 },
        { type: 'choice', q: '“his wife”', options: ['η γυναίκα μου', 'η γυναίκα σου', 'η γυναίκα του', 'η γυναίκα τους'], a: 2 },
        { q: 'Write “Where do you live?” (informal).', a: 'πού μένεις', accept: ['που μενεις', 'πού μένεις;'], say: 'Πού μένεις;' },
        { q: 'Write “I am learning Greek.” (μαθαίνω = I learn)', a: 'μαθαίνω ελληνικά', accept: ['μαθαινω ελληνικα'], say: 'Μαθαίνω ελληνικά.' },
        { q: 'Answer with one word: are you well? (yes)', a: 'ναι', say: 'Ναι.' }
      ] },
      { t: 'flash', title: 'Flashcards: the ten verbs of week 2', items: [
        ['είμαι', 'I am'], ['είσαι', 'you are'], ['είναι', 'he / she / it is'],
        ['έχω', 'I have'], ['θέλω', 'I want'], ['μπορώ', 'I can'],
        ['ξέρω', 'I know'], ['πηγαίνω', 'I go'], ['μένω', 'I live / I stay'],
        ['κάνω', 'I do / I make'], ['δουλεύω', 'I work'], ['μιλάω', 'I speak'],
        ['τί;', 'what?'], ['πού;', 'where?'], ['πότε;', 'when?'],
        ['πόσο κάνει;', 'how much is it?'], ['ποιος;', 'who?'], ['γιατί;', 'why?']
      ] }
    ],    homework: [
      'Write a short paragraph about yourself: name, country, job, where you live, what you want to learn.',
      'Record yourself asking five questions and answering them.',
      'Redo the quizzes of days 6–11; note every word you had to look up.'
    ]
  },
  ]); 
})();
