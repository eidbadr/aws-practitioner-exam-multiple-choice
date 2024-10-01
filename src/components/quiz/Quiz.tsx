import React, { useState, useEffect, ChangeEvent } from 'react';
import './Quiz.css'; // Import the styles for Quiz component
import NotificationBanner from '../notification/NotificationBanner'; // Import the NotificationBanner
import subdomainConfig from '../../config/SubdomainConfig';
import WelcomePage from '../welcomePage/WelcomePage';

interface Question {
  sequenceNumber: string;
  question: string;
  choices: string[];
  correctAnswer: number;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCorrect, setShowCorrect] = useState<boolean>(false);
  const [jumpQuestion, setJumpQuestion] = useState<string>(''); // State for input field to jump to a question
  const [error, setError] = useState<string>(''); // State to store any validation errors
  const [showBanner, setShowBanner] = useState<boolean>(false); // Show or hide the notification banner
  const [title, setTitle] = useState<string>(''); // State for dynamic title

  useEffect(() => {
    const subdomain = getSubdomain();

    // If the subdomain is www or empty, show the welcome page instead of the quiz
    if (subdomain === 'www' || subdomain === '') {
      return; // Stop execution if we're showing the welcome page
    }

    // Determine the correct question file and title based on the subdomain
    const { file, title } = determineSubdomainConfig(subdomain);

    // Set the dynamic title
    setTitle(title);

    // Fetch questions from the appropriate file
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        const parsedQuestions = parseQuestions(text);
        setQuestions(parsedQuestions);
      });
  }, []);

  // Function to get the subdomain
  const getSubdomain = (): string => {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    return subdomain;
  };

  // Function to determine the question file and title based on the subdomain
  const determineSubdomainConfig = (subdomain: string): { file: string; title: string } => {
    return subdomainConfig[subdomain] || subdomainConfig['www']; // Fallback to www if subdomain is not found
  };

  // Function to parse the txt file content into questions with sequence numbers
  const parseQuestions = (text: string): Question[] => {
    const lines = text.split('\n').filter((line) => line.trim() !== '');
    const questionSet: Question[] = [];

    for (let i = 0; i < lines.length; i += 6) {
      const sequenceQuestion = lines[i].trim();
      const sequenceNumber = sequenceQuestion.split('.')[0]; // Extract sequence number
      const questionText = sequenceQuestion.split('. ')[1]; // Extract question text

      questionSet.push({
        sequenceNumber,
        question: questionText,
        choices: [
          lines[i + 1].trim(),
          lines[i + 2].trim(),
          lines[i + 3].trim(),
          lines[i + 4].trim(),
        ],
        correctAnswer: parseInt(lines[i + 5].trim(), 10) - 1, // 0-based index for correct answer
      });
    }

    return questionSet;
  };

  // Handle answer selection
  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    setShowCorrect(true);
  };

  // Move to the next question (loop back to the first question if on the last question)
  const handleNextClick = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      // If on the last question, go back to the first question
      setCurrentQuestionIndex(0);
    } else {
      // Otherwise, go to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setSelectedAnswer(null);
    setShowCorrect(false);
  };

  // Handle skipping to a specific question
  const handleSkipQuestion = () => {
    const questionNumber = parseInt(jumpQuestion, 10);

    if (!isNaN(questionNumber) && questionNumber > 0 && questionNumber <= questions.length) {
      setCurrentQuestionIndex(questionNumber - 1); // Adjust for 0-based index
      setSelectedAnswer(null);
      setShowCorrect(false);
      setError(''); // Clear any previous error
    } else {
      setError(`Please enter a valid question number between 1 and ${questions.length}`);
      setShowBanner(true); // Show the notification banner with error
    }
  };

  // Handle input change for question number
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJumpQuestion(e.target.value);
  };

  // If there's no subdomain or the subdomain is www, show the welcome page
  const subdomain = getSubdomain();
  if (subdomain === 'www' || subdomain === '' || subdomain === 'localhost') {
    return <WelcomePage />; // Show the WelcomePage component if no subdomain or www
  }

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-section">
      {/* Notification Banner */}
      <NotificationBanner
        message={error}
        show={showBanner}
        onClose={() => setShowBanner(false)} // Automatically hide the banner
      />

      {/* Centered Title */}
      <h1 className="quiz-title">{title}</h1>

      <div className="skip-section">
        <input
          type="number"
          placeholder="Enter question number"
          value={jumpQuestion}
          onChange={handleInputChange}
          className="skip-input"
        />
        <button onClick={handleSkipQuestion} className="skip-button">
          Skip to Question
        </button>
      </div>

      <div className="question-section">
        <h2>{`${currentQuestion.sequenceNumber}. ${currentQuestion.question}`}</h2>
        <div className="choices">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              className={`choice-button ${
                showCorrect
                  ? index === currentQuestion.correctAnswer
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleAnswerClick(index)}
              disabled={showCorrect}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
