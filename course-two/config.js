/* ══════════ LEADERSHIP REDEFINED · COURSE TWO · settings ══════════
   The one place to change links without touching the course. */
window.LR_CONFIG = {
  storeKey: 'lr2-',
  contact: 'matthew.estes@vanderbilt.edu',
  /* narration clips: ../assets/audio/course-two/<key>.mp3 (home/1 -> home-1.mp3).
     Until a clip exists, Listen reads the same words with the browser's voice. */
  audioBase: '../assets/audio/course-two/',
  mediaVersion: '20261002a',
  /* Chancellor intros. Add a WebVTT captions file beside each video and set captions. */
  videos: {
    venture:    { src: '../assets/video/chancellor-entrepreneurial-mindset.mp4', captions: '', title: 'Chancellor Diermeier on the entrepreneurial mindset' },
    reputation: { src: '../assets/video/chancellor-reputational-stewardship.mp4', captions: '', title: 'Chancellor Diermeier on reputational stewardship' },
    teams:      { src: '../assets/video/chancellor-high-performing-teams.mp4', captions: '', title: 'Chancellor Diermeier on high-performing teams' }
  },
  exitUrl: ''
};
