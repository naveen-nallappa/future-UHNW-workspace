/* Meridian — scene player. State lives in JS variables for the session only. */
(function () {
  'use strict';

  /* ───────── narration, notes, sequence ───────── */
  const STEPS = [
    { id: 's0', say: 'Every tool we use today is organised by the kind of object it holds. The person walks between them. This concept does something different. It organises the work by relationship, and by time. And it lets agents into the conversation, as participants, with visible authority. What follows is one Monday morning. One client event. And the four people and agents who touch it.', scene: 0, label: 'Thesis', audio: 'audio/s0.mp3', h: 760,
      text: "Every tool we use today is organised by the kind of object it holds. The person walks between them. This concept organises the work by relationship and by time instead, and lets agents into the conversation as participants with visible authority. What follows is one Monday morning, one client event, and the four people and agents who touch it.",
      note: "The thesis. The client is a thread. The day is a plan for the advisor's attention. Nothing on screen is a dashboard: the workspace is organised by relationship and time, not by object type, and the agents are participants in the thread who act under visible authority." },
    { id: 's1', say: 'There is no home page. The agent proposes how Daniel should spend his attention, across existing clients, new clients, and the world, in time order. And he edits the plan by talking to it. Decisions come first, because two of them have external clocks. New business is the second thing he sees. And the Okonkwo call has no draft attached, on purpose. Some gestures are not automated.', scene: 1, label: "Daniel's day", audio: 'audio/s1.mp3', h: 1180,
      text: "There is no home page. The agent proposes how Daniel should spend his attention across existing clients, new clients and the world, in time order, and he edits the plan by talking to it. Decisions come first because two have external clocks. New business is the second thing he sees. The Okonkwo call has no draft attached on purpose: some gestures are not automated.",
      note: "Rule 1 — there is no navigation rail and no module list. The only ways to move are the command bar (⌘K), a household's name, and the links inside a thread. Try it: the ⌘K bar, the Whitfield name, or Release." },
    { id: 's2a', say: 'A question does not open a page. The answer lands under the bar, in the same shape every time. One sentence. Then the reasoning. Then at most one or two objects. Then where it can go. The plan is still there underneath. When Daniel is done, the answer goes into a time slot, or a thread. Or it goes away.', scene: 2, label: 'Asking the day', audio: 'audio/s2a.mp3', h: 860, typed: { el: 'q2a', text: "What would Eleanor ask about today's tape?" },
      text: "A question does not open a page. The answer lands under the bar in the same shape every time, one sentence, then the reasoning, then at most one or two objects, then where it can go. The plan is still there underneath. When Daniel is done the answer goes into a time slot or a thread, or it goes away.",
      note: "Rule 3 — an answer to a question is a layer, not a page. It appears under the command bar, the screen beneath collapses to one line, and the answer either goes somewhere (a thread, a time slot, a pack) or is dismissed. It never creates a new place to go. Try: Add to 8:25, Same for Ana Rojas, or Esc." },
    { id: 's2b', say: 'Advisors spend the first part of every morning getting up to speed on the world, so they can talk about it with whoever calls. Here, the briefing is filtered through the book, rather than replacing the newspaper. Every item names the households it touches, or says it touches none. And the lines for the likely questions are already written. Brief me like this before every call turns a question into a standing instruction. That is how the plan on scene one learns.', scene: 2, label: 'The world', audio: 'audio/s2b.mp3', h: 860, typed: { el: 'q2b', text: "Catch me up on the world before my calls." },
      text: "Advisors spend the first part of every morning getting up to speed on the world so they can talk about it with whoever calls. Here the briefing is filtered through the book rather than replacing the newspaper: every item names the households it touches, or says it touches none, and the lines for the likely questions are already written. 'Brief me like this before every call' turns a question into a standing instruction, which is how the plan on Scene 1 learns.",
      note: "Rule 2 — every figure that is not a relationship fact lives inside a sentence. The tape is filtered through the book: each line names the households it touches. Try: Only what touches my clients, or Brief me like this before every call today, then go back to Scene 1." },
    { id: 's3', say: 'The client table is gone. The book is a list of threads, ordered by who needs attention. And the line under each name is what the agents would tell you, if you asked. Prospects live in their own list, because winning clients is the other half of the job. Beaumont is coloured, because it is the one thing on this page that should bother him.', scene: 3, label: 'The book', audio: 'audio/s3.mp3', h: 1180,
      text: "The client table is gone. The book is a list of threads, ordered by who needs attention, and the line under each name is what the agents would tell you if you asked. Prospects live in their own list because winning clients is the other half of the job. Beaumont is coloured because it is the one thing on this page that should bother him.",
      note: "Rule 2 again — relationship facts (AUS, YTD net, share of wallet, last conversation) appear once, in a fixed strip, laid out the same way on every household. Everything else is a sentence the agents wrote. Try: click the ⌘K bar to ask the book a question, or click Whitfield." },
    { id: 's4', say: "This is the relationship, in order. Eleanor's email. The agent's draft. The staged money movement. And Daniel's decision. They are one conversation, and the gates are lines in it, rather than a separate system. The desk on the right is where Daniel does his own analysis. It is private to him, and on the record for supervision. Nothing there reaches a client unless he moves it into the thread.", scene: 4, label: 'The thread', audio: 'audio/s4.mp3', h: 980,
      text: "This is the relationship, in order. Eleanor's email, the agent's draft, the staged money movement and Daniel's decision are one conversation, and the gates are lines in it rather than a separate system. The desk on the right is where Daniel does his own analysis. It is private to him and on the record for supervision; nothing there reaches a client unless he moves it into the thread.",
      note: "Rules 5 and 6 — private analysis (the desk) is on the record and never client-visible; three audiences exist everywhere: the client, the team, and only me. Gates are part of the conversation: approvals, callbacks and supervision's pre-read are quiet lines inside the thread. Try: Release all three, the desk tabs, or Add to Thursday's pack." },
    { id: 's5', say: 'Anything Daniel makes for a client is a page in the next pack, or a message in the thread. Never a loose exhibit. He authors it the same way Maya authors the deck: by saying what he wants, and reacting to what comes back. His edits are the version history. Supervision reads the pack before it releases on Wednesday. And hand to Maya is there for the advisor who would rather direct than draft.', scene: 5, label: 'Making a page', audio: 'audio/s5.mp3', h: 900,
      text: "Anything Daniel makes for a client is a page in the next pack or a message in the thread, never a loose exhibit. He authors it the same way Maya authors the deck, by saying what he wants and reacting to what comes back; his edits are the version history. Supervision reads the pack before it releases on Wednesday. 'Hand to Maya' is there for the advisor who would rather direct than draft.",
      note: "Rule 4 — anything the advisor makes for a client is a page in the next pack or a message in the thread. There are no standalone exhibits and no library of analyses. Try: Keep as page 3, Send this page to Eleanor now, or Hand to Maya." },
    { id: 's6', say: "The analyst's day is the same shape. Work arrives drafted overnight, and she shapes it. She never opens PowerPoint. The deck on the right is the object Daniel approves, and Eleanor sees on Thursday. The thread on the left is its edit history, and its audit trail. Every figure carries lineage back to the reconciled ledger.", scene: 6, label: 'Shaping the deck', audio: 'audio/s6.mp3', h: 900,
      text: "The analyst's day is the same shape: work arrives drafted overnight and she shapes it. She never opens PowerPoint. The deck on the right is the object Daniel approves and Eleanor sees on Thursday, and the thread on the left is its edit history and its audit trail. Every figure carries lineage back to the reconciled ledger.",
      note: "The analyst's surface is the same shape as the advisor's: a thread on the left, the object on the right. Her three messages are the version history and the audit trail. Try: click any underlined figure on the slide for its lineage." },
    { id: 's7', say: 'Eleanor is in the same thread, seeing only what was released to her. This is the client portal, and it required no separate product. The audience picker on every entry decides what she sees. Her reply lands back in the same thread, where the agents and the team pick it up. One last thought. These same screens carry Horizon 2. In 2032, the agents write most of the transcript, and the human entries are approvals and challenges. What has to be built early is not the interface. It is the encoding: standing instructions, authority maps, tone profiles, and review policy. Years of firm knowledge, made executable. All names, firms and figures here are fictional.', scene: 7, label: "Eleanor's phone", audio: 'audio/s7.mp3', h: 930,
      text: "Eleanor is in the same thread, seeing only what was released to her. This is the client portal, and it required no separate product: the audience picker on every entry decides what she sees. Her reply lands back in the same thread, where the agents and the team pick it up. The same screens carry Horizon 2: in 2032 the agents write most of the transcript and the human entries are approvals and challenges. What has to be built early is not the interface but the encoding — standing instructions, authority maps, tone profiles and review policy. All names, firms and figures here are fictional.",
      note: "Rule 5 from the client's side — the audience picker on every entry decides what she sees. Nothing internal is visible: not the desk, not the wire, not the agents. Try: Why not sell it all?" },
  ];
  const TOTAL_SCENES = 8;

  /* ───────── gate ───────── */
  const GATE_HASH = '4179f5b763f02f590c08c8d7880ac9af606ae43ed9dce1920ed36154e0f5e585';
  const gate = document.getElementById('gate');
  const app = document.getElementById('app');
  const gateForm = document.getElementById('gateForm');
  const gateInput = document.getElementById('gateInput');
  const gateError = document.getElementById('gateError');

  async function sha256(s) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  function unlock() {
    gate.hidden = true;
    app.hidden = false;
    try { sessionStorage.setItem('meridian-open', '1'); } catch (e) {}
    boot();
  }
  gateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const v = gateInput.value.trim();
    let ok = false;
    try { ok = (await sha256(v)) === GATE_HASH; } catch (err) { ok = false; }
    if (ok) unlock(); else { gateError.hidden = false; gateInput.select(); }
  });
  try { if (sessionStorage.getItem('meridian-open') === '1') unlock(); } catch (e) {}

  /* ───────── player ───────── */
  let booted = false;
  let idx = 0;
  let playing = false;
  let voiceOn = true;
  let advanceTimer = null;
  let typeTimer = null;

  const stage = document.getElementById('stage');
  const viewport = document.getElementById('viewport');
  const caption = document.getElementById('caption');
  const counter = document.getElementById('counter');
  const chapters = document.getElementById('chapters');
  const notes = document.getElementById('notes');
  const notesToggle = document.getElementById('notesToggle');
  const toast = document.getElementById('toast');
  const voice = document.getElementById('voice');
  const btnPrev = document.getElementById('prev');
  const btnNext = document.getElementById('next');
  const btnPlay = document.getElementById('play');
  const btnMute = document.getElementById('mute');

  function boot() {
    if (booted) return; booted = true;
    // chapter nav — one button per scene (scene 2 has two beats)
    const seen = new Set();
    STEPS.forEach((s, i) => {
      if (seen.has(s.scene)) return; seen.add(s.scene);
      const b = document.createElement('button');
      b.textContent = (s.scene) + ' · ' + (s.scene === 2 ? 'Asking' : s.label);
      b.dataset.step = i;
      b.addEventListener('click', () => go(i, true));
      chapters.appendChild(b);
    });
    wireInteractions();
    window.addEventListener('resize', fit);
    document.addEventListener('keydown', onKey);
    voice.addEventListener('ended', onVoiceEnded);
    voice.addEventListener('error', onVoiceError);
    go(0, false);
  }

  function fit() {
    const step = STEPS[idx];
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    const el = document.getElementById(step.id);
    const h = Math.max(step.h, el ? Math.max(el.offsetHeight, el.scrollHeight) : 0);
    let scale = Math.min(vw / 1280, (vh - 8) / h, 1.1);
    // Below ~0.72 the type gets hard to read: keep it larger and let the viewport scroll instead.
    if (scale < 0.72) scale = Math.min(vw / 1280, 0.85);
    stage.style.transform = 'translateX(-50%) scale(' + scale + ')';
    stage.style.height = Math.ceil(h * scale) + 'px';
    viewport.scrollTop = 0;
  }

  function go(i, byUser) {
    if (i < 0 || i >= STEPS.length) return;
    clearTimeout(advanceTimer); clearTimeout(typeTimer);
    hideLineage(); hideToast();
    idx = i;
    const step = STEPS[idx];
    document.querySelectorAll('.scene').forEach(s => s.classList.toggle('on', s.id === step.id));
    caption.textContent = step.text;
    caption.scrollTop = 0;
    counter.textContent = 'Scene ' + step.scene + ' of ' + (TOTAL_SCENES - 1) + (step.id === 's2b' ? ' · second beat' : '');
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === STEPS.length - 1;
    chapters.querySelectorAll('button').forEach(b => b.classList.toggle('on', +b.dataset.step === firstStepOfScene(step.scene)));
    notes.innerHTML = '<h4>Design note · scene ' + step.scene + '</h4>' + step.note;
    fit();
    if (step.typed) typeInto(step.typed.el, step.typed.text);
    if (playing) speak(step); else stopVoice();
    if (byUser && playing) { /* keep playing */ }
  }
  function firstStepOfScene(n) { return STEPS.findIndex(s => s.scene === n); }

  function typeInto(elId, text) {
    const el = document.getElementById(elId);
    el.textContent = ''; el.classList.remove('done');
    let n = 0;
    (function tick() {
      n++;
      el.textContent = text.slice(0, n);
      if (n < text.length) typeTimer = setTimeout(tick, 28); else el.classList.add('done');
    })();
  }

  /* ───────── play / voice ───────── */
  function setPlaying(p) {
    playing = p;
    btnPlay.textContent = p ? '❚❚ Pause' : '▶ Play';
    if (p) speak(STEPS[idx]); else { stopVoice(); clearTimeout(advanceTimer); }
  }
  function speak(step) {
    stopVoice();
    if (!voiceOn) { scheduleAdvance(20000); return; }
    voice.src = step.audio;
    const p = voice.play();
    if (p && p.catch) p.catch(() => fallbackSpeak(step));
  }
  function stopVoice() {
    try { voice.pause(); voice.removeAttribute('src'); voice.load(); } catch (e) {}
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
  function onVoiceEnded() { if (playing) scheduleAdvance(1800); }
  function onVoiceError() { if (playing) fallbackSpeak(STEPS[idx]); }
  function fallbackSpeak(step) {
    // No audio file reachable: use the browser's own voice, else a timer.
    if (window.speechSynthesis && window.SpeechSynthesisUtterance) {
      const u = new SpeechSynthesisUtterance(step.text);
      u.rate = 0.98; u.onend = () => { if (playing) scheduleAdvance(1800); };
      window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
    } else scheduleAdvance(20000);
  }
  function scheduleAdvance(ms) {
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(() => {
      if (!playing) return;
      if (idx < STEPS.length - 1) go(idx + 1, false); else setPlaying(false);
    }, ms);
  }

  btnPrev.addEventListener('click', () => go(idx - 1, true));
  btnNext.addEventListener('click', () => go(idx + 1, true));
  btnPlay.addEventListener('click', () => setPlaying(!playing));
  btnMute.addEventListener('click', () => {
    voiceOn = !voiceOn; btnMute.textContent = voiceOn ? '🔊' : '🔇';
    if (playing) speak(STEPS[idx]);
  });
  notesToggle.addEventListener('change', () => { notes.hidden = !notesToggle.checked; });

  function onKey(e) {
    if (app.hidden) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1, true); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1, true); }
    else if (e.key === ' ') { e.preventDefault(); setPlaying(!playing); }
    else if (e.key === 'Escape') {
      const id = STEPS[idx].id;
      if (id === 's2a' || id === 's2b') go(firstStepOfScene(1), true);
      else if (id === 's3' && bookAsked) clearBook();
      else hideLineage();
    }
  }

  /* ───────── toast ───────── */
  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg; toast.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(hideToast, 2600);
  }
  function hideToast() { toast.hidden = true; }

  /* ───────── interactions named in the storyboard ───────── */
  let bookAsked = false;
  function askBook() {
    if (bookAsked) return; bookAsked = true;
    const bar = document.getElementById('bookBar');
    bar.style.borderColor = '#1b1a17';
    const q = document.getElementById('bookQ'); q.style.color = '#1b1a17'; q.textContent = '';
    document.getElementById('bookEsc').hidden = false;
    document.getElementById('bookLists').hidden = true;
    document.getElementById('bookAnswer').hidden = false;
    const text = "Who is most exposed to software, counting what we don't manage?";
    let n = 0; (function tick() { n++; q.textContent = text.slice(0, n); if (n < text.length) typeTimer = setTimeout(tick, 24); })();
  }
  function clearBook() {
    bookAsked = false;
    const bar = document.getElementById('bookBar'); bar.style.borderColor = '';
    const q = document.getElementById('bookQ'); q.style.color = ''; q.textContent = 'Ask the book — “who is most exposed to software?” · “which families have a liquidity event this year?”';
    document.getElementById('bookEsc').hidden = true;
    document.getElementById('bookLists').hidden = false;
    document.getElementById('bookAnswer').hidden = true;
  }

  const ACTIONS = {
    addTo825() { document.getElementById('dayExtra').hidden = false; go(firstStepOfScene(1), true); showToast('Added to 8:25 — Eleanor’s three questions, lines ready'); },
    rojas() { document.getElementById('ans2a').hidden = true; document.getElementById('ans2r').hidden = false; typeInto('q2a', 'What would Ana Rojas ask about today’s tape?'); },
    backEleanor() { document.getElementById('ans2r').hidden = true; document.getElementById('ans2a').hidden = false; typeInto('q2a', "What would Eleanor ask about today's tape?"); },
    addWorld() { document.getElementById('dayWorld').hidden = false; go(firstStepOfScene(1), true); showToast('Added to 8:25 — the world before your calls'); },
    standing() {
      showToast('Standing for today — a brief lands 10 minutes before each call');
      document.getElementById('cb1115').hidden = false; document.getElementById('cb300').hidden = false;
    },
    onlyClients() {
      document.querySelectorAll('#s2b .tape-all, #s2b .tape-none').forEach(r => r.hidden = true);
      document.getElementById('worldPara').hidden = true; document.getElementById('worldParaShort').hidden = false;
    },
    askBook, clearBook,
    releaseAll() {
      document.getElementById('decision').hidden = true;
      const d = document.getElementById('decisionDone'); d.hidden = false;
      d.textContent = 'Released 8:31 · reply to Eleanor, sale, wire staged for Nov 3 · logged';
      const w = document.getElementById('wireGate'); w.style.color = '#2e6b4f'; w.textContent = '✓ Daniel’s approval · 8:31';
    },
    replyOnly() {
      document.getElementById('decision').hidden = true;
      const d = document.getElementById('decisionDone'); d.hidden = false;
      d.textContent = 'Reply released · funding held · Maya notified';
    },
    keepPage() { document.getElementById('thumb4').classList.add('thumb-on'); document.getElementById('packStatus').textContent = 'page 3 kept · releases Wed 6 PM'; },
    sendPage() { document.getElementById('packStatus').textContent = 'staged with the reply · nothing new to approve'; },
    phoneWhy() {
      const s = document.getElementById('phoneStream');
      document.getElementById('quickReplies').hidden = true;
      const m = document.createElement('div'); m.className = 'bub-me fade-in'; m.textContent = 'Why not sell it all?';
      const t = document.createElement('span'); t.style.cssText = 'align-self:flex-end;font-size:12px;color:#8a857c;margin-top:-10px'; t.textContent = '9:52 AM';
      const n = document.createElement('div'); n.className = 'bub-note fade-in'; n.textContent = 'Team only · Reply drafted — the ≈ $1.5M tax line, in her words · in Maya’s queue';
      s.appendChild(m); s.appendChild(t); s.appendChild(n); s.scrollTop = s.scrollHeight;
    },
    phoneYes() {
      const s = document.getElementById('phoneStream');
      document.getElementById('quickReplies').hidden = true;
      const m = document.createElement('div'); m.className = 'bub-me fade-in'; m.textContent = 'Sounds good, go ahead';
      const t = document.createElement('span'); t.style.cssText = 'align-self:flex-end;font-size:12px;color:#8a857c;margin-top:-10px'; t.textContent = '9:52 AM';
      const n = document.createElement('div'); n.className = 'bub-note fade-in'; n.textContent = 'Team only · Client consent logged 9:52 · sale and line draw proceed under the open approval';
      s.appendChild(m); s.appendChild(t); s.appendChild(n); s.scrollTop = s.scrollHeight;
    }
  };

  function wireInteractions() {
    stage.addEventListener('click', (e) => {
      const el = e.target.closest('.act, .lineage-fig');
      if (!el) { hideLineage(); return; }
      e.preventDefault();
      if (playing) setPlaying(false);           // any click pauses the tour
      if (el.classList.contains('lineage-fig')) { showLineage(el); return; }
      if (el.dataset.go) { go(STEPS.findIndex(s => s.id === el.dataset.go), true); return; }
      if (el.dataset.action && ACTIONS[el.dataset.action]) { ACTIONS[el.dataset.action](); return; }
      if (el.dataset.tab) { switchDesk(el); return; }
      if (el.dataset.toast) {
        showToast(el.dataset.toast);
        if (el.dataset.done) { const row = el.closest('.drow'); if (row) row.classList.add('row-done'); }
      }
    });
  }

  function switchDesk(tab) {
    document.querySelectorAll('#deskTabs .dtab').forEach(t => t.classList.toggle('on', t === tab));
    const name = tab.dataset.tab;
    const drawn = name === 'Allocation' || name === 'Net worth';
    document.getElementById('deskAlloc').hidden = !drawn;
    document.getElementById('deskNW').hidden = !drawn;
    const o = document.getElementById('deskOther'); o.hidden = drawn;
    document.getElementById('deskOtherName').textContent = name;
  }

  function showLineage(el) {
    const box = document.getElementById('lineage');
    const [title, body] = el.dataset.lin.split('|');
    box.innerHTML = '<b>' + title + '</b><br>' + body + '<br><span style="color:#2e6b4f">✓ certified</span>';
    box.hidden = false;
    const host = box.parentElement.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const scale = host.width / box.parentElement.offsetWidth;
    box.style.left = Math.max(0, (r.left - host.left) / scale) + 'px';
    box.style.top = ((r.bottom - host.top) / scale + 8) + 'px';
  }
  function hideLineage() { const b = document.getElementById('lineage'); if (b) b.hidden = true; }

})();
