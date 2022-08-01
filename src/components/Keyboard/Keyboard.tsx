import { useRef } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import {
  KeyboardContainer,
  ButtonContainer,
  StyledButton,
} from "./Keyboard.style";
import { Application, SPEObject } from "@splinetool/runtime";
import {
  BsArrowLeft,
  BsArrowRight,
  BsApp,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { useInput } from "context/InputContext";
import { useWindowSize } from "usehooks-ts";
import { setZoom } from "helpers/setZoom";
import { getFuncKey } from "helpers/getFuncKey";
import { IApp, IFunc } from "context/types";
import { moveKeyboard } from "helpers/moveKeyboard";
import { resetPos } from "helpers/resetPos";

export const Keyboard = () => {
  const keyboardRef = useRef<SPEObject>();
  const { width } = useWindowSize();

  const {
    input,
    setInput,
    setInputHistory,
    setFunc,
    func,
    setKeyboardPos,
    keyboardPos,
    setAppSettings,
    appSettings,
  } = useInput();
  const { lshift, rshift, caps } = func;

  const inputRef = useRef<string>();
  const lShiftRef = useRef<boolean>();
  const rShiftRef = useRef<boolean>();
  const canWriteRef = useRef<boolean>();
  const capsRef = useRef<boolean>();
  inputRef.current = input;
  lShiftRef.current = lshift;
  rShiftRef.current = rshift;
  canWriteRef.current = appSettings.canWrite;
  capsRef.current = caps;

  const fetchKeyboardPos = () => {
    if (keyboardRef.current) {
      setKeyboardPos({
        ...keyboardRef.current.position,
        rx: keyboardRef.current.rotation.x,
        ry: keyboardRef.current.rotation.y,
        rz: keyboardRef.current.rotation.z,
      });
    }
  };

  const executeCommand = (input: string) => {
    const parsedInput = input.toLowerCase();
    if (parsedInput === "cls") {
      setInputHistory([]);
      setAppSettings((prevValues) => ({ ...prevValues, hideInit: true }));
    }
  };

  const onMouseDown = (e: SplineEvent) => {
    const key = e.target.name;
    const input = inputRef.current!;
    if (key.includes("obj")) {
      return;
    }
    if (key.includes("func")) {
      const func = getFuncKey(key);
      setFunc((prevState) => ({
        ...prevState,
        [func]: !prevState[func as keyof IFunc],
      }));
      return;
    }
    if (key === "enter") {
      setInputHistory((prevHistory) => [...prevHistory, input]);
      setInput("");
      executeCommand(input);
      return;
    }
    if (key === "backspace") {
      setInput((prevInput) => prevInput.slice(0, -1));
      return;
    }
    if (key === "tab") {
      setInput((prevInput) => prevInput + " ".repeat(5));
      return;
    }
    if (key === "space") {
      setInput((prevInput) => prevInput + " ");
      return;
    }
    setInput((prevInput) => {
      const nextLetter = key[lShiftRef.current || rShiftRef.current ? 1 : 0];
      return capsRef.current
        ? prevInput + nextLetter.toUpperCase()
        : prevInput + nextLetter;
    });
  };

  const onLoad = (spline: Application) => {
    const keyboard = spline.findObjectByName("keyboard");
    if (keyboard) {
      keyboardRef.current = keyboard;
      setZoom(spline, keyboard);
      fetchKeyboardPos();
      setAppSettings((prevState: IApp) => ({ ...prevState, keyboard: true }));
    }
  };

  return (
    <KeyboardContainer>
      <ButtonContainer>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, 50, "x");
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.x >= 500}
        >
          <BsArrowLeft />
        </StyledButton>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, 25, "y");
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.y >= (width < 770 ? 150 : 100)}
        >
          <BsArrowUp />
        </StyledButton>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, -Math.PI / 45);
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.rx <= -0.35}
        >
          <BsArrowClockwise />
        </StyledButton>
        <StyledButton
          onClick={() => {
            resetPos(keyboardRef);
            fetchKeyboardPos();
          }}
        >
          <BsApp />
        </StyledButton>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, Math.PI / 45);
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.rx >= 0.35}
        >
          <BsArrowCounterclockwise />
        </StyledButton>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, -25, "y");
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.y <= (width < 770 ? -50 : -100)}
        >
          <BsArrowDown />
        </StyledButton>
        <StyledButton
          onClick={() => {
            moveKeyboard(keyboardRef, -50, "x");
            fetchKeyboardPos();
          }}
          disabled={keyboardPos.x <= -500}
        >
          <BsArrowRight />
        </StyledButton>
      </ButtonContainer>
      <Spline
        scene="https://prod.spline.design/CyR9KWvP2elMAdin/scene.splinecode"
        onMouseDown={onMouseDown}
        onLoad={onLoad}
      />
    </KeyboardContainer>
  );
};
