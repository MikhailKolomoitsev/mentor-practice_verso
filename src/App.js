import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";
import Footer from "./components/footer/Footer.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import ScrollButton from "./components/ScrollButton/ScrollButton";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
      <Hero />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
