import { About } from "./components/intro/about/About";
import Intro from "./components/intro/Intro";
import Worklist from "./components/intro/Worklist/Worklist";

const App = () => {
  return <div>
    <Intro />
    <About />
    <Worklist />
  </div>;
};

export default App;