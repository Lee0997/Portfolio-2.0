import { useState } from "react";

import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Worklist from "./components/worklist/Worklist";
import DataProjects from "./components/dataprojects/DataProjects";
import Contact from "./components/contact/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Intro />
      <About />
      <Worklist />
      <DataProjects />
      <Contact />
    </div>
  );
};

export default App;
