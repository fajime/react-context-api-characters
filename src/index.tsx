import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import global_en from './assets/locales/en/global.json';
import global_es from './assets/locales/es/global.json';

import './tailwind.css';
import './index.css';
import App from './App';

i18next
.use(initReactI18next)
.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: { global: global_es },
    en: { global: global_en }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

