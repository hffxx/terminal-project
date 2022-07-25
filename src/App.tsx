import { Keyboard } from "./components/Keyboard/Keyboard";
import { Terminal } from "./components/Terminal/Terminal";

export const App = () => {
  return (
    <div className="app">
      <Terminal />
      <Keyboard />
    </div>
  );
};

export default App;
