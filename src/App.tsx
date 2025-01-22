import './App.css';
import '../src/index.css';
import Header from './modules/Header';
import Hero from './modules/Hero';
import Content from './modules/MainContent';
import TextContent from './modules/TextContent';
import Footer from './modules/Footer';
// @ts-ignore
import theme from './assets/siegeskranz.mp3';
import { useEffect } from 'react';

function App() {
  let audio = new Audio(theme);

  const startAudio = () => {
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  };

  useEffect(() => {
    // Benutzerinteraktion registrieren
    window.addEventListener('click', startAudio, { once: true });

    return () => {
      // Cleanup Event-Listener
      window.removeEventListener('click', startAudio);
    };
  }, []);

  return (
    <div id="root">
      <div className="backgroundContainer">
        <Header />
        <Hero />
      </div>
      <Content id="content" />
      <TextContent />
      <Footer />
    </div>
  );
}

export default App;
