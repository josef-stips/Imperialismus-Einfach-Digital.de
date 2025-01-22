import '../../App.css';
import '../../../src/index.css';
import { useState } from 'react';
import Modal from '../form-modal';

interface RightMainContentProps {
  svg_d: string | undefined | null;
  svg_fill: string | undefined | null;
  id: string;
  show_attack_btn: boolean;
}

const RightMainContent: React.FC<RightMainContentProps> = ({
  svg_d,
  svg_fill,
  id,
  show_attack_btn
}) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="contentRight">
      <p
        style={{
          margin: '5vh 0 0 0',
          position: 'absolute',
          right: '20vw',
          fontSize: '2.1vh',
        }}
      >
        (klicke auf ein Koloniegebiet)
      </p>

      <svg
        style={{
          /*transform: "scale(3.5)", position: "absolute", top: "50vh", right: "-10vw"*/ height: 0,
          width: 0,
        }}
      >
        <path id={id} fill={svg_fill!} d={svg_d!} />
      </svg>

      <div style={{display: show_attack_btn ? "flex" : "none"}} className="attack-button" onClick={() => openModal()
      }>
        Attack
      </div>

<Modal show={showModal} onClose={closeModal} />

    </div>
  );
};

export default RightMainContent;
