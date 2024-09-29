import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookiesAccepted');
    if (!consent) {
      setShowBanner(true);
    } else {
      setCookiesAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && !cookiesAccepted && (
        <div className="cookie-consent-banner">
          <p>
            We use cookies to improve your experience on our site. By accepting, you agree to the use of all cookies.
          </p>
          <div className="cookie-consent-buttons">
            <button className="accept-btn" onClick={handleAccept}>Accept</button>
            <button className="decline-btn" onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
