import { Dispatch, SetStateAction } from "react";

export interface IFunc {
  lctrl: boolean;
  lalt: boolean;
  lshift: boolean;
  rctrl: boolean;
  ralt: boolean;
  rshift: boolean;
  fn: boolean;
  caps: boolean;
}

export interface IApp {
  init: boolean;
  packages: boolean;
  hideInit: boolean;
}

export interface IContextProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  func: IFunc;
  setFunc: Dispatch<SetStateAction<IFunc>>;
  inputHistory: string[];
  setInputHistory: Dispatch<SetStateAction<string[]>>;
  appSetting: IApp;
  setAppSettings: Dispatch<SetStateAction<IApp>>;
}
