import '../App.css';
import "../../src/index.css";

interface Props {
  id?: string;
};
 
const TextContent: React.FC< Props> = ({id}) => {
  return (
    <div className='content flipped-bg text-content' id={id}>
      <div className="contentInnerWrapper">

        <div className="contentHeader textHeader">
          <h1 style={{fontWeight: 700}}>Die Mission des Deutschen Kaiserreiches in Afrika</h1>
          <br />
        </div>

        <div className="contentContent">
          <br />
            <p>
            "Die Erringung von Kolonien ist kein Werk von Gewalt, sondern eines von Weisheit und Größe. Es ist nicht der Kampf um bloße Besitzungen, sondern die Erfüllung der Pflicht, die der höhere Stand der Kultur den Völkern Europas auferlegt. Deutschland ist durch die Gnade der Einigung und den Sieg von 1871 berufen, seinen Platz unter den führenden Mächten zu behaupten und durch seine Kolonien den deutschen Geist in die Welt hinauszutragen."
            </p>
            <br />
            <p style={{fontWeight: 700}}>
            – Otto von Bismarck, 1884
            </p>
            <br />
            <p>
            Seit dem Beginn unserer kolonialen Unternehmungen mit der Erwerbung von Togo, Kamerun und Deutsch-Südwestafrika im Jahre 1884, hat das Deutsche Reich große Fortschritte gemacht. Unter der weisen Führung Kaiser Wilhelms II. und durch die Tapferkeit unserer Landsleute hat sich unser koloniales Reich ausgeweitet und erstarkt. Mit der Gründung von Deutsch-Ostafrika (1885), der Sicherung von Deutsch-Neuguinea und den kaiserlichen Schutzgebieten im Pazifik hat Deutschland bewiesen, dass es unter den Völkern Europas seinen rechtmäßigen Platz eingenommen hat.
            </p>

            <p>
            Unser Reich in Afrika ist heute ein Symbol deutscher Stärke, Zivilisation und Ordnung. Von der Errichtung von Eisenbahnen in Tanganjika bis zur Erschließung von Handelswegen durch Kamerun haben wir die dunklen und unwirtlichen Gebiete Afrikas in Bastionen von Fortschritt und Kultur verwandelt. Wir, das Deutsche Kaiserreich, stehen für Gerechtigkeit, Zivilisation und die Herrschaft von Vernunft und Wissenschaft über Barbarei und Chaos. Mögen alle deutschen Männer und Frauen sich dieser edlen Mission verpflichtet fühlen!
            </p>

            <h3>
                Die Bedeutung der deutschen Kolonien und die Fremdheit
            </h3>

            <p>
            Die deutschen Kolonien bieten nicht nur wirtschaftliche Vorteile durch Rohstoffe wie Kautschuk, Baumwolle und Edelmetalle, sondern sie stellen auch ein Laboratorium der Zivilisation dar. In den ungezähmten Weiten Afrikas erzieht der deutsche Geist fremde Völker zu Disziplin und Arbeit. Hier erleben wir die Einzigartigkeit des deutschen Willens: Wo andere Mächte auf Gewalt setzen, bringen wir Bildung, Handel und Fortschritt.
            </p>

            <p>
            Es mag manchen befremdlich erscheinen, mit den Völkern Afrikas in Kontakt zu treten. Doch erkennen wir in der Fremdheit auch die Größe unserer eigenen Mission. Gerade weil sie uns fremd sind, liegt es in unserer Verantwortung, sie zu erziehen und zu leiten. Die Einheimischen mögen uns zunächst scheu und misstrauisch begegnen, doch unter deutscher Ordnung und Anleitung werden sie zu einem integralen Teil unserer kolonialen Unternehmungen.
            </p>

            <h3>
                Appell an das deutsche Volk
            </h3>

            <p>
            Deutsche Männer und Frauen! Der Kolonialismus ist kein bloßer Wettstreit der Nationen. Er ist die Erfüllung eines göttlichen Auftrags, die Völker der Welt in die Gemeinschaft der Zivilisierten aufzunehmen. Unsere Arbeit in Afrika ist noch lange nicht abgeschlossen. Geben wir auf, so geben wir unser Erbe, unseren Platz in der Geschichte, preis. Doch kämpfen wir weiter, so wird unser Ruhm ewig währen!
            </p>

            <p>
            Jede Kolonie, jede Eisenbahn, jede Schule, die wir bauen, ist ein weiterer Stein im Fundament des ewigen Reiches. Lasst uns gemeinsam dafür sorgen, dass die deutsche Fahne nicht nur in Europa, sondern auch in Afrika und darüber hinaus für Gerechtigkeit, Fortschritt und Kultur steht.
            </p>

            <b>
              <br />
                Deutschland ueber Alles!
            </b>
        </div>

      </div>
    </div>  
  );
}

export default TextContent;
