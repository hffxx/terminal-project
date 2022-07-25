import { Keyboard } from "./components/Keyboard/Keyboard";
import { Terminal } from "./components/Terminal/Terminal";

export const App = () => {
  return (
    <div className="app">
      <div className="test">
        <Terminal />
      </div>
      <Keyboard />
    </div>
  );
};

export default App;
