import '../../App.css';
import "../../../src/index.css";
import GermanColonies from "../../data/german-colonies.json";
import EnemyColonies from "../../data/enemy-colonies.json";

const RightMainContent = () => {
  return (
    <div className='contentRight'>
        <p style={{margin: "5vh 0 0 0", position: "absolute", right: "20vw", fontSize: "2.1vh"}}>klicke auf ein Koloniegebiet</p>
    </div>  
  );
}

export default RightMainContent;
