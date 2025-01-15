import './App.css';
import "../src/index.css";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Content from "./modules/MainContent";

function App() {
  return (
    <div id="root">
      <div className="backgroundContainer">
        <Header />
        <Hero />
      </div>
      <Content id="content" />
    </div>
  );
}

export default App;
