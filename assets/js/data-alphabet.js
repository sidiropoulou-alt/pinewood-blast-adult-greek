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

GREEK.art = {
  island: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a Greek island with white houses and a blue dome"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4edda"/><stop offset="1" stop-color="#fbf7ec"/></linearGradient><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b8a68"/><stop offset="1" stop-color="#3c6a4c"/></linearGradient></defs><rect width="420" height="300" fill="url(#sky)"/><circle cx="330" cy="62" r="26" fill="#f6d98a"/><path d="M0 196c40-18 74-14 110-4 40 11 70 12 108 2 44-11 78-12 120 0 30 8 58 10 82 4v102H0z" fill="url(#sea)"/><path d="M0 210h420v8H0z" fill="#ffffff" opacity=".18"/><path d="M48 196c14-30 46-52 92-56 46-4 92 8 108 34 6 10 3 20-10 22H58c-10 0-14-4-10-0z" fill="#e8dcc0"/><path d="M70 196c10-22 34-38 64-42 34-4 66 4 80 22" fill="none" stroke="#c8b795" stroke-width="3" opacity=".7"/><g><rect x="120" y="150" width="52" height="46" fill="#fff" stroke="#d9d2c3"/><rect x="132" y="166" width="13" height="30" fill="#4b7a58"/><rect x="152" y="166" width="13" height="30" fill="#4b7a58"/><path d="M116 150h60l-30-14z" fill="#fdfdfb" stroke="#d9d2c3"/></g><g><rect x="184" y="140" width="46" height="56" fill="#fdfdfb" stroke="#d9d2c3"/><path d="M180 140h54l-27-18z" fill="#fdfdfb" stroke="#d9d2c3"/><rect x="200" y="164" width="14" height="32" fill="#4b7a58"/></g><g><rect x="240" y="158" width="40" height="38" fill="#fff" stroke="#d9d2c3"/><path d="M236 158h48l-24-12z" fill="#fdfdfb" stroke="#d9d2c3"/></g><g><path d="M292 196v-26c0-14 11-25 25-25s25 11 25 25v26z" fill="#fdfefe" stroke="#ded7c7"/><path d="M292 172c0-14 11-25 25-25s25 11 25 25z" fill="#3f6f4e"/><rect x="312" y="180" width="10" height="16" fill="#4b7a58"/><rect x="323" y="140" width="4" height="12" fill="#fff"/><rect x="318" y="136" width="14" height="6" fill="#fff"/></g><g fill="#2f6b45"><path d="M96 196c-4-16 2-28 10-36 6 12 8 24 6 36z"/><rect x="107" y="192" width="3" height="10" fill="#6b4b2a"/></g><g stroke="#ffffff" stroke-width="4" opacity=".7"><path d="M300 232h26M180 244h34M70 232h18M360 244h22" stroke-linecap="round"/></g><g><path d="M0 262c24-6 40-6 62 0 24 6 40 6 64 0" fill="none" stroke="#cfdfc6" stroke-width="3" opacity=".6"/></g></svg>',
  cafe: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a Greek café table with coffee, water and olives"><rect width="420" height="300" fill="#f6efe2"/><rect y="214" width="420" height="86" fill="#e8ddc6"/><g opacity=".5" stroke="#d6c8ab" stroke-width="2"><path d="M0 240h420M0 268h420M60 214v86M180 214v86M300 214v86"/></g><ellipse cx="214" cy="196" rx="130" ry="26" fill="#d9c8a8"/><ellipse cx="214" cy="190" rx="130" ry="26" fill="#efe2cb"/><g><path d="M170 120h74v48c0 14-11 24-24 24h-26c-13 0-24-10-24-24z" fill="#fbf8f2" stroke="#d8cbb6"/><ellipse cx="207" cy="120" rx="37" ry="10" fill="#f2ebe0" stroke="#d8cbb6"/><ellipse cx="207" cy="121" rx="27" ry="6.5" fill="#4a2f1c"/><path d="M244 130h10c8 0 14 6 14 14s-6 15-14 15h-10" fill="none" stroke="#d8cbb6" stroke-width="6"/><ellipse cx="207" cy="168" rx="37" ry="9" fill="none" stroke="#e8dfd0" stroke-width="2"/></g><g><path d="M300 128h34l-4 66h-26z" fill="#e3edda" opacity=".8" stroke="#c2d3b6"/><rect x="306" y="118" width="22" height="12" rx="3" fill="#e3edda" stroke="#c2d3b6"/><path d="M304 150h26M303 166h28" stroke="#f1f6ec" stroke-width="4"/></g><g><ellipse cx="120" cy="178" rx="34" ry="14" fill="#f7f4ec" stroke="#e0d7c6"/><g fill="#3f6b35"><ellipse cx="110" cy="176" rx="6" ry="7"/><ellipse cx="124" cy="180" rx="6" ry="7"/><ellipse cx="134" cy="174" rx="5.5" ry="6.5"/><ellipse cx="118" cy="171" rx="5" ry="6"/></g></g><g><path d="M62 150c0-16 13-27 29-27s29 11 29 27z" fill="#e8c46a"/><path d="M91 150v34M78 184h26" stroke="#c9a24a" stroke-width="4" stroke-linecap="round"/></g></svg>',
  map: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of Greece and the Aegean Sea"><rect width="420" height="300" fill="#eef3e4"/><g fill="#efe6cf"><path d="M96 34c22 6 34 22 30 40-3 14-16 22-14 38 2 18 20 26 16 46-4 18-20 26-24 44-3 14 2 28-8 62-6 20-18 30-30 32-10 2-14-8-12-20 3-16 12-30 10-48-2-18-14-26-12-46 2-22 16-34 12-56-3-18-12-32-4-52 6-14 16-28 36-40z"/><path d="M214 78c14 2 20 14 16 28-3 12-14 20-10 34 3 12 12 18 8 32-4 14-18 18-20 34-2 14 6 24 0 40-5 14-16 18-26 30-8 10-12 24-22 26-8 2-10-8-6-18 5-14 16-22 16-38 0-16-12-26-8-42 4-18 18-24 16-42-2-18-14-28-8-46 5-14 16-24 30-34 6-4 8-4 14-4z"/></g><g fill="#f8f3e3"><path d="M120 96c8-4 18 0 18 10s-8 18-16 16-10-22-2-26z"/></g><g fill="#c0562f"><circle cx="214" cy="176" r="5"/><circle cx="256" cy="150" r="4.5"/><circle cx="286" cy="196" r="4.5"/><circle cx="176" cy="206" r="4"/></g><g font-family="Georgia,serif" font-size="11" fill="#3f4f43"><text x="222" y="172">Αίγινα</text><text x="264" y="146">Αθήνα</text><text x="294" y="192">Σαντορίνη</text></g><g stroke="#2f5d43" stroke-width="2" fill="none" opacity=".45" stroke-dasharray="5 5"><path d="M230 150c20 10 34 24 52 38"/></g><g font-family="Georgia,serif" font-size="13" fill="#2f5d43" opacity=".55" transform="translate(300 110) rotate(-18)">ΑΙΓΑΙΟ ΠΕΛΑΓΟΣ</g></svg>'
};
