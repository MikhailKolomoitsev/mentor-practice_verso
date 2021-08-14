import "./App.css";
import Header from "./components/header/Header";
import links from "./components/header/links.json";

function App() {
  return (
    <div className="App">
      <Header linksArr={links} />
    </div>
  );
}

export default App;
