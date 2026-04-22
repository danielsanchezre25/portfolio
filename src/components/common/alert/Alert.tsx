import React from 'react';
import './Alert.css';

interface AlertProps {
  message: string;
  type?: 'success' | 'warning' | 'error';
  duration?: number; // milliseconds
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, type, duration, onClose }) => {
  React.useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
}