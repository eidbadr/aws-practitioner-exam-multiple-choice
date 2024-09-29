import React from 'react';
import Quiz from './components/quiz/Quiz'; // Import the Quiz component
import './App.css'; // Import global styles
import CookieConsent from './components/cookiesConsent/CookiesConsent';

const App: React.FC = () => {
  return (
    <div className="app">
      <Quiz />
      <CookieConsent />

    </div>
  );
};

export default App;
