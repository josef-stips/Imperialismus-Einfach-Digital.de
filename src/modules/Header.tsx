import '../App.css';
import '../../src/index.css';
import ironCross from '../assets/ironcross.png';

function Header() {
  return (
    <div className="header">
      <div className="headerInnerWrapper">
        <a href="/">
          <img
            src={ironCross}
            alt="iron cross"
            className="small-img svg-icon"
            draggable="false"
          />
        </a>

        <h1 className="title">Imperialismus-Einfach-Digital.de</h1>

        <div style={{ display: 'flex', gap: '0.8vw' }}>
        <img
            src={ironCross}
            alt="iron cross"
            className="small-img svg-icon"
            draggable="false"
          />
          {/* <FontAwesomeIcon
            icon={faMoon}
            color="#000000"
            size="2x"
            className="svg-icon"
          />
          <FontAwesomeIcon
            icon={faPerson}
            color="#000000"
            size="2x"
            className="svg-icon"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#000000"
            size="2x"
            className="svg-icon"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
