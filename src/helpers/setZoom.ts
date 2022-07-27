import { Application } from "@splinetool/runtime";

export const setZoom = (spline: Application, width = window.innerWidth) => {
  if (spline) {
    if (width < 770) {
      spline.setZoom(0.55);
      return;
    }
    if (width < 1367) {
      spline.setZoom(0.65);
      return;
    }
    if (width < 1601) {
      spline.setZoom(0.6);
      return;
    }
    if (width < 1921) {
      spline.setZoom(0.75);
      return;
    }
    spline.setZoom(0.9);
  }
};
