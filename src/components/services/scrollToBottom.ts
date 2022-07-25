import { animateScroll } from "react-scroll";

export const scrollToBottom = (id: string) => {
  animateScroll.scrollToBottom({
    containerId: id,
    isDynamic: true,
    smooth: false,
    duration: 100,
  });
};
