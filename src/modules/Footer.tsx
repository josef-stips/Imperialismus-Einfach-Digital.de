import '../App.css';
import '../../src/index.css';
import Africa from './Africa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

interface Props {
  id?: string;
}

const Footer: React.FC<Props> = ({ id }) => {
  return (
    <div className="footer" id={id}>
      <div className="footerInnerWrapper">
        {/* links */}
        <div>
          <nav>
            <ul className="footer-list">
              <li>
                <a href="/">Kontakt</a>
              </li>

              <li>
                <p>|</p>
              </li>

              <li>
                <a href="/">Impressum</a>
              </li>

              <li>
                <p>|</p>
              </li>

              <li>
                <a href="/">Hilfe</a>
              </li>

              <li>
                <p>|</p>
              </li>

              <li>
                <a
                  href="https://de.wikipedia.org/wiki/Bismarcksche_Reichsverfassung"
                  style={{ display: 'flex', flexDirection: 'row', gap: '1vw' }}
                >
                  <p>Verfassung</p>
                  <FontAwesomeIcon size="1x" icon={faBook} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* center paragraph */}
        <div>
          <p>Im Auftrag von Otto von Bismarck</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
