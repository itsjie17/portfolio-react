import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else if (delay === 0) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (hasStarted && !isComplete && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (hasStarted && currentIndex >= text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isComplete, hasStarted]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

export default TypingAnimation;
