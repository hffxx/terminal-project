import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { SplineEvent } from "@splinetool/react-spline";
import { KeyboardContainer } from "./Keyboard.style";
import { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const Keyboard = () => {
  const keyboardRef = useRef<any>(null);
  const [spline, setSpline] = useState<any>();
  const onLoad = (spline: Application) => {
    const keyboard = spline.findObjectByName("keyboard");
    keyboardRef.current = keyboard;
    const width = window.innerWidth;
    setSpline(spline);
    if (width < 770) {
      spline.setZoom(0.9);
      return;
    }
    if (width < 1367) {
      spline.setZoom(0.65);
      return;
    }
    if (width < 1601) {
      spline.setZoom(0.75);
      return;
    }
    if (width < 1921) {
      spline.setZoom(0.9);
      return;
    }
    spline.setZoom(1.1);
  };

  const onMouseDown = (e: SplineEvent) => {
    if (!e.target.name.includes("func" || "keyboard"))
      console.log(e.target.name);
  };

  const moveObject = (pos: number) => {
    keyboardRef.current.position.x += pos;
  };
  const rotateUp = (angle: number) => {
    if (keyboardRef.current.rotation.x > 0.5) {
      return;
    }
    keyboardRef.current.rotation.x += angle;
  };
  const rotateDown = (angle: number) => {
    if (keyboardRef.current.rotation.x < -0.2) {
      return;
    }
    keyboardRef.current.rotation.x += angle;
  };
  const resetPos = () => {
    keyboardRef.current.position.x = 900;
    keyboardRef.current.position.y = -277;
    keyboardRef.current.position.z = -100;
    keyboardRef.current.rotation.x = 0;
    keyboardRef.current.rotation.y = 0;
    keyboardRef.current.rotation.z = 0;
  };

  return (
    <KeyboardContainer>
      <div>
        <button onClick={() => moveObject(50)}>Move Left</button>
        <button onClick={() => rotateDown(-Math.PI / 45)}>Rotate Down</button>
        <button onClick={() => resetPos()}>Reset Pos</button>
        <button onClick={() => rotateUp(Math.PI / 45)}>Rotate Up</button>
        <button onClick={() => moveObject(-50)}>Move Right</button>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Spline
          scene="https://prod.spline.design/dq07Wyjzo17JOA7J/scene.splinecode"
          onMouseDown={onMouseDown}
          onLoad={onLoad}
        />
      </Suspense>
    </KeyboardContainer>
  );
};
