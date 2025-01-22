import React, { useState } from 'react';
import '../App.css';
import '../../src/index.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [begruendung, setBegruendung] = useState('');
  const [unterschrift, setUnterschrift] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kannst du die Logik für das Senden der Daten hinzufügen, z.B. eine API-Anfrage
    setIsSubmitted(true);

    setTimeout(() => {

        onClose();
        setEmail("");
        setBegruendung("");
        setUnterschrift("");
        setIsSubmitted(false);
    }, 2000); // Modal nach 2 Sekunden schließen
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Email zum Angriff senden</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <h3>Deine Anfrage wurde erfolgreich gesendet!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email-Adresse:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="begruendung">Begründung für den Angriff:</label>
              <textarea
                id="begruendung"
                name="begruendung"
                value={begruendung}
                onChange={(e) => setBegruendung(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="unterschrift">Digitale Unterschrift:</label>
              <input
                type="text"
                id="unterschrift"
                name="unterschrift"
                value={unterschrift}
                onChange={(e) => setUnterschrift(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Senden
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
