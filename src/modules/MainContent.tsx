import '../App.css';
import '../../src/index.css';
import Africa from './Africa';
import LeftMainContent from './MainContents/contentLeft';
import RightMainContent from './MainContents/contentRight';
import { useState } from 'react';
import { svg_data } from '../types/general';

interface Props {
  id?: string;
}

const MainContent: React.FC<Props> = ({ id }) => {
  let [capital, setCapital] = useState(1_000_000_000);
  let [pathname, setPathname] = useState('TZ');
  let [showAttackBtn, setshowAttackBtn] = useState(false);

  let [svg_data, set_svg_data] = useState<svg_data>({
    svg_d: '',
    svg_fill: '',
    id: '',
  });

  return (
    <div className="content" id={id}>
      <div className="contentInnerWrapper">
        <div className="contentHeader">
          <h1 style={{ fontWeight: 700 }}>
            Angemeldet als: Deutsches Kaiserreich
          </h1>

          <h1 style={{ fontWeight: 700 }}>Kapital: {capital} Goldmark</h1>
        </div>

        <div className="contentContentContainer">
          <div className="contentInnerContainer content-left">
            <LeftMainContent pathname={pathname} onIteration={setshowAttackBtn} />
          </div>

          <div className="contentInnerContainer content-center">
            <Africa
              onSelectPath={setPathname}
              onSelectSVGInformation={set_svg_data}
            />
          </div>

          <div className="contentInnerContainer content-right">
            <RightMainContent
              svg_d={svg_data.svg_d}
              svg_fill={svg_data.svg_fill}
              id={svg_data.id}
              show_attack_btn={showAttackBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
