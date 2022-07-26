import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface IFunc {
  lctrl: boolean;
  lalt: boolean;
  lshift: boolean;
  rctrl: boolean;
  ralt: boolean;
  rshift: boolean;
}

interface IContextProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  func: IFunc;
  setFunc: Dispatch<SetStateAction<IFunc>>;
  inputHistory: string[];
  setInputHistory: Dispatch<SetStateAction<string[]>>;
}

const InputContext = createContext({} as IContextProps);

export const useInput = () => {
  return useContext(InputContext);
};

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState("");
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [func, setFunc] = useState({
    lctrl: false,
    lalt: false,
    lshift: false,
    rctrl: false,
    ralt: false,
    rshift: false,
  });

  const value: IContextProps = {
    input,
    setInput,
    func,
    setFunc,
    inputHistory,
    setInputHistory,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
