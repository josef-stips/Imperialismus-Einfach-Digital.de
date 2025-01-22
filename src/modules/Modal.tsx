import React from "react";
import "../App.css";
import "../../src/index.css";

interface ModalProps {
  title: string;
  content: any;
  show: boolean;
  onClose: () => void;
}

interface Aufstand {
  name: string;
  jahr: string;
  beschreibung: string;
}


const Modal: React.FC<ModalProps> = ({ title, content, show, onClose }) => {
  // Funktion, um den Inhalt je nach Perspektive zu formatieren
  const formatContent = (data: any) => {

    // console.log(data, data?.aufstände, title);

    if (data && typeof data === 'object') {
      switch (title) {
        case "aufstände": {
          // Formatierung für "aufstände"
          return (
            <div>
              <p><strong>Vorhanden:</strong> {data.aufstände.vorhanden ? "Ja" : "Nein"}</p>
              <p><strong>Anzahl:</strong> {data.aufstände.anzahl}</p>
              {data.aufstände.größere_aufstände.length > 0 && (
                <div>
                  <h4>Größere Aufstände:</h4>
                  <ul>
                  {data["aufstände"]["größere_aufstände"].map((aufstand:Aufstand, index: number) => (
                    <li key={index}>
                      <strong>{aufstand.name}</strong> ({aufstand.jahr}): {aufstand.beschreibung}
                    </li>
                  ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }

        case "fremdheit": {
          // Formatierung für "fremdheit"
          return (
            <div>
              <p><strong>Einheimische Perspektive:</strong> {data.fremdheit.einheimische_perspektive}</p>
              <p><strong>Kolonialherren Perspektive:</strong> {data.fremdheit.kolonialherren_perspektive}</p>
            </div>
          );
        }

        case "oppositionelle_perspektive": {
          // Formatierung für "oppositionelle Perspektive"
          return (
            <div>
              <p><strong>Einheimischer Blick:</strong> {data.oppositionelle_perspektive.einheimischer_blick}</p>
              <p><strong>Kosten Blick:</strong> {data.oppositionelle_perspektive.kosten_blick}</p>
            </div>
          );
        }

        default:
          return <p>Keine Daten verfügbar.</p>;
      }
    } else {
      return <p>Keine gültigen Daten.</p>;
    }
  };

  return (
    <>
      <div className="modal-overlay" style={{ display: show ? "flex" : "none" }}>
        <div className="modal-container">
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-content">
            {formatContent(content)} {/* Den strukturierten Text anzeigen */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;