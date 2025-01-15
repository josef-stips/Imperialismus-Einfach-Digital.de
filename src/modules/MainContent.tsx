import '../App.css';
import "../../src/index.css";
import Africa from "./Africa";

interface Props {
  id?: string;
};
 
const MainContent: React.FC< Props> = ({id}) => {
  return (
    <div className='content' id={id}>
      <div className="contentInnerWrapper">

        <div className="contentHeader">
          <h1 style={{fontWeight: 700}}>Angemeldet als: Deutsches Kaiserreich</h1>
        </div>

        <div className='contentContentContainer'>
          <div className="contentInnerContainer content-left">

          </div>

          <div className="contentInnerContainer content-center">
            <Africa />
          </div>

          <div className="contentInnerContainer content-right">

          </div>
        </div>

      </div>
    </div>  
  );
}

export default MainContent;
