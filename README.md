# Meridian — the client is a thread

A narrated, interactive concept of the future UHNW advisor workspace. Static site: `index.html`, `styles.css`, `demo.js`, `audio/*.mp3`.

- Passphrase gate is client-side (SHA-256 of the passphrase in `demo.js`) — it keeps casual visitors out, it is not security.
- Narration audio was generated with Kokoro (local TTS). To re-voice, replace `audio/s0.mp3 … s8.mp3` (s2a/s2b are the two beats of scene 2); the player falls back to the browser's own voice if a file is missing.
- Keys: → ← Space Esc. "Design notes" toggle top-right.

Publish: push to a GitHub repo, Settings → Pages → Deploy from branch `main` / root.
