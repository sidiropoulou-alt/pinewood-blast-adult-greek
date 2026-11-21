/* Small line icons. One icon marks each lesson and each vocabulary group. */
(function () {
  var P = {
    alphabet: '<path d="M3 18l4.5-12 4.5 12M4.6 14h5.8"/><path d="M15 11h3a2 2 0 1 1 0 4h-3v-7h2.5a1.5 1.5 0 1 1 0 3H15"/>',
    sound: '<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
    accent: '<path d="M9 8l3-4 3 4"/><path d="M5 17h14"/>',
    plural: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M14 6.5h7M17.5 3v7"/>',
    wave: '<path d="M7 11V6a1.5 1.5 0 0 1 3 0v5"/><path d="M10 11V5a1.5 1.5 0 0 1 3 0v6"/><path d="M13 11V6.5a1.5 1.5 0 0 1 3 0V12"/><path d="M16 10.5V9a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-1.6a6 6 0 0 1-4.9-2.6L4 15"/>',
    person: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 19.5a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 5.6"/><path d="M18 14.2a6 6 0 0 1 3 5.3"/>',
    bolt: '<path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
    cup: '<path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M16 9h2.5a2.5 2.5 0 0 1 0 5H16"/><path d="M4 22h12"/>',
    house: '<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
    bag: '<path d="M5 8h14l-1.2 12H6.2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    bus: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 11h16M8 20v-2M16 20v-2"/><circle cx="8" cy="14" r=".8"/><circle cx="16" cy="14" r=".8"/>',
    briefcase: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18"/>',
    heart: '<path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    key: '<circle cx="8" cy="8" r="4"/><path d="M11 11l9 9M17 17l2-2M14 14l2-2"/>',
    phone: '<path d="M6 3h3l1.5 4L8.5 8.5a12 12 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z"/>',
    ship: '<path d="M4 12l8-3 8 3-2 7H6l-2-7z"/><path d="M12 9V4M9 4h6"/>',
    temple: '<path d="M3 9l9-5 9 5"/><path d="M6 9v9M10 9v9M14 9v9M18 9v9M3 21h18"/>',
    star: '<path d="M12 3.5l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L6.7 20l1-6L3.3 9.9l6-.9L12 3.5z"/>',
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M12 12v5M8 21h8M10 17h4"/>',
    pin: '<path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z"/>'
  };
  var DAYS = {
    1: 'alphabet', 2: 'alphabet', 3: 'sound', 4: 'accent', 5: 'wave', 6: 'person',
    7: 'calendar', 8: 'person', 9: 'plural', 10: 'bolt', 11: 'bolt', 12: 'check',
    13: 'clock', 14: 'cup', 15: 'house', 16: 'bag', 17: 'bus', 18: 'briefcase',
    19: 'users', 20: 'heart', 21: 'sun', 22: 'check', 23: 'calendar', 24: 'clock',
    25: 'key', 26: 'phone', 27: 'ship', 28: 'temple', 29: 'star', 30: 'trophy'
  };
  var GROUPS = [
    ['Greetings', 'wave'], ['People', 'users'], ['verbs', 'bolt'], ['Time', 'clock'],
    ['Food', 'cup'], ['Town', 'bus'], ['Home', 'house'], ['Body', 'heart'],
    ['Shopping', 'bag'], ['Work', 'briefcase'], ['Adjectives', 'star'], ['Travel', 'ship']
  ];
  window.GREEK = window.GREEK || {};
  window.GREEK.icon = function (name, cls) {
    var d = P[name] || P.star;
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + d + '</svg>';
  };
  window.GREEK.dayIcon = function (day) { return DAYS[day] || 'book'; };
  window.GREEK.groupIcon = function (title) {
    var low = String(title).toLowerCase();
    for (var i = 0; i < GROUPS.length; i++) if (low.indexOf(GROUPS[i][0].toLowerCase()) !== -1) return GROUPS[i][1];
    return 'book';
  };
})();
