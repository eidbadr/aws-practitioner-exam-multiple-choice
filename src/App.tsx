import React from 'react';
import Quiz from './components/quiz/Quiz'; // Import the Quiz component
import './App.css'; // Import global styles

const App: React.FC = () => {
  return (
    <div className="app">
      <Quiz />
    </div>
  );
};

export default App;
