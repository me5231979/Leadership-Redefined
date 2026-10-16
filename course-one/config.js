/* ══════════ LEADERSHIP REDEFINED · COURSE ONE · settings ══════════
   The one place to change links without touching the course. */
window.LR_CONFIG = {
  storeKey: 'lr1-',
  contact: 'https://teams.microsoft.com/l/channel/19%3AKq-Bk3AJFCl3GSN1rvJiT3pP2IJpARPBNfLnns6QwWY1%40thread.tacv2/General?groupId=e8c6249a-bd4c-42c4-9261-33acde6b0c81&tenantId=ba5a7f39-e3be-4ab3-b450-67fa80faecad',
  /* narration clips: ../assets/audio/course-one/<key>.mp3 (home/1 -> home-1.mp3).
     Until a clip exists, Listen reads the same words with the browser's voice. */
  audioBase: '../assets/audio/course-one/',
  mediaVersion: '20261003a',
  /* true until the ElevenLabs narration is recorded: Listen reads each script in the browser's own voice.
     The Record narration workflow sets this to false so the recorded clips play instead. */
  useBrowserVoice: false,
  /* Chancellor intros. Add a WebVTT captions file beside each video and set
     captions, for example '../assets/video/chancellor-communication.vtt'. */
  videos: {
    margin:        { src: '../assets/video/chancellor-mission-and-margin.mp4', captions: '../assets/video/chancellor-mission-and-margin.vtt', title: 'Chancellor Daniel Diermeier on mission and margin' },
    reputation: { src: '../assets/video/chancellor-reputational-stewardship.mp4', captions: '../assets/video/chancellor-reputational-stewardship.vtt', title: 'Chancellor Daniel Diermeier on reputational stewardship' }
  },
  exitUrl: ''
};
