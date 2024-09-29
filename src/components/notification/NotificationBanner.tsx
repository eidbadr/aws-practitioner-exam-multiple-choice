import React, { useEffect, useState } from 'react';
import './NotificationBanner.css';

interface NotificationBannerProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ message, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        onClose(); // Hide after 3 seconds
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [show, onClose]);

  if (!visible) return null;

  return (
    <div className="notification-banner">
      {message}
    </div>
  );
};

export default NotificationBanner;
