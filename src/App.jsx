import { About } from "./components/about/About";
import Intro from "./components/intro/Intro";
import Worklist from "./components/worklist/Worklist";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Worklist />
      <Contact />
    </div>
  );
};

export default App;
