import React from 'react';
import ReactDOM from 'react-dom/client';
import 'lenis/dist/lenis.css';
import './styles/base.css';
import './styles/components.css';
import './styles/art.css';
import './styles/shots.css';
import './styles/home.css';
import './styles/pages.css';
import App from './App';

const render = () =>
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

// Fonts are preloaded in index.html, so this is usually instant. Waiting for them
// means the first frame already uses the real fonts (no swap/jump). Capped at 1s.
const fontsReady = document.fonts
  ? Promise.all([
      document.fonts.load('650 1em "Bricolage Grotesque"'),
      document.fonts.load('400 1em "Plus Jakarta Sans"'),
    ])
  : Promise.resolve();
Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1000))]).then(render, render);
