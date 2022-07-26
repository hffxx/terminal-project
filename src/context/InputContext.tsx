import {
  ContextType,
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";

interface IFunc {
  lctrl: boolean;
  lalt: boolean;
  lshift: boolean;
  rctrl: boolean;
  ralt: boolean;
  rshift: boolean;
}

const InputContext = createContext({
  input: "",
  setInput: (input: string) => {},
  func: {},
  setFunc: (func: IFunc) => {},
});

export const useInput = () => {
  return useContext(InputContext);
};

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState("");
  const [func, setFunc] = useState({
    lctrl: false,
    lalt: false,
    lshift: false,
    rctrl: false,
    ralt: false,
    rshift: false,
  });

  const value = { input, setInput, func, setFunc };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
