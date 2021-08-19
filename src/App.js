import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";
import { Hero } from "./components/hero/Hero.jsx";
import Opportunities from "./components/section-opportunities/Opportunities";
import dataTable from "./components/section-opportunities/dataTable.json";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
      <Hero />
      <Opportunities items={dataTable} />
    </div>
  );
}

export default App;
