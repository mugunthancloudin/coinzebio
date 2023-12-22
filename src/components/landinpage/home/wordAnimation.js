import React, { useState, useEffect } from 'react';

const WordAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let letterIndex = isTyping ? 0 : words[currentWordIndex].length;
    let intervalId;

    const animateLetters = () => {
      if (isTyping) {
        if (letterIndex < words[currentWordIndex].length) {
          letterIndex++;
          setCurrentWord(words[currentWordIndex].slice(0, letterIndex));
        } else {
          setTimeout(() => setIsTyping(false), 500);
          clearInterval(intervalId);
        }
      } else {
        if (letterIndex > 0) {
          letterIndex--;
          setCurrentWord(words[currentWordIndex].slice(0, letterIndex));
        } else {
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsTyping(true);
          }, 2000);
          clearInterval(intervalId);
        }
      }
    };

    intervalId = setInterval(animateLetters,50);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, isTyping, words]);

  return (    
    <div className="typist text-warning">
      <h1>{currentWord}<span className="cursor">|</span></h1>     
    </div>
  );
};

export default WordAnimation;
