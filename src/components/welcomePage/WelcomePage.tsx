import React from 'react';
import './WelcomePage.css'; // Import the styles for WelcomePage
import domainConfig from '../../config/domainConfig'; // Import the domain config

const WelcomePage: React.FC = () => {
  const { domain } = domainConfig; // Extract the domain from the config file

  return (
    <div className="welcome-page">
      <h1>Welcome to the Quiz Platform</h1>
      <p>Please select a quiz from below:</p>
      <ul>
        <li>
          {/* Use the domain from the config to build the URL */}
          <a href={`https://clfc02-aws.${domain}`}>AWS Cloud Certified Practitioner Exam Training</a>
        </li>
        <li>
          {/* Use the domain from the config to build the URL */}
          <a href={`https://vocab-c1-de.${domain}`}>Vokabel C1 Deutsch</a>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
