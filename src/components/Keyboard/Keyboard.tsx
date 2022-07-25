import { lazy } from "react";
import { Suspense } from "react";
import { SplineEvent } from "@splinetool/react-spline";
import { KeyboardContainer } from "./Keyboard.style";
import { Application } from "@splinetool/runtime";

const setZoom = (spline: Application) => {
  const width = window.innerWidth;
  if (width < 1601) {
    spline.setZoom(0.6);
    return;
  }
  if (width < 1921) {
    spline.setZoom(0.9);
    return;
  }
  spline.setZoom(1.1);
};

const Spline = lazy(() => import("@splinetool/react-spline"));

export const Keyboard = () => {
  const onMouseDown = (e: SplineEvent) => {
    if (!e.target.name.includes("func")) console.log(e.target.name);
  };
  return (
    <KeyboardContainer>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Spline
          scene="https://prod.spline.design/dq07Wyjzo17JOA7J/scene.splinecode"
          onMouseDown={onMouseDown}
          onLoad={setZoom}
        />
      </Suspense>
    </KeyboardContainer>
  );
};
