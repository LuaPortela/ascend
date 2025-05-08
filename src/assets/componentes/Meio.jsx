import React, { useState, useEffect } from 'react';
import Styles from '../css/Meio.module.css';
import Video from '../../assets/Final.mp4';

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['tech', '<tech/>'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <span
      className={`${Styles.typing} ${
        displayText === '<tech/>' ? Styles.neonGreen : ''
      }`}
    >
      {displayText}
    </span>
  );
};

function Meio() {
  return (
    <section className={Styles.home}>
      <div className={Styles.video}>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className={Styles.container}>
        <h1>
          Sua jornada em tecnologia <br /> começa agora.
        </h1>
        <p>
          Aprenda, conecte-se e cresça com nossa <br /> comunidade{' '}
          <TypingEffect />!
        </p>
        <div className={Styles.comecar}>
          <a href="#cards-section">
            <button>Saiba Mais</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Meio;