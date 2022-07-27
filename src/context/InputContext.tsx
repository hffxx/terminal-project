import { createContext, ReactNode, useState, useContext } from "react";
import { IContextProps } from "./types";

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
  });
  const [appSetting, setAppSettings] = useState({
    init: false,
    packages: false,
    hideInit: false,
  });

  const value: IContextProps = {
    input,
    setInput,
    func,
    setFunc,
    inputHistory,
    setInputHistory,
    appSetting,
    setAppSettings,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
