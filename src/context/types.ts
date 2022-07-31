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
  keyboard: boolean;
  hideInit: boolean;
  canWrite: boolean;
  hideTerminal: boolean;
}

export interface IKeyboardPos {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
}

export interface IContextProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  func: IFunc;
  setFunc: Dispatch<SetStateAction<IFunc>>;
  inputHistory: string[];
  setInputHistory: Dispatch<SetStateAction<string[]>>;
  appSettings: IApp;
  setAppSettings: Dispatch<SetStateAction<IApp>>;
  keyboardPos: IKeyboardPos;
  setKeyboardPos: Dispatch<SetStateAction<IKeyboardPos>>;
}
