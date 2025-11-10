
import React, { useState } from 'react';

// The logo image is embedded as a self-contained Base64 data URI to ensure it loads correctly.
const logoDataUri = "./img/logo_highhell_transparente.png";
// A subtle, repeating SVG pattern is used for the background to mimic the original image's texture.
// It's URL-encoded to be used directly in a style attribute.
const svgPatternDataUri = "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cstyle%3E.symbol %7B stroke: rgba(211, 192, 162, 0.05); stroke-width: 1.5; fill: none; %7D%3C/style%3E%3C/defs%3E%3Ccircle class='symbol' cx='40' cy='40' r='18' /%3E%3Cpath class='symbol' d='M40 22 V 58 M 22 40 H 58' /%3E%3Cpath class='symbol' d='M150 30 L 165 55 L 135 55 Z' /%3E%3Ccircle class='symbol' cx='90' cy='150' r='25' /%3E%3Crect class='symbol' x='120' y='110' width='30' height='30' transform='rotate(15, 135, 125)' /%3E%3Cpath class='symbol' d='M10 120 L 50 160' /%3E%3C/svg%3E";

const InstagramIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const translations = {
  pt: {
    mainMessage: "Algo especial está emergindo!",
    instagramAria: "Visite nossa página no Instagram",
    twitterAria: "Visite nossa página no Twitter",
    facebookAria: "Visite nossa página no Facebook",
  },
  en: {
    mainMessage: "Something special is emerging!",
    instagramAria: "Visit our Instagram page",
    twitterAria: "Visit our Twitter page",
    facebookAria: "Visit our Facebook page",
  },
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <main
      className="bg-brand-bg min-h-screen w-full flex flex-col items-center justify-center p-6 text-white overflow-hidden relative"
      style={{ backgroundImage: `url("${svgPatternDataUri}")` }}
    >
      <div className="absolute top-8 right-8 flex items-center space-x-2 font-serif-brand z-10">
        <button
          onClick={() => setLanguage('pt')}
          className={`transition-colors duration-300 text-lg ${language === 'pt' ? 'text-white font-bold underline' : 'text-brand-tan hover:text-white'}`}
          aria-pressed={language === 'pt'}
          aria-label="Mudar idioma para Português"
        >
          PT
        </button>
        <span className="text-brand-tan select-none">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`transition-colors duration-300 text-lg ${language === 'en' ? 'text-white font-bold underline' : 'text-brand-tan hover:text-white'}`}
          aria-pressed={language === 'en'}
          aria-label="Change language to English"
        >
          EN
        </button>
      </div>

      <div className="flex flex-col items-center justify-center animate-fadeIn">
        <img
          src={logoDataUri}
          alt="Project Logo"
          className="w-80 h-auto object-contain animate-pulse-slow drop-shadow-2xl"
        />
        <p className="mt-2 font-serif-brand text-brand-tan text-3xl text-center tracking-wider [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          {translations[language].mainMessage}
        </p>
      </div>
      <footer className="absolute bottom-8 left-0 right-0">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="#"
            aria-label={translations[language].instagramAria}
            className="text-brand-tan hover:text-white transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label={translations[language].twitterAria}
            className="text-brand-tan hover:text-white transition-colors duration-300"
          >
            <TwitterIcon />
          </a>
          <a
            href="#"
            aria-label={translations[language].facebookAria}
            className="text-brand-tan hover:text-white transition-colors duration-300"
          >
            <FacebookIcon />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default App;
