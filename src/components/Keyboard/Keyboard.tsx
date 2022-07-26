import { useRef, useContext } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import {
  KeyboardContainer,
  ButtonContainer,
  StyledButton,
} from "./Keyboard.style";
import { Application, SPEObject } from "@splinetool/runtime";
import { useWindowSize } from "usehooks-ts";
import { BsArrowLeft, BsArrowRight, BsApp } from "react-icons/bs";
import { useInput } from "../../context/InputContext";
import { setZoom } from "../../services/setZoom";

export const Keyboard = () => {
  const keyboardRef = useRef<SPEObject | undefined | null>(null);
  const { width } = useWindowSize();

  const { input, setInput, func, setFunc } = useInput();

  const onLoad = (spline: Application) => {
    const keyboard = spline.findObjectByName("keyboard");
    keyboardRef.current = keyboard;
    setZoom(spline);
  };

  const onMouseDown = (e: SplineEvent) => {
    if (!e.target.name.includes("func" || "obj")) console.log(e.target.name);
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
          {/* <button onClick={() => moveObject(-25, "y")}>v</button> */}
          <StyledButton onClick={() => moveObject(50, "x")}>
            <BsArrowLeft />
          </StyledButton>
          {/* <button onClick={() => rotateDown(-Math.PI / 45)}>+</button> */}
          <StyledButton onClick={() => resetPos()}>
            <BsApp />
          </StyledButton>
          {/* <button onClick={() => rotateUp(Math.PI / 45)}>-</button> */}
          <StyledButton onClick={() => moveObject(-50, "x")}>
            <BsArrowRight />
          </StyledButton>
          {/* <button onClick={() => moveObject(25, "y")}>^</button> */}
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
