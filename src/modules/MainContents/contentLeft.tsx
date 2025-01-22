import "../../App.css";
import "../../../src/index.css";
import ColonieInformation from "../../data/30-colonies.json";
import { useEffect, useState } from "react";
import Modal from "../Modal";

interface ModalLinkProps {
  information: string;
  onClick: () => void;
}

const ModalLink: React.FC<ModalLinkProps> = ({ information, onClick }) => {
  return (
    <div className="modal-link" onClick={onClick}>
      <p>Hier klicken</p>
    </div>
  );
};

interface LeftMainContentProps {
  pathname: string;
  onIteration: (is_own_colony: boolean) => void;
}

const LeftMainContent: React.FC<LeftMainContentProps> = ({ pathname, onIteration }) => {
  const colony = ColonieInformation.gebiete.find((colony) => colony.abkuerzung === pathname);

  let [modalTitle, setModalTitle] = useState("");
  let [modalContent, setModalContent] = useState<any>("");
  let [showModal, setShowModal] = useState(false);

  if (!colony) {
    onIteration(false);

    return (
      <div className="contentLeft" style={{ fontSize: "2vh" }}>
        Es wurden keine Daten über dieses Gebiet aufgezeichnet. Möglicherweise ist dies ein freies oder geheimes Gebiet.
      </div>
    );

  } else if(colony) {
    onIteration(!(colony["besitzerland"] === "Deutsches Kaiserreich"));
  };

  return (
    <div className="contentLeft">
      {/* Modal mit den strukturierten Daten */}
      <Modal title={modalTitle} content={modalContent} show={showModal} onClose={() => setShowModal(false)} />

      <h1>Gebiet Information</h1>

      <div className="ColonieInformationWrapper">
        <ul className="ColonieInformationList">
          {/* Iteriere über alle Schlüssel der gefundenen Kolonie */}
          {Object.keys(colony).map((key, keyIndex) => {
            const value = colony[key as keyof typeof colony];

            if (key === "abkuerzung") return;

            return (
              <div key={keyIndex}>
                <li
                  style={{
                    listStyle: "revert",
                    fontSize: "2.25vh",
                    margin: "0 0 0 1vw",
                    fontWeight: "600",
                  }}
                >
                  {key.replace("_", " ")}
                </li>
                <li
                  style={{
                    listStyle: "none",
                    fontSize: "1.8vh",
                    margin: "0.5vh 0 0 1.5vw",
                  }}
                >
                  {typeof value === "object" && value !== null ? (
                    <ModalLink
                      information={JSON.stringify(value)}
                      onClick={() => {
                        setModalTitle(key);
                        setModalContent(colony);  
                        setShowModal(true);
                      }}
                    />
                  ) : (
                    value
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftMainContent;
