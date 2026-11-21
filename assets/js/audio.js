/* Greek audio.
   Every letter, every core word and most course phrases ship as a small MP3
   recorded with a Greek voice, so the pronunciation is Greek on any device.
   Anything without a bundled clip falls back to the device's own Greek voice. */
window.Speech = (function () {
  var synth = window.speechSynthesis || null;
  var voice = null;
  var enabled = true;
  var warned = false;
  var player = null;
  var seqToken = 0;

  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^α-ωa-z0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function files() { return (window.GREEK && window.GREEK.audioFiles) || {}; }
  function letterFiles() { return (window.GREEK && window.GREEK.letterAudio) || {}; }

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

  function halt() {
    if (player) {
      try { player.pause(); player.currentTime = 0; } catch (e) {}
      player = null;
    }
    if (synth) { try { synth.cancel(); } catch (e) {} }
  }

  function stop() {
    seqToken++;
    halt();
  }

  function speakTTS(text, opts) {
    opts = opts || {};
    if (!synth) {
      if (!opts.silent) toast('This browser cannot play speech.');
      opts.onend && opts.onend();
      return null;
    }
    voice = voice || pickVoice();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'el-GR';
    if (voice) u.voice = voice;
    u.rate = opts.rate || 0.82;
    u.pitch = opts.pitch || 1;
    u.volume = 1;
    if (opts.onstart) u.onstart = opts.onstart;
    u.onend = function () { opts.onend && opts.onend(); };
    u.onerror = function () { opts.onend && opts.onend(); };

    if (!voice && !warned) {
      warned = true;
      toast('This device has no Greek voice. Letters and core words still play in Greek; longer texts may sound English.');
    }
    synth.speak(u);
    return u;
  }

  /* Play one bundled clip. */
  function playClip(src, opts) {
    opts = opts || {};
    halt();
    var a = new Audio(src);
    a.preload = 'auto';
    player = a;
    a.onended = function () { if (player === a) player = null; opts.onend && opts.onend(); };
    a.onerror = function () {
      if (player === a) player = null;
      if (!opts.noFallback) speakTTS(opts.text || '', opts);
    };
    var p = a.play();
    if (p && p.catch) {
      p.catch(function () {
        if (player === a) player = null;
        if (!opts.noFallback) speakTTS(opts.text || '', opts);
      });
    }
    return a;
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!enabled && !opts.force) return null;
    text = parse(text);
    if (!text) { opts.onend && opts.onend(); return null; }
    var clip = files()[norm(text)];
    if (clip) return playClip(clip, { text: text, onend: opts.onend, noFallback: opts.noFallback });
    if (synth) { try { synth.cancel(); } catch (e) {} }
    return speakTTS(text, opts);
  }

  /* A single Greek letter, by its glyph: α, β, γ … */
  function speakLetter(ch, opts) {
    var key = String(ch || '').trim().toLowerCase();
    var clip = letterFiles()[key];
    if (clip) return playClip(clip, opts || {});
    return speak(key, opts);
  }

  /* Play a list in order, one item after another. */
  function sequence(items, opts) {
    opts = opts || {};
    var list = (items || []).slice();
    var gap = opts.gap == null ? 260 : opts.gap;
    var i = 0;
    var myToken = seqToken;
    function step() {
      if (myToken !== seqToken) return;
      if (i >= list.length) { opts.onend && opts.onend(); return; }
      var item = list[i++];
      setTimeout(function () {
        if (myToken !== seqToken) return;
        speak(item, { onend: step, force: true });
      }, i === 1 ? 0 : gap);
    }
    step();
  }

  function hasClip(text) { return !!files()[norm(text)]; }

  function hasGreekVoice() {
    voice = voice || pickVoice();
    return !!voice;
  }

  function setEnabled(on) {
    enabled = !!on;
    if (!on) stop();
  }

  function preferences() {
    return {
      enabled: enabled,
      hasVoice: hasGreekVoice(),
      supported: !!(synth || Object.keys(files()).length),
      clips: Object.keys(files()).length
    };
  }

  return {
    speak: speak, speakLetter: speakLetter, sequence: sequence, stop: stop,
    setEnabled: setEnabled, hasGreekVoice: hasGreekVoice, hasClip: hasClip,
    isEnabled: function () { return enabled; },
    preferences: preferences, normalize: norm
  };
})();

/* Small global toast helper (used here and by the app shell). */
function toast(msg, ms) {
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { el.classList.remove('show'); }, ms || 3600);
}
