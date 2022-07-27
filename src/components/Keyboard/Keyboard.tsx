import { useRef, useMemo, useState, useEffect } from "react";
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
import { IFunc } from "context/types";
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
  } = useInput();
  const { lshift, rshift } = func;

  useEffect(() => {
    console.log(keyboardPos);
  }, [lshift]);

  const getKeyboardPos = () => {
    return {
      ...keyboardRef.current?.position,
      _x: keyboardRef.current?.rotation.x,
      _y: keyboardRef.current?.rotation.y,
      _z: keyboardRef.current?.rotation.z,
    };
  };

  const onMouseDown = (e: SplineEvent) => {
    const key = e.target.name;
    if (key === "obj") {
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
    setInput((prevInput) => prevInput + key[lshift || rshift ? 1 : 0]);
  };

  const onLoad = (spline: Application) => {
    const keyboard = spline.findObjectByName("keyboard");
    keyboardRef.current = keyboard;
    setZoom(spline);
    setKeyboardPos(getKeyboardPos());
  };

  return (
    <KeyboardContainer>
      {width < 1000 && (
        <ButtonContainer>
          <StyledButton
            onClick={() => {
              moveKeyboard(keyboardRef, 50, "x");
              setKeyboardPos(getKeyboardPos());
            }}
          >
            <BsArrowLeft />
          </StyledButton>
          <StyledButton
            onClick={() => {
              moveKeyboard(keyboardRef, 25, "y");
              setKeyboardPos(getKeyboardPos());
            }}
          >
            <BsArrowUp />
          </StyledButton>
          <StyledButton
            onClick={() => {
              moveKeyboard(keyboardRef, -Math.PI / 45);
              setKeyboardPos(getKeyboardPos());
            }}
          >
            <BsArrowClockwise />
          </StyledButton>
          <StyledButton
            onClick={() => {
              resetPos(keyboardRef);
              setKeyboardPos(getKeyboardPos());
            }}
          >
            <BsApp />
          </StyledButton>
          <StyledButton onClick={() => moveKeyboard(keyboardRef, Math.PI / 45)}>
            <BsArrowCounterclockwise />
          </StyledButton>
          <StyledButton onClick={() => moveKeyboard(keyboardRef, -25, "y")}>
            <BsArrowDown />
          </StyledButton>
          <StyledButton onClick={() => moveKeyboard(keyboardRef, -50, "x")}>
            <BsArrowRight />
          </StyledButton>
        </ButtonContainer>
      )}
      <Spline
        scene="https://prod.spline.design/CyR9KWvP2elMAdin/scene.splinecode"
        onMouseDown={onMouseDown}
        onLoad={onLoad}
      />
    </KeyboardContainer>
  );
};
