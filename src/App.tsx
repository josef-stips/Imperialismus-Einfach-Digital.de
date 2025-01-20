import './App.css';
import "../src/index.css";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Content from "./modules/MainContent";
import TextContent from "./modules/TextContent";
import Footer from "./modules/Footer";

function App() {
  return (
    <div id="root">
      <div className="backgroundContainer">
        <Header />
        <Hero /> 
      </div>
      <Content id="content" />
      <TextContent />
      <Footer />
    </div>
  );
}

export default App;
