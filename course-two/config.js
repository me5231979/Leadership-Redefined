/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · settings ══════════
   The one place to change links without touching the course. */
window.LR_CONFIG = {
  storeKey: 'lr2-',
  contact: 'pcb@vanderbilt.edu',
  /* narration clips: ../assets/audio/course-two/<key>.mp3 (home/1 -> home-1.mp3).
     Until a clip exists, Listen reads the same words with the browser's voice. */
  audioBase: '../assets/audio/course-two/',
  mediaVersion: '20261003a',
  /* true until the ElevenLabs narration is recorded: Listen reads each script in the browser's own voice.
     The Record narration workflow sets this to false so the recorded clips play instead. */
  useBrowserVoice: false,
  /* Chancellor intros. Add a WebVTT captions file beside each video and set captions. */
  videos: {
    venture:    { src: '../assets/video/chancellor-entrepreneurial-mindset.mp4', captions: '../assets/video/chancellor-entrepreneurial-mindset.vtt', title: 'Chancellor Daniel Diermeier on the entrepreneurial mindset' },
    reputation: { src: '../assets/video/chancellor-reputational-stewardship.mp4', captions: '../assets/video/chancellor-reputational-stewardship.vtt', title: 'Chancellor Daniel Diermeier on reputational stewardship' },
    teams:      { src: '../assets/video/chancellor-high-performing-teams.mp4', captions: '../assets/video/chancellor-high-performing-teams.vtt', title: 'Chancellor Daniel Diermeier on high-performing teams' }
  },
  /* The alumni series card on the Carry it forward page. Leave text empty to hide the card.
     link is optional: a sign-up or details page. */
  alumni: { text: '', link: '', linkText: 'Learn about the alumni series' },
  exitUrl: ''
};
