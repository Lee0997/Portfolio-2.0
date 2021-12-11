import { About } from "./components/about/About";
import Intro from "./components/intro/Intro";
import Worklist from "./components/worklist/Worklist";

const App = () => {
  return <div>
    <Intro />
    <About />
    <Worklist />
  </div>;
};

export default App;