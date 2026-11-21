/* Greek speech using the device's own speech-synthesis voices.
   No files, no network: works offline once the page is loaded.          */
window.Speech = (function () {
  var synth = window.speechSynthesis || null;
  var voice = null;
  var enabled = true;
  var warned = false;

  function pickVoice() {
    if (!synth) return null;
    var voices = synth.getVoices() || [];
    var greek = voices.filter(function (v) { return /^el/i.test(v.lang); });
    if (!greek.length) return null;
    // Prefer a local/native voice, then Google/Microsoft ones.
    greek.sort(function (a, b) {
      var score = function (v) {
        var s = 0;
        if (v.localService) s += 2;
        if (/google|microsoft|natural|premium|enhanced/i.test(v.name)) s += 1;
        return -s;
      };
      return score(a) - score(b);
    });
    return greek[0];
  }

  if (synth) {
    voice = pickVoice();
    synth.addEventListener && synth.addEventListener('voiceschanged', function () {
      voice = pickVoice();
    });
  }

  function parse(text) {
    return String(text).replace(/\s+/g, ' ').trim();
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!synth) { toast('This browser cannot play speech.'); return null; }
    if (!enabled && !opts.force) return null;
    text = parse(text);
    if (!text) return null;
    voice = voice || pickVoice();
    try { synth.cancel(); } catch (e) {}

    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'el-GR';
    if (voice) u.voice = voice;
    u.rate = opts.rate || 0.82;
    u.pitch = opts.pitch || 1;
    u.volume = 1;
    if (opts.onstart) u.onstart = opts.onstart;
    if (opts.onend) u.onend = function () { opts.onend(); };
    if (opts.onerror) u.onerror = function () { opts.onend && opts.onend(); };

    if (!voice && !warned) {
      warned = true;
      toast('No Greek voice found on this device. Audio may sound English — see the note on the home page.');
    }
    synth.speak(u);
    return u;
  }

  function stop() { if (synth) { try { synth.cancel(); } catch (e) {} } }

  function hasGreekVoice() {
    voice = voice || pickVoice();
    return !!voice;
  }

  function setEnabled(on) {
    enabled = !!on;
    if (!on) stop();
  }

  function preferences() {
    return { enabled: enabled, hasVoice: hasGreekVoice(), supported: !!synth };
  }

  return {
    speak: speak, stop: stop, setEnabled: setEnabled,
    isEnabled: function () { return enabled; },
    hasGreekVoice: hasGreekVoice,
    preferences: preferences
  };
})();

/* Small global toast helper (used here and by the app shell). */
function toast(msg, ms) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { el.classList.remove('show'); }, ms || 3200);
}
