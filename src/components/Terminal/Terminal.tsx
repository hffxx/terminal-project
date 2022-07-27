import { useEffect, useState, useRef } from "react";
import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalCloseButton,
  TerminalBody,
  TerminalText,
  AnimatedDot,
} from "./Terminal.style";
import { VscChromeClose } from "react-icons/vsc";
import { scrollToBottom } from "../../services/scrollToBottom";
import { getRandNumb } from "../../services/getRandNum";
import { useInput } from "../../context/InputContext";
import { IApp } from "../../context/types";

const num = getRandNumb(5);

export const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const { input, setInput, inputHistory, appSetting, setAppSettings } =
    useInput();

  useEffect(() => {
    setTimeout(() => {
      setAppSettings((prevState: IApp) => ({ ...prevState, init: true }));
    }, 5000);
    setTimeout(() => {
      setAppSettings((prevState: IApp) => ({ ...prevState, packages: true }));
    }, 10000);
  }, []);
  useEffect(() => {
    if (terminalRef.current) {
      scrollToBottom("terminal-body");
    }
  }, [inputHistory]);
  return (
    <TerminalWrapper>
      <TerminalBackground>
        <TerminalTopbar>
          <span>HFX-SOFT v.1.0.0a</span>
          <TerminalCloseButton>
            <VscChromeClose />
          </TerminalCloseButton>
        </TerminalTopbar>
        <TerminalBody ref={terminalRef} id="terminal-body">
          {!appSetting.hideInit && (
            <>
              {appSetting.init ? (
                <TerminalText>{`Initialized done in ${num}s`}</TerminalText>
              ) : (
                <TerminalText>
                  Initialization<AnimatedDot>.</AnimatedDot>
                </TerminalText>
              )}
              {appSetting.init &&
                (appSetting.packages ? (
                  <TerminalText>Packages installation successful!</TerminalText>
                ) : (
                  <TerminalText>
                    Installing packages<AnimatedDot>.</AnimatedDot>
                  </TerminalText>
                ))}
            </>
          )}
          {appSetting.init &&
            appSetting.packages &&
            inputHistory.map((word, i) => {
              return <TerminalText key={i}>{word}</TerminalText>;
            })}
          {appSetting.init && appSetting.packages && (
            <TerminalText>
              {input}
              <div className="cursor">&nbsp;</div>
            </TerminalText>
          )}
        </TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
