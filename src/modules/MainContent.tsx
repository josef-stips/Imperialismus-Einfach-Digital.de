import '../App.css';
import "../../src/index.css";
import Africa from "./Africa";
import LeftMainContent from './MainContents/contentLeft';
import RightMainContent from './MainContents/contentRight';
import { useState } from 'react';

interface Props {
  id?: string;
};
 
const MainContent: React.FC< Props> = ({id}) => {
  const [capital, setCapital] = useState(1_000_000_000);

  return (
    <div className='content' id={id}>
      <div className="contentInnerWrapper">

        <div className="contentHeader">
          <h1 style={{fontWeight: 700}}>Angemeldet als: Deutsches Kaiserreich</h1>

          <h1 style={{fontWeight: 700}}>Kapital: {capital} Goldmark</h1>
        </div>

        <div className='contentContentContainer'>
          <div className="contentInnerContainer content-left">
            <LeftMainContent />
          </div>

          <div className="contentInnerContainer content-center">
            <Africa />
          </div>

          <div className="contentInnerContainer content-right">
            <RightMainContent/>
          </div>
        </div>

      </div>
    </div>  
  );
}

export default MainContent;
