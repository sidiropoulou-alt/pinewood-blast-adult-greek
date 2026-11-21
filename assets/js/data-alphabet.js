window.GREEK = window.GREEK || {};

GREEK.letters = [
  { u:'Α', l:'α', name:'άλφα', ipa:'/a/', hint:'as in f<u>a</u>ther', ex:'αγορά', exEn:'market' },
  { u:'Β', l:'β', name:'βήτα', ipa:'/v/', hint:'as in <u>v</u>ase', ex:'βιβλίο', exEn:'book' },
  { u:'Γ', l:'γ', name:'γάμα', ipa:'/ɣ/', hint:'soft “gh”, between g and r', ex:'γάλα', exEn:'milk' },
  { u:'Δ', l:'δ', name:'δέλτα', ipa:'/ð/', hint:'as in <u>th</u>is', ex:'δρόμος', exEn:'street' },
  { u:'Ε', l:'ε', name:'έψιλον', ipa:'/e/', hint:'as in p<u>e</u>t', ex:'ελιά', exEn:'olive tree' },
  { u:'Ζ', l:'ζ', name:'ζήτα', ipa:'/z/', hint:'as in <u>z</u>ebra', ex:'ζάχαρη', exEn:'sugar' },
  { u:'Η', l:'η', name:'ήτα', ipa:'/i/', hint:'as in s<u>ee</u>', ex:'ήλιος', exEn:'sun' },
  { u:'Θ', l:'θ', name:'θήτα', ipa:'/θ/', hint:'as in <u>th</u>ink', ex:'θάλασσα', exEn:'sea' },
  { u:'Ι', l:'ι', name:'γιώτα', ipa:'/i/', hint:'as in s<u>ee</u>', ex:'ιστορία', exEn:'history' },
  { u:'Κ', l:'κ', name:'κάπα', ipa:'/k/', hint:'as in <u>k</u>ite', ex:'καφές', exEn:'coffee' },
  { u:'Λ', l:'λ', name:'λάμδα', ipa:'/l/', hint:'as in <u>l</u>amp', ex:'λεμόνι', exEn:'lemon' },
  { u:'Μ', l:'μ', name:'μι', ipa:'/m/', hint:'as in <u>m</u>ap', ex:'μήλο', exEn:'apple' },
  { u:'Ν', l:'ν', name:'νι', ipa:'/n/', hint:'as in <u>n</u>ose', ex:'νερό', exEn:'water' },
  { u:'Ξ', l:'ξ', name:'ξι', ipa:'/ks/', hint:'as in bo<u>x</u>', ex:'ξένος', exEn:'stranger, foreigner' },
  { u:'Ο', l:'ο', name:'όμικρον', ipa:'/o/', hint:'pure o, no “w” glide', ex:'ουρανός', exEn:'sky' },
  { u:'Π', l:'π', name:'πι', ipa:'/p/', hint:'as in <u>p</u>en', ex:'πατέρας', exEn:'father' },
  { u:'Ρ', l:'ρ', name:'ρο', ipa:'/r/', hint:'a light rolled r', ex:'ρολόι', exEn:'clock, watch' },
  { u:'Σ', l:'σ ς', name:'σίγμα', ipa:'/s/', hint:'as in <u>s</u>un; ς at the end', ex:'σπίτι', exEn:'house' },
  { u:'Τ', l:'τ', name:'ταυ', ipa:'/t/', hint:'as in <u>t</u>op', ex:'τραπέζι', exEn:'table' },
  { u:'Υ', l:'υ', name:'ύψιλον', ipa:'/i/', hint:'same sound as η, ι', ex:'ύπνος', exEn:'sleep' },
  { u:'Φ', l:'φ', name:'φι', ipa:'/f/', hint:'as in <u>f</u>ish', ex:'φίλος', exEn:'friend' },
  { u:'Χ', l:'χ', name:'χι', ipa:'/x/', hint:'as in Scots lo<u>ch</u>', ex:'χέρι', exEn:'hand' },
  { u:'Ψ', l:'ψ', name:'ψι', ipa:'/ps/', hint:'as in li<u>ps</u>', ex:'ψωμί', exEn:'bread' },
  { u:'Ω', l:'ω', name:'ωμέγα', ipa:'/o/', hint:'same sound as ο', ex:'ώρα', exEn:'hour, time' }
];

GREEK.digraphs = [
  { gr:'αι', ipa:'/e/', hint:'like ε', ex:'αίμα', exEn:'blood' },
  { gr:'ει', ipa:'/i/', hint:'like ι', ex:'είμαι', exEn:'I am' },
  { gr:'οι', ipa:'/i/', hint:'like ι', ex:'οικογένεια', exEn:'family' },
  { gr:'υι', ipa:'/i/', hint:'like ι (rare)', ex:'υιός', exEn:'son' },
  { gr:'ου', ipa:'/u/', hint:'like “oo” in b<u>oo</u>k', ex:'ουρανός', exEn:'sky' },
  { gr:'αυ', ipa:'/av/ · /af/', hint:'av before vowels & voiced sounds', ex:'αύριο', exEn:'tomorrow' },
  { gr:'ευ', ipa:'/ev/ · /ef/', hint:'ef before θ κ ξ π σ τ φ χ ψ', ex:'ευχαριστώ', exEn:'thank you' },
  { gr:'μπ', ipa:'/b/', hint:'b at the start of a word', ex:'μπίρα', exEn:'beer' },
  { gr:'ντ', ipa:'/d/', hint:'d at the start of a word', ex:'ντόμινο', exEn:'domino' },
  { gr:'γκ · γγ', ipa:'/g/', hint:'g in <u>g</u>o', ex:'φεγγάρι', exEn:'moon' },
  { gr:'τσ', ipa:'/ts/', hint:'like “ts” in ca<u>ts</u>', ex:'τσέπη', exEn:'pocket' },
  { gr:'τζ', ipa:'/dz/', hint:'like “ds” in ki<u>ds</u>', ex:'τζιπ', exEn:'jeep' }
];

GREEK.pronRules = [
  {
    t:'Stress — the τόνος',
    html:'Every Greek word of two or more syllables carries one accent mark (ά έ ή ί ό ύ ώ) showing the stressed syllable: <span class="gr">καφές</span> = ka-<b>FES</b>. Learn each new word together with its stress — the meaning can change without it (<span class="gr">πότε</span> “when?” vs <span class="gr">ποτέ</span> “never”).'
  },
  {
    t:'One “i” sound, five spellings',
    html:'<span class="gr">η, ι, υ, ει, οι</span> all sound like the “ee” in s<u>ee</u>. That is why Greek spelling must be memorised word by word — your ear cannot tell you which one to write.'
  },
  {
    t:'Soft γ and χ',
    html:'Before <span class="gr">ε</span> or <span class="gr">ι</span>, γ sounds like a soft “y” (<span class="gr">γέρος</span> → YE-ros) and χ like the “h” in <u>h</u>uge (<span class="gr">χέρι</span> → HEH-ri).'
  },
  {
    t:'Final sigma',
    html:'Sigma is written <span class="gr">σ</span> inside a word and <span class="gr">ς</span> at the end: <span class="gr">σαλάτα</span>, <span class="gr">ήρωας</span>.'
  },
  {
    t:'Question mark and semicolon',
    html:'The Greek question mark is <b>;</b> — <span class="gr">Πού πας;</span> (Where are you going?). The Greek semicolon is the raised dot <b>·</b>. Exclamation marks and commas look the same as in English.'
  },
  {
    t:'No “h” at the start',
    html:'Greek has no letter for a breathy English “h”. The letter <span class="gr">η</span> is a vowel (ee), so <span class="gr">η Ελένη</span> is “i e-LE-ni”.'
  }
];

