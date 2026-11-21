/* Greek for Beginners — reference data: vocabulary, grammar drill, phrasebook, dialogues */
(function () {
  var G = window.GREEK = window.GREEK || {};
  var REF = G.ref = G.ref || {};

  REF.vocab = [

    { id: 'greet', title: 'Greetings & courtesy', gr: 'Χαιρετισμοί και ευγένεια',
      intro: 'The ten phrases that start and end every encounter. Learn them before anything else.',
      rows: [
        ['γεια σου', 'hi (to one person)'], ['γεια σας', 'hello (polite / to several)'],
        ['καλημέρα', 'good morning'], ['καλησπέρα', 'good evening'],
        ['καληνύχτα', 'good night'], ['αντίο', 'goodbye'],
        ['χαίρετε', 'hello / goodbye (formal)'], ['παρακαλώ', 'please / you’re welcome'],
        ['ευχαριστώ', 'thank you'], ['ευχαριστώ πολύ', 'thank you very much'],
        ['συγγνώμη', 'sorry / excuse me'], ['με συγχωρείτε', 'excuse me (polite)'],
        ['ναι', 'yes'], ['όχι', 'no'], ['ίσως', 'maybe'],
        ['καλώς ήρθες', 'welcome (to one person)'], ['καλώς ορίσατε', 'welcome (polite)'],
        ['τι κάνεις;', 'how are you? (informal)'], ['τι κάνετε;', 'how are you? (polite)'],
        ['καλά, ευχαριστώ', 'well, thank you']
      ] },

    { id: 'people', title: 'People & family', gr: 'Άνθρωποι και οικογένεια',
      intro: 'Family words are the ones you will be asked about first. Note which have a masculine and a feminine form.',
      rows: [
        ['ο άνθρωπος', 'the person, human'], ['ο άντρας', 'the man'], ['η γυναίκα', 'the woman'],
        ['το παιδί', 'the child'], ['το αγόρι', 'the boy'], ['το κορίτσι', 'the girl'],
        ['ο φίλος / η φίλη', 'the friend (m / f)'], ['ο γείτονας', 'the neighbour'],
        ['η οικογένεια', 'the family'], ['ο πατέρας', 'the father'], ['η μητέρα / η μαμά', 'the mother / mum'],
        ['ο γιος', 'the son'], ['η κόρη', 'the daughter'], ['ο αδελφός', 'the brother'],
        ['η αδελφή', 'the sister'], ['ο παππούς', 'the grandfather'], ['η γιαγιά', 'the grandmother'],
        ['ο θείος', 'the uncle'], ['η θεία', 'the aunt'], ['ο ξάδελφος / η ξαδέλφη', 'the cousin (m / f)'],
        ['ο σύζυγος', 'the husband'], ['η σύζυγος', 'the wife'],
        ['παντρεμένος / παντρεμένη', 'married (m / f)'], ['ανύπαντρος / ανύπαντρη', 'single (m / f)']
      ] },

    { id: 'verbs', title: 'The 30 verbs you need first', gr: 'Τα πρώτα ρήματα',
      intro: 'All in the first person (“I…”). Most follow the present-tense rules from Day 10 and Day 11.',
      rows: [
        ['είμαι', 'I am'], ['έχω', 'I have'], ['κάνω', 'I do, make'], ['πάω / πηγαίνω', 'I go'],
        ['έρχομαι', 'I come'], ['μένω', 'I live, stay'], ['δουλεύω', 'I work'], ['θέλω', 'I want'],
        ['μπορώ', 'I can'], ['ξέρω', 'I know (a fact)'], ['γνωρίζω', 'I know (a person)'],
        ['μαθαίνω', 'I learn'], ['μιλάω', 'I speak'], ['λέω', 'I say, tell'],
        ['ακούω', 'I hear, listen'], ['βλέπω', 'I see'], ['διαβάζω', 'I read'], ['γράφω', 'I write'],
        ['τρώω', 'I eat'], ['πίνω', 'I drink'], ['αγοράζω', 'I buy'], ['πληρώνω', 'I pay'],
        ['περιμένω', 'I wait'], ['ρωτάω', 'I ask'], ['απαντάω', 'I answer'],
        ['καταλαβαίνω', 'I understand'], ['χρειάζομαι', 'I need'], ['παίρνω', 'I take'],
        ['δίνω', 'I give'], ['αγαπάω', 'I love'], ['νομίζω', 'I think (opinion)']
      ] },

    { id: 'time', title: 'Time, days & dates', gr: 'Χρόνος, ημέρες, ημερομηνίες',
      intro: 'Days and months are always capitalised in Greek — one of the few places Greek uses capitals.',
      rows: [
        ['τώρα', 'now'], ['σήμερα', 'today'], ['αύριο', 'tomorrow'], ['χθες', 'yesterday'],
        ['το πρωί', 'the morning'], ['το μεσημέρι', 'midday'], ['το απόγευμα', 'the afternoon'],
        ['το βράδυ', 'the evening'], ['η ώρα', 'the hour, time'], ['το λεπτό', 'the minute'],
        ['η εβδομάδα', 'the week'], ['ο μήνας', 'the month'], ['ο χρόνος', 'the year, time'],
        ['Δευτέρα', 'Monday'], ['Τρίτη', 'Tuesday'], ['Τετάρτη', 'Wednesday'],
        ['Πέμπτη', 'Thursday'], ['Παρασκευή', 'Friday'], ['Σάββατο', 'Saturday'], ['Κυριακή', 'Sunday'],
        ['Ιανουάριος', 'January'], ['Φεβρουάριος', 'February'], ['Μάρτιος', 'March'],
        ['Απρίλιος', 'April'], ['Μάιος', 'May'], ['Ιούνιος', 'June'],
        ['Ιούλιος', 'July'], ['Αύγουστος', 'August'], ['Σεπτέμβριος', 'September'],
        ['Οκτώβριος', 'October'], ['Νοέμβριος', 'November'], ['Δεκέμβριος', 'December']
      ] }
  ];

  REF.vocab.push(

    { id: 'food', title: 'Food & drink', gr: 'Φαγητό και ποτό',
      intro: 'Menus are easy once you know twenty words. Note πουλάω/θέλω patterns at the taverna.',
      rows: [
        ['το νερό', 'water'], ['ο καφές', 'coffee'], ['ο ελληνικός καφές', 'Greek coffee'],
        ['ο φραπές', 'iced coffee (frappé)'], ['το τσάι', 'tea'], ['το κρασί', 'wine'],
        ['η μπίρα', 'beer'], ['το γάλα', 'milk'], ['ο χυμός', 'juice'],
        ['το ψωμί', 'bread'], ['το τυρί', 'cheese'], ['η φέτα', 'feta'],
        ['το κρέας', 'meat'], ['το κοτόπουλο', 'chicken'], ['το ψάρι', 'fish'],
        ['οι πατάτες', 'potatoes'], ['το ρύζι', 'rice'], ['η σαλάτα', 'salad'],
        ['η χωριάτικη σαλάτα', 'Greek salad'], ['τα λαχανικά', 'vegetables'],
        ['το φρούτο', 'fruit'], ['το γλυκό', 'dessert, sweet'], ['το αλάτι', 'salt'],
        ['το πιάτο', 'plate, dish'], ['το μενού', 'menu'], ['ο λογαριασμός', 'the bill'],
        ['η μερίδα', 'a portion'], ['νόστιμο', 'tasty'], ['χορτοφάγος', 'vegetarian']
      ] },

    { id: 'city', title: 'Town, transport & directions', gr: 'Πόλη, μετακινήσεις, κατευθύνσεις',
      intro: 'For getting around: every sign you will meet, and the words for the way.',
      rows: [
        ['ο δρόμος', 'the road, street'], ['η πλατεία', 'the square'], ['το λιμάνι', 'the port'],
        ['η παραλία', 'the beach'], ['το νησί', 'the island'], ['η θάλασσα', 'the sea'],
        ['το λεωφορείο', 'the bus'], ['το ταξί', 'the taxi'], ['το πλοίο', 'the ship, ferry'],
        ['το αεροπλάνο', 'the aeroplane'], ['το τρένο', 'the train'], ['το αυτοκίνητο', 'the car'],
        ['το εισιτήριο', 'the ticket'], ['η στάση', 'the stop'], ['ο σταθμός', 'the station'],
        ['αριστερά', 'left'], ['δεξιά', 'right'], ['ίσια', 'straight on'],
        ['πάνω', 'up, above'], ['κάτω', 'down, below'], ['κοντά', 'near'], ['μακριά', 'far'],
        ['απέναντι', 'opposite'], ['δίπλα', 'next to'], ['μεταξύ', 'between'],
        ['εδώ', 'here'], ['εκεί', 'there'], ['η γωνία', 'the corner'],
        ['το φαρμακείο', 'the pharmacy'], ['το νοσοκομείο', 'the hospital'], ['η τράπεζα', 'the bank'],
        ['το σούπερ μάρκετ', 'the supermarket'], ['η εκκλησία', 'the church'], ['το μουσείο', 'the museum']
      ] },

    { id: 'home', title: 'Home & everyday objects', gr: 'Σπίτι και καθημερινά αντικείμενα',
      intro: 'For describing where you live, and for renting or asking about a flat.',
      rows: [
        ['το σπίτι', 'the house, home'], ['το διαμέρισμα', 'the flat, apartment'],
        ['το δωμάτιο', 'the room'], ['η κουζίνα', 'the kitchen'], ['το μπάνιο', 'the bathroom'],
        ['η κρεβατοκάμαρα', 'the bedroom'], ['το μπαλκόνι', 'the balcony'], ['η αυλή', 'the yard'],
        ['η πόρτα', 'the door'], ['το παράθυρο', 'the window'], ['το κλειδί', 'the key'],
        ['το κρεβάτι', 'the bed'], ['το τραπέζι', 'the table'], ['η καρέκλα', 'the chair'],
        ['η τηλεόραση', 'the television'], ['το τηλέφωνο', 'the telephone'], ['ο υπολογιστής', 'the computer'],
        ['το φως', 'the light'], ['το νερό (ζεστό / κρύο)', 'water (hot / cold)'],
        ['το ενοίκιο', 'the rent'], ['ο ιδιοκτήτης', 'the landlord'], ['ο λογαριασμός (ρεύμα)', 'the bill (electricity)'],
        ['καθαρός / καθαρή', 'clean (m / f)'], ['βρώμικος / βρώμικη', 'dirty (m / f)'],
        ['μεγάλος / μεγάλη / μεγάλο', 'big (m / f / n)'], ['μικρός / μικρή / μικρό', 'small (m / f / n)']
      ] },

    { id: 'health', title: 'Body & health', gr: 'Σώμα και υγεία',
      intro: 'The pharmacy is your first stop in Greece: φαρμακείο, open set hours, and they advise before selling.',
      rows: [
        ['το κεφάλι', 'the head'], ['το στομάχι', 'the stomach'], ['η κοιλιά', 'the belly'],
        ['το χέρι', 'the hand, arm'], ['το πόδι', 'the leg, foot'], ['η πλάτη', 'the back'],
        ['ο λαιμός', 'the throat, neck'], ['το δόντι', 'the tooth'], ['το μάτι', 'the eye'],
        ['ο πόνος', 'the pain'], ['πονάω', 'I hurt, it hurts me'], ['ο πυρετός', 'the fever'],
        ['ο βήχας', 'the cough'], ['το κρύωμα', 'the cold (illness)'], ['ο γιατρός', 'the doctor'],
        ['το φάρμακο', 'the medicine'], ['το χάπι', 'the pill'], ['η συνταγή', 'the prescription'],
        ['το επίδεσμος', 'the bandage'], ['το ασθενοφόρο', 'the ambulance'],
        ['είμαι άρρωστος / άρρωστη', 'I am ill (m / f)'], ['αισθάνομαι καλά', 'I feel well'],
        ['βοήθεια!', 'help!'], ['επείγον', 'emergency'], ['αλλεργία', 'allergy']
      ] },

    { id: 'shop', title: 'Shopping, money & numbers', gr: 'Ψώνια, χρήματα, αριθμοί',
      intro: 'Prices are written with a comma: 3,50 €. Say τέσσερα ευρώ πενήντα.',
      rows: [
        ['το κατάστημα', 'the shop'], ['το μαγαζί', 'the shop (colloquial)'], ['η αγορά', 'the market'],
        ['το ψωμάδικο', 'the bakery'], ['το μανάβικο', 'the greengrocer'], ['το περίπτερο', 'the kiosk'],
        ['πόσο κάνει;', 'how much is it?'], ['πόσο κάνουν;', 'how much are they?'],
        ['ακριβό', 'expensive'], ['φθηνό', 'cheap'], ['δωρεάν', 'free'],
        ['το ευρώ', 'the euro'], ['το λεπτό', 'the cent'], ['τα ρέστα', 'the change'],
        ['η κάρτα', 'the card'], ['μετρητά', 'cash'], ['η απόδειξη', 'the receipt'],
        ['η τσάντα', 'the bag'], ['το μέγεθος', 'the size'], ['η βιτρίνα', 'the shop window'],
        ['ένα', 'one'], ['δύο', 'two'], ['τρία', 'three'], ['τέσσερα', 'four'], ['πέντε', 'five'],
        ['έξι', 'six'], ['επτά', 'seven'], ['οκτώ', 'eight'], ['εννέα', 'nine'], ['δέκα', 'ten'],
        ['είκοσι', 'twenty'], ['πενήντα', 'fifty'], ['εκατό', 'a hundred']
      ] },

    { id: 'work', title: 'Work & office', gr: 'Δουλειά και γραφείο',
      intro: 'Useful for meetings, emails and the paperwork an adult resident in Greece meets.',
      rows: [
        ['η δουλειά', 'the work, job'], ['το γραφείο', 'the office'], ['ο συνάδελφος', 'the colleague'],
        ['το αφεντικό', 'the boss'], ['η συνάντηση', 'the meeting'], ['το ραντεβού', 'the appointment'],
        ['το email / το μήνυμα', 'the email / message'], ['το έγγραφο', 'the document'],
        ['η υπογραφή', 'the signature'], ['η φόρμα', 'the form'], ['η αίτηση', 'the application'],
        ['η ταυτότητα', 'the ID card'], ['το διαβατήριο', 'the passport'], ['η άδεια', 'the permit, leave'],
        ['ο λογιστής', 'the accountant'], ['ο δικηγόρος', 'the lawyer'],
        ['το ΑΦΜ', 'the tax number'], ['η εφορία', 'the tax office'], ['ο δήμος', 'the municipality'],
        ['η σύσκεψη', 'the briefing'], ['η προθεσμία', 'the deadline'],
        ['εργάζομαι', 'I work'], ['συνεργάζομαι', 'I cooperate'], ['υπογράφω', 'I sign'],
        ['στέλνω', 'I send'], ['λαμβάνω', 'I receive'], ['ξεκινάω', 'I start'], ['τελειώνω', 'I finish']
      ] },

    { id: 'adj', title: 'Adjectives & opposites', gr: 'Επίθετα και αντίθετα',
      intro: 'Adjectives agree with the noun: -ος / -η / -ο for masculine, feminine and neuter.',
      rows: [
        ['καλός / καλή / καλό', 'good'], ['κακός / κακή / κακό', 'bad'],
        ['ωραίος / ωραία / ωραίο', 'beautiful, nice'], ['άσχημος / άσχημη / άσχημο', 'ugly'],
        ['νέος / νέα / νέο', 'new, young'], ['παλιός / παλιά / παλιό', 'old (things)'],
        ['γέρος / γριά', 'old (people)'], ['ζεστός / ζεστή / ζεστό', 'hot'],
        ['κρύος / κρύα / κρύο', 'cold'], ['γρήγορος / γρήγορη / γρήγορο', 'fast'],
        ['αργός / αργή / αργό', 'slow'], ['εύκολος / εύκολη / εύκολο', 'easy'],
        ['δύσκολος / δύσκολη / δύσκολο', 'difficult'], ['ήσυχος / ήσυχη / ήσυχο', 'quiet'],
        ['θορυβώδης', 'noisy'], ['ακριβός / ακριβή / ακριβό', 'expensive'],
        ['φθηνός / φθηνή / φθηνό', 'cheap'], ['γεμάτος / γεμάτη / γεμάτο', 'full'],
        ['άδειος / άδεια / άδειο', 'empty'], ['χαρούμενος / χαρούμενη / χαρούμενο', 'happy'],
        ['λυπημένος / λυπημένη', 'sad'], ['κουρασμένος / κουρασμένη', 'tired'],
        ['πλούσιος / πλούσια / πλούσιο', 'rich'], ['φτωχός / φτωχή / φτωχό', 'poor'],
        ['ίδιος / ίδια / ίδιο', 'same'], ['διαφορετικός / διαφορετική / διαφορετικό', 'different']
      ] },

    { id: 'travel', title: 'Travel & hotel', gr: 'Ταξίδι και ξενοδοχείο',
      intro: 'One page for the ferry, the room and the small problems that come with both.',
      rows: [
        ['το ταξίδι', 'the journey'], ['οι διακοπές', 'the holidays'], ['ο τουρίστας', 'the tourist'],
        ['το ξενοδοχείο', 'the hotel'], ['η κράτηση', 'the reservation'], ['το δωμάτιο', 'the room'],
        ['η βραδιά', 'the night (stay)'], ['το πρωινό', 'breakfast'], ['η θέα', 'the view'],
        ['το κλιματιστικό', 'the air conditioning'], ['η πετσέτα', 'the towel'],
        ['οι αποσκευές', 'the luggage'], ['η βαλίτσα', 'the suitcase'],
        ['το check-in', 'check-in'], ['το check-out', 'check-out'], ['το κλειδί', 'the key'],
        ['η αναχώρηση', 'the departure'], ['η άφιξη', 'the arrival'],
        ['η καθυστέρηση', 'the delay'], ['η ακύρωση', 'the cancellation'],
        ['το παράπονο', 'the complaint'], ['χαλασμένο', 'broken'], ['βρώμικο', 'dirty'],
        ['Μπορώ να…;', 'May I…?'], ['Θα ήθελα…', 'I would like…']
      ] }
  );

  REF.grammar = {
    drill: [
      { type: 'choice', q: '{{g:γράφω}} means…', options: ['I write', 'I am writing', 'both', 'I wrote'], a: 2 },
      { type: 'choice', q: 'εσύ ___ (δουλεύω)', options: ['δουλεύω', 'δουλεύεις', 'δουλεύει', 'δουλεύουμε'], a: 1 },
      { type: 'choice', q: 'εμείς ___ (μένω)', options: ['μένω', 'μένεις', 'μένουμε', 'μένουν'], a: 2 },
      { type: 'choice', q: 'αυτοί ___ (θέλω)', options: ['θέλω', 'θέλεις', 'θέλουμε', 'θέλουν'], a: 3 },
      { type: 'choice', q: '“I don’t have time.”', options: ['Δεν έχω χρόνο.', 'Έχω δεν χρόνο.', 'Δεν έχω καιρό.', 'Δεν χρόνο έχω.'], a: 0 },
      { type: 'choice', q: 'Negative of {{g:μιλάω}} (I):', options: ['δεν μιλάω', 'μιλάω δεν', 'δεν μιλώ;', 'μη μιλάω'], a: 0 },
      { type: 'choice', q: 'Which is a Group B (-άω) verb?', options: ['γράφω', 'αγαπάω', 'λέω', 'έχω'], a: 1 },
      { type: 'choice', q: 'εσείς ___ (είμαι)', options: ['είσαι', 'είμαστε', 'είστε', 'είναι'], a: 2 },
      { type: 'choice', q: '“Do you speak English?”', options: ['Μιλάς αγγλικά;', 'Μιλάω αγγλικά.', 'Αγγλικά μιλάς δεν;', 'Μιλάτε αγγλικά.'], a: 0 },
      { type: 'choice', q: 'αυτή ___ (πηγαίνω)', options: ['πηγαίνω', 'πηγαίνεις', 'πηγαίνει', 'πηγαίνουν'], a: 2 },
      { type: 'choice', q: '“We are working.”', options: ['Δουλεύουμε.', 'Δουλεύω.', 'Δουλεύουν.', 'Δουλεύεις.'], a: 0 },
      { type: 'choice', q: 'Where does {{g:να}} go? {{g:Θέλω ___ πάω.}}', options: ['να', 'θα', 'δεν', 'όχι'], a: 0 },
      { type: 'choice', q: 'Correct negative with a past form:', options: ['δεν πήγα', 'δεν πηγαίνω', 'πήγα δεν', 'μη πήγα'], a: 0 },
      { type: 'choice', q: '{{g:Μπορώ να έρθω;}} means…', options: ['Can I come?', 'I can come.', 'I want to come.', 'Do I come?'], a: 0 },
      { type: 'choice', q: '“You (pl.) want”', options: ['θέλετε', 'θέλεις', 'θέλουν', 'θέλουμε'], a: 0 },
      { type: 'choice', q: 'Which pronoun is used for a polite “you”?', options: ['εσύ', 'εσείς', 'αυτός', 'εμείς'], a: 1 },
      { type: 'choice', q: '{{g:Πρέπει να φύγω.}} means…', options: ['I must leave.', 'I may leave.', 'I want to leave.', 'I left.'], a: 0 },
      { q: 'Write “I am learning Greek.”', a: 'μαθαίνω ελληνικά', accept: ['μαθαινω ελληνικα', 'μαθαίνω τα ελληνικά'], say: 'Μαθαίνω ελληνικά.' }
    ]
  };

  REF.phrasebook = [
    { id: 'survival', situation: 'First words', gr: 'Οι πρώτες λέξεις', icon: '👋',
      items: [
        { g: 'Γεια σας!', e: 'Hello! (polite)' },
        { g: 'Καλημέρα σας.', e: 'Good morning.' },
        { g: 'Παρακαλώ.', e: 'Please. / You’re welcome.' },
        { g: 'Ευχαριστώ πολύ.', e: 'Thank you very much.' },
        { g: 'Συγγνώμη, δεν κατάλαβα.', e: 'Sorry, I didn’t understand.' },
        { g: 'Μιλάτε αγγλικά;', e: 'Do you speak English?' },
        { g: 'Μιλάω λίγα ελληνικά.', e: 'I speak a little Greek.' },
        { g: 'Πώς το λέτε στα ελληνικά;', e: 'How do you say it in Greek?' },
        { g: 'Μπορείτε να μιλήσετε πιο αργά;', e: 'Could you speak more slowly?' },
        { g: 'Μπορείτε να το γράψετε;', e: 'Could you write it down?' }
      ],
      tip: 'Greeks appreciate any attempt at Greek. Start with <span class="gr">Μιλάω λίγα ελληνικά</span> and the conversation softens immediately.' },

    { id: 'meeting', situation: 'Meeting people', gr: 'Γνωριμία', icon: '🤝',
      items: [
        { g: 'Πώς σας λένε;', e: 'What is your name? (polite)' },
        { g: 'Με λένε Σάρα.', e: 'My name is Sarah.' },
        { g: 'Χαίρω πολύ.', e: 'Nice to meet you.' },
        { g: 'Από πού είστε;', e: 'Where are you from?' },
        { g: 'Είμαι από την Αγγλία.', e: 'I am from England.' },
        { g: 'Μένω στην Αθήνα.', e: 'I live in Athens.' },
        { g: 'Τι δουλειά κάνετε;', e: 'What do you do for a living?' },
        { g: 'Είμαι δασκάλα.', e: 'I am a teacher (f).' },
        { g: 'Πόσο καιρό είστε στην Ελλάδα;', e: 'How long have you been in Greece?' },
        { g: 'Τα λέμε σύντομα!', e: 'See you soon!' }
      ],
      tip: 'The polite plural (<span class="gr">σας</span>) is the safe default with strangers, shopkeepers and anyone older.' },

    { id: 'cafe', situation: 'Café & taverna', gr: 'Καφέ και ταβέρνα', icon: '☕',
      items: [
        { g: 'Έναν καφέ, παρακαλώ.', e: 'A coffee, please.' },
        { g: 'Ένα μπουκάλι νερό, παρακαλώ.', e: 'A bottle of water, please.' },
        { g: 'Τι έχετε σήμερα;', e: 'What do you have today?' },
        { g: 'Τι μας προτείνετε;', e: 'What do you recommend?' },
        { g: 'Θα πάρω αυτό.', e: 'I’ll have this one.' },
        { g: 'Είμαι χορτοφάγος.', e: 'I am vegetarian (m).' },
        { g: 'Χωρίς κρέας, παρακαλώ.', e: 'Without meat, please.' },
        { g: 'Ήταν πολύ νόστιμο.', e: 'It was very tasty.' },
        { g: 'Τον λογαριασμό, παρακαλώ.', e: 'The bill, please.' },
        { g: 'Μπορώ να πληρώσω με κάρτα;', e: 'Can I pay by card?' }
      ],
      tip: '<span class="gr">Καλή όρεξη!</span> — enjoy your meal — is said before eating, to everyone at the table.' },

    { id: 'shopping', situation: 'Shopping', gr: 'Ψώνια', icon: '🛍️',
      items: [
        { g: 'Πόσο κάνει;', e: 'How much is it?' },
        { g: 'Πόσο κάνουν αυτά;', e: 'How much are these?' },
        { g: 'Είναι πολύ ακριβό.', e: 'It is too expensive.' },
        { g: 'Έχετε κάτι πιο φθηνό;', e: 'Do you have something cheaper?' },
        { g: 'Το θέλω σε μεγάλο μέγεθος.', e: 'I want it in a large size.' },
        { g: 'Μπορώ να το δοκιμάσω;', e: 'Can I try it on?' },
        { g: 'Θα το πάρω.', e: 'I’ll take it.' },
        { g: 'Μπορώ να πληρώσω με κάρτα;', e: 'Can I pay by card?' },
        { g: 'Θέλω απόδειξη, παρακαλώ.', e: 'I’d like a receipt, please.' }
      ],
      tip: 'In small shops, greeting the owner with <span class="gr">καλημέρα</span> before asking anything is expected, not optional.' },

    { id: 'directions', situation: 'Directions', gr: 'Κατευθύνσεις', icon: '🧭',
      items: [
        { g: 'Συγγνώμη, πού είναι το λιμάνι;', e: 'Excuse me, where is the port?' },
        { g: 'Πώς πάω στην πλατεία;', e: 'How do I get to the square?' },
        { g: 'Είναι κοντά;', e: 'Is it near?' },
        { g: 'Πόσο μακριά είναι;', e: 'How far is it?' },
        { g: 'Πάω με τα πόδια;', e: 'Do I go on foot?' },
        { g: 'Πού είναι η στάση του λεωφορείου;', e: 'Where is the bus stop?' },
        { g: 'Ευθεία και μετά δεξιά.', e: 'Straight on and then right.' },
        { g: 'Στην επόμενη γωνία αριστερά.', e: 'At the next corner, left.' },
        { g: 'Μπορείτε να μου δείξετε στον χάρτη;', e: 'Can you show me on the map?' }
      ],
      tip: 'Greeks often answer with gestures as much as words; <span class="gr">ναι, ναι</span> with a hand wave can simply mean “keep going”.' },

    { id: 'travel', situation: 'Travel & hotel', gr: 'Ταξίδι και ξενοδοχείο', icon: '⛴️',
      items: [
        { g: 'Δύο εισιτήρια για τη Σαντορίνη.', e: 'Two tickets to Santorini.' },
        { g: 'Τι ώρα φεύγει το πλοίο;', e: 'What time does the ferry leave?' },
        { g: 'Έχω μια κράτηση στο όνομα Σάρα Τζόουνς.', e: 'I have a reservation under the name Sarah Jones.' },
        { g: 'Για δύο βράδια.', e: 'For two nights.' },
        { g: 'Το πρωινό περιλαμβάνεται;', e: 'Is breakfast included?' },
        { g: 'Υπάρχει Wi-Fi στο δωμάτιο;', e: 'Is there Wi-Fi in the room?' },
        { g: 'Το κλιματιστικό δεν δουλεύει.', e: 'The air conditioning doesn’t work.' },
        { g: 'Μπορώ να αφήσω τις αποσκευές μου εδώ;', e: 'Can I leave my luggage here?' },
        { g: 'Τι ώρα είναι το check-out;', e: 'What time is check-out?' }
      ],
      tip: 'On ferries, seats are assigned only in numbered classes; deck tickets are open seating.' },

    { id: 'health', situation: 'Doctor & pharmacy', gr: 'Γιατρός και φαρμακείο', icon: '💊',
      items: [
        { g: 'Χρειάζομαι ένα φαρμακείο.', e: 'I need a pharmacy.' },
        { g: 'Πονάει το στομάχι μου.', e: 'My stomach hurts.' },
        { g: 'Έχω πυρετό.', e: 'I have a fever.' },
        { g: 'Έχω πονοκέφαλο.', e: 'I have a headache.' },
        { g: 'Είμαι αλλεργικός / αλλεργική στην πενικιλίνη.', e: 'I am allergic to penicillin (m / f).' },
        { g: 'Χρειάζομαι γιατρό.', e: 'I need a doctor.' },
        { g: 'Πού είναι το πλησιέστερο νοσοκομείο;', e: 'Where is the nearest hospital?' },
        { g: 'Είναι επείγον.', e: 'It is an emergency.' },
        { g: 'Παίρνω αυτό το φάρμακο κάθε μέρα.', e: 'I take this medicine every day.' }
      ],
      tip: 'Pharmacists in Greece give real medical advice and can treat minor problems directly — no appointment needed.' },

    { id: 'office', situation: 'Town hall & paperwork', gr: 'Δήμος και χαρτιά', icon: '📄',
      items: [
        { g: 'Θέλω να κάνω αίτηση.', e: 'I want to make an application.' },
        { g: 'Τι χαρτιά χρειάζομαι;', e: 'What papers do I need?' },
        { g: 'Έχω ραντεβού στις δέκα.', e: 'I have an appointment at ten.' },
        { g: 'Πού είναι το γραφείο;', e: 'Where is the office?' },
        { g: 'Μπορείτε να μου εξηγήσετε;', e: 'Can you explain it to me?' },
        { g: 'Δεν καταλαβαίνω αυτό το έγγραφο.', e: 'I don’t understand this document.' },
        { g: 'Χρειάζομαι βοήθεια με τη φόρμα.', e: 'I need help with the form.' },
        { g: 'Πότε είναι έτοιμο;', e: 'When is it ready?' },
        { g: 'Πρέπει να ξανάρθω;', e: 'Do I have to come back?' }
      ],
      tip: 'Bring photocopies of everything. <span class="gr">Φωτοτυπία</span> is the word for a photocopy, and there is usually a shop next door.' },

    { id: 'social', situation: 'Social & polite', gr: 'Κοινωνικά', icon: '🎉',
      items: [
        { g: 'Καλώς ήρθες στο σπίτι μου.', e: 'Welcome to my home.' },
        { g: 'Στην υγειά σας!', e: 'Cheers! (to your health)' },
        { g: 'Χρόνια πολλά!', e: 'Many happy returns! (birthdays, name days)' },
        { g: 'Καλή χρονιά!', e: 'Happy New Year!' },
        { g: 'Καλό Πάσχα!', e: 'Happy Easter!' },
        { g: 'Να είσαι καλά.', e: 'Take care / be well.' },
        { g: 'Συγχαρητήρια!', e: 'Congratulations!' },
        { g: 'Λυπάμαι πολύ.', e: 'I am very sorry.' },
        { g: 'Θα έρθω με μεγάλη χαρά.', e: 'I would be delighted to come.' },
        { g: 'Δυστυχώς δεν μπορώ.', e: 'Unfortunately I can’t.' }
      ],
      tip: 'Name days matter as much as birthdays in Greece. Ask <span class="gr">Πότε γιορτάζεις;</span> — when is your name day?' }
  ];

  /* Dialogues are collected from every lesson, so the reference always matches the course. */
  var fromDays = [];
  (G.days || []).forEach(function (d) {
    (d.sections || []).forEach(function (sec) {
      if (sec.t === 'dialogue' && sec.d && sec.d.lines && sec.d.lines.length) {
        fromDays.push(sec.d);
      }
    });
  });

  REF.dialogues = [
    { id: 'd-port', title: 'At the port of Aegina', gr: 'Στο λιμάνι της Αίγινας', level: 'A1',
      setting: 'You arrive by ferry and need a room for two nights.',
      lines: [
        { s: 'Σάρα', g: 'Καλησπέρα σας. Έχω μια κράτηση.', e: 'Good evening. I have a reservation.' },
        { s: 'Υπάλληλος', g: 'Στο όνομά σας, παρακαλώ;', e: 'In whose name, please?' },
        { s: 'Σάρα', g: 'Σάρα Τζόουνς. Για δύο βράδια.', e: 'Sarah Jones. For two nights.' },
        { s: 'Υπάλληλος', g: 'Μάλιστα. Το δωμάτιο είναι στον πρώτο όροφο.', e: 'Certainly. The room is on the first floor.' },
        { s: 'Σάρα', g: 'Ευχαριστώ. Το πρωινό περιλαμβάνεται;', e: 'Thank you. Is breakfast included?' },
        { s: 'Υπάλληλος', g: 'Ναι, από τις επτά έως τις δέκα.', e: 'Yes, from seven until ten.' }
      ] },
    { id: 'd-bakery', title: 'At the bakery', gr: 'Στο ψωμάδικο', level: 'A1',
      setting: 'Morning bread, and the price.',
      lines: [
        { s: 'Σάρα', g: 'Καλημέρα! Έχει ψωμί;', e: 'Good morning! Do you have bread?' },
        { s: 'Αρτοποιός', g: 'Καλημέρα. Ναι, ζεστό μόλις βγήκε.', e: 'Good morning. Yes, it just came out warm.' },
        { s: 'Σάρα', g: 'Θέλω δύο καρβέλια και μία τυρόπιτα.', e: 'I want two loaves and one cheese pie.' },
        { s: 'Αρτοποιός', g: 'Τρία ευρώ είκοσι.', e: 'Three euros twenty.' },
        { s: 'Σάρα', g: 'Ορίστε. Ευχαριστώ πολύ!', e: 'Here you are. Thank you very much!' }
      ] }
  ].concat(fromDays);

  /* One dialogue list, one source of truth: each `id` appears once. */
  var seen = {};
  REF.dialogues = REF.dialogues.filter(function (d) {
    if (seen[d.id]) return false;
    seen[d.id] = true;
    return true;
  });
})();
