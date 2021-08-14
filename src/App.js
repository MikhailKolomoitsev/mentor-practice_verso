import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";
import { Hero } from "./components/hero/Hero.jsx";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
      <Hero />
    </div>
  );
}

export default App;
