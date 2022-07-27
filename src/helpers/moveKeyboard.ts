import { SPEObject } from "@splinetool/runtime";
import { RefObject } from "react";

export const moveKeyboard = (
  ref: RefObject<SPEObject | undefined>,
  num: number,
  axis?: keyof SPEObject["position"]
) => {
  const keyboard = ref.current;
  if (!keyboard) {
    return;
  }
  if (axis) {
    keyboard.position[axis] += num;
    return;
  }
  keyboard.rotation.x += num;
};
