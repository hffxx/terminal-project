import { createContext, ReactNode, useState, useContext } from "react";
import { IContextProps, IKeyboardPos } from "./types";

const InputContext = createContext({} as IContextProps);

export const useInput = () => {
  return useContext(InputContext);
};

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState(``);

  const [inputHistory, setInputHistory] = useState<string[]>([]);

  const [func, setFunc] = useState({
    lctrl: false,
    lalt: false,
    lshift: false,
    rctrl: false,
    ralt: false,
    rshift: false,
    fn: false,
    caps: false,
  });

  const [appSetting, setAppSettings] = useState({
    init: false,
    keyboard: false,
    hideInit: false,
  });

  const [keyboardPos, setKeyboardPos] = useState({} as IKeyboardPos);

  const value: IContextProps = {
    input,
    setInput,
    func,
    setFunc,
    inputHistory,
    setInputHistory,
    appSetting,
    setAppSettings,
    keyboardPos,
    setKeyboardPos,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
