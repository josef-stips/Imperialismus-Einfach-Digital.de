import '../../App.css';
import "../../../src/index.css";
import GermanColonies from "../../data/german-colonies.json";
import EnemyColonies from "../../data/enemy-colonies.json";
import { useState } from 'react';

interface ModalLinkProps {
  information : string;
}

const ModalLink:React.FC<ModalLinkProps> = ({information}) => {
  const [data, setData] = useState(information);

  return (
    <div className='modal-link'>
      <p>Hier klicken</p>
    </div>
  )
};

const LeftMainContent = () => {
  return (
    <div className='contentLeft'>
        <h1>Gebiet Information</h1>

        <div className="ColonieInformationWrapper">
  <ul className='ColonieInformationList'>
    {Object.keys(GermanColonies.kolonien[0]).map((val, key) => {
      console.log(val, key);

      type Colony = typeof GermanColonies.kolonien[0];
      const value = val as keyof Colony;
      const data = GermanColonies.kolonien[0][value];

      return (
        <div key={key}>
          <li style={{ listStyle: "revert", fontSize: "2.25vh", color:"", margin: "0 0 0 1vw", fontWeight: "600" }}>
            {val.replace("_", " ")}
          </li>
          <li style={{ listStyle: "none", fontSize: "1.8vh", margin: "0.5vh 0 0 1.5vw" }}>
            {typeof data === "object" && data !== null
              ? <ModalLink information={JSON.stringify(data)} /> // Für komplexe Objekte (oeffne pop-up)
              : data} {/* Für einfache Werte */}
          </li>
        </div>
      );
    })}
  </ul>
</div>

    </div>  
  );
}

export default LeftMainContent;
