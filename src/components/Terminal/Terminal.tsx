import { useEffect, useRef } from "react";
import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalCloseButton,
  TerminalBody,
  TerminalText,
  AnimatedDot,
} from "./Terminal.style";
import { useInput } from "context/InputContext";
import { IApp } from "context/types";

import { VscChromeClose } from "react-icons/vsc";
import { scrollToBottom } from "helpers/scrollToBottom";

import { getRandNumb } from "helpers/getRandNum";

const num = getRandNumb(5);

export const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const { input, setInput, inputHistory, appSetting, setAppSettings } =
    useInput();

  useEffect(() => {
    setTimeout(() => {
      setAppSettings((prevState: IApp) => ({ ...prevState, init: true }));
    }, 5000);
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
                <TerminalText
                  noPrefix
                >{`Initialization done in ${num}s`}</TerminalText>
              ) : (
                <TerminalText>
                  Initialization<AnimatedDot>.</AnimatedDot>
                </TerminalText>
              )}
              {appSetting.init &&
                (appSetting.keyboard ? (
                  <>
                    <TerminalText noPrefix>
                      Keyboard installation successful!
                    </TerminalText>
                    <TerminalText noPrefix>
                      Type <span className="highlighted">yarn start</span> or
                      <span className="highlighted"> npm start</span> to run the
                      application.
                    </TerminalText>
                  </>
                ) : (
                  <TerminalText>
                    Installing keyboard<AnimatedDot>.</AnimatedDot>
                  </TerminalText>
                ))}
            </>
          )}
          {appSetting.init &&
            appSetting.keyboard &&
            inputHistory.map((word, i) => {
              return (
                <>
                  <TerminalText key={i}>{word}</TerminalText>
                  <TerminalText noPrefix>Test Response</TerminalText>
                </>
              );
            })}
          {appSetting.init && appSetting.keyboard && (
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
