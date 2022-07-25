import { useEffect, useState } from "react";
import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalCloseButton,
  TerminalBody,
  InitText,
  AnimatedDot,
} from "./Terminal.style";
import { VscChromeClose } from "react-icons/vsc";

const mockData = ["Hello there :)", "How are you?"];

export const Terminal = () => {
  const [init, setInit] = useState(false);
  const [init2, setInit2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 5000);
    setTimeout(() => {
      setInit2(true);
    }, 15000);
  }, []);

  return (
    <TerminalWrapper>
      <TerminalBackground>
        <TerminalTopbar>
          <span>HFX-SOFT v.1.0.0a</span>
          <TerminalCloseButton>
            <VscChromeClose />
          </TerminalCloseButton>
        </TerminalTopbar>
        <TerminalBody>
          {!init ? (
            <InitText>
              Initialization<AnimatedDot>.</AnimatedDot>
            </InitText>
          ) : (
            <InitText>Initialization done in 5.02s</InitText>
          )}
          {init &&
            (!init2 ? (
              <InitText>
                Installing packages<AnimatedDot>.</AnimatedDot>
              </InitText>
            ) : (
              <InitText>Packages installation successful!</InitText>
            ))}
        </TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
