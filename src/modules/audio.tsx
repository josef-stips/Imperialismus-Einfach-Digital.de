import React, { useRef } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop controls>
        <source src="../assets/siegeskranz.mp3" type="audio/mpeg" />
        Ihr Browser unterstützt keine Audio-Wiedergabe.
      </audio>

      <button onClick={toggleAudio}>Play/Pause</button>
    </div>
  );
};

export default BackgroundAudio;
