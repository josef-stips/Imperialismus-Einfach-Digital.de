import '../App.css';
import "../../src/index.css";
import Eagle2 from '../assets/eagle2.png';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPerson, faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="hero">
      <div className="heroInnerWrapper">

        <div className="heroContainer left">
          <h1 className="heroTitle">Der Erwerb von Kolonialgebieten in Afrika war noch nie so einfach!</h1>
          <p className="heroSubtitle">- Otto von Bismarck</p>
        </div>

        <div className="heroContainer right">
          <img src={Eagle2} alt="Iron Cross" className="hero-img" draggable="false" />
        </div>

        <FontAwesomeIcon icon={faCaretDown} color="#000" size="2x" className='caret-down transform' />
      </div>
    </div>
  );
}

export default Hero;
