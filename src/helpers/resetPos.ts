import { SPEObject } from "@splinetool/runtime";
import { RefObject } from "react";

export const resetPos = (ref: RefObject<SPEObject | undefined>) => {
  const keyboard = ref.current;
  const width = window.innerWidth;
  if (!keyboard) {
    return;
  }
  keyboard.position.x = 0;
  keyboard.position.y = width < 770 ? 50 : 0;
  keyboard.position.z = 0;
  keyboard.rotation.x = 0;
  keyboard.rotation.y = 0;
  keyboard.rotation.z = 0;
};
