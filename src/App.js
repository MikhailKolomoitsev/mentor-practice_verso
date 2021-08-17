import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";
import Footer from "./components/footer/Footer.jsx";
import { Hero } from "./components/hero/Hero.jsx";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
      <Hero />
      <Footer link="./images/sprite.svg#logo" />
    </div>
  );
}

export default App;
