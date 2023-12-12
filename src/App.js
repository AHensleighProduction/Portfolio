import "./App.css";
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";
import { useState } from "react";
function App() {
  const [selectedPage, setSelectedPage] = useState("Landing");
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => setSelectedPage("Landing")}>
          A Hensleigh Production
        </h1>
        <nav>
          <span onClick={() => setSelectedPage("Landing")}>Home</span>
          <span onClick={() => setSelectedPage("Portfolio")}>Projects</span>
        </nav>
      </header>
      <main>
        {selectedPage === "Landing" && (
          <LandingPage setSelectedPage={setSelectedPage} />
        )}
        {selectedPage === "Portfolio" && (
          <Portfolio
            
          />
        )}
        
      </main>
      <footer>
        <a href="mailto:ashahensleigh1@gmail.com">
          <i className="fa-brands fa-google"></i>
        </a>
        <a
          href="https://github.com/AHensleighProduction"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/asha-hensleigh-42b0a7299/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
