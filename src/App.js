import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";
import Footer from "./components/footer/Footer.jsx";
import { Hero } from "./components/hero/Hero.jsx";

import ScrollButton from "./components/ScrollButton/ScrollButton";
import Pexels from "./components/Pexels/PexelsLibriary";

import Opportunities from "./components/section-opportunities/Opportunities";
import dataTable from "./components/section-opportunities/dataTable.json";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
      <Hero />
      <ScrollButton />

      <Opportunities items={dataTable} />
      <Pexels />
      <Footer />
    </div>
  );
}

export default App;
