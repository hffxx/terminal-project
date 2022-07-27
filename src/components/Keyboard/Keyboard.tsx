import { useRef, useMemo, useState, useEffect } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import {
  KeyboardContainer,
  ButtonContainer,
  StyledButton,
} from "./Keyboard.style";
import { Application, SPEObject } from "@splinetool/runtime";
import { BsArrowLeft, BsArrowRight, BsApp } from "react-icons/bs";
import { useInput } from "context/InputContext";
import { useWindowSize } from "usehooks-ts";
import { setZoom } from "services/setZoom";
import { getFuncKey } from "services/getFuncKey";
import { IFunc } from "context/types";

export const Keyboard = () => {
  const keyboardRef = useRef<SPEObject>();
  const { width } = useWindowSize();

  const { input, setInput, setInputHistory, setFunc, func } = useInput();
  const { lshift, rshift } = func;

  useEffect(() => {
    console.log(func);
  }, [func]);

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
    setInput(
      (prevInput) => prevInput + e.target.name[lshift || rshift ? 1 : 0]
    );
  };

  const onLoad = (spline: Application) => {
    const keyboard = spline.findObjectByName("keyboard");
    keyboardRef.current = keyboard;
    setZoom(spline);
  };

  const moveObject = (pos: number, axis: keyof SPEObject["position"]) => {
    if (keyboardRef.current) {
      keyboardRef.current.position[axis] += pos;
    }
  };
  const rotateUp = (angle: number) => {
    if (keyboardRef.current) {
      if (keyboardRef.current.rotation.x > 0.3) {
        return;
      }
      keyboardRef.current.rotation.x += angle;
    }
  };
  const rotateDown = (angle: number) => {
    if (keyboardRef.current) {
      if (keyboardRef.current.rotation.x < -0.2) {
        return;
      }
      keyboardRef.current.rotation.x += angle;
    }
  };
  const resetPos = () => {
    if (keyboardRef.current) {
      keyboardRef.current.position.x = 0;
      keyboardRef.current.position.y = 0;
      keyboardRef.current.position.z = 0;
      keyboardRef.current.rotation.x = 0;
      keyboardRef.current.rotation.y = 0;
      keyboardRef.current.rotation.z = 0;
    }
  };

  return (
    <KeyboardContainer>
      {width < 1000 && (
        <ButtonContainer>
          <button onClick={() => moveObject(-25, "y")}>v</button>
          <StyledButton onClick={() => moveObject(50, "x")}>
            <BsArrowLeft />
          </StyledButton>
          <button onClick={() => rotateDown(-Math.PI / 45)}>+</button>
          <StyledButton onClick={() => resetPos()}>
            <BsApp />
          </StyledButton>
          <button onClick={() => rotateUp(Math.PI / 45)}>-</button>
          <StyledButton onClick={() => moveObject(-50, "x")}>
            <BsArrowRight />
          </StyledButton>
          <button onClick={() => moveObject(25, "y")}>^</button>
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
