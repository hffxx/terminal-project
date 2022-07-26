import { Keyboard } from "./components/Keyboard/Keyboard";
import { Terminal } from "./components/Terminal/Terminal";
import { InputProvider } from "./context/InputContext";

export const App = () => {
  return (
    <div className="app">
      <InputProvider>
        <Terminal />
        <Keyboard />
      </InputProvider>
    </div>
  );
};

export default App;
