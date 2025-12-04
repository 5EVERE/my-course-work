import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '756d0263-cd7a-4db7-bdd0-a9233bd29ec0',
  clientToken: 'pub5f8bdb4afaa56c0b2f5f390d1941f5dc',
  site: 'datadoghq.eu',
  service: 'my-course-work',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackBfcacheViews: true,
  defaultPrivacyLevel: 'mask-user-input',
});
datadogRum.startSessionReplayRecording();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// docker build --no-cache -t react-app-test .
// docker rm -f $(docker ps -aq)
// docker run -d -p 8080:80 react-app-test