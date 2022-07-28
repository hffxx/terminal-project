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
}

export interface IKeyboardPos {
  x: number;
  y: number;
  z: number;
  _x: number;
  _y: number;
  _z: number;
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
  keyboardPos: IKeyboardPos;
  setKeyboardPos: Dispatch<SetStateAction<IKeyboardPos>>;
}
