import { Suspense } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import { KeyboardContainer } from "./Keyboard.style";

export const Keyboard = () => {
  const onMouseDown = (e: SplineEvent) => {
    console.log(e.target.name);
  };

  return (
    <KeyboardContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/dq07Wyjzo17JOA7J/scene.splinecode"
          onMouseDown={onMouseDown}
        />
      </Suspense>
    </KeyboardContainer>
  );
};
