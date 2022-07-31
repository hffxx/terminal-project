import { useEffect, useRef } from "react";
import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalButton,
  TerminalBody,
  TerminalText,
  AnimatedDot,
} from "./Terminal.style";
import { useInput } from "context/InputContext";
import { IApp } from "context/types";
import { VscChromeClose } from "react-icons/vsc";
import { scrollToBottom } from "helpers/scrollToBottom";
import { getRandNumb } from "helpers/getRandNum";
import { terminalResponse } from "helpers/terminalResponse";
import { RESPONSES } from "data/responses";

const num = getRandNumb(5);

export const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const { input, inputHistory, appSettings, setAppSettings } = useInput();
  const { init, hideInit, keyboard, canWrite, hideTerminal } = appSettings;

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

  const toggleTerminal = (value: boolean) => {
    setAppSettings((prevValues) => ({ ...prevValues, hideTerminal: value }));
  };

  return (
    <TerminalWrapper>
      {hideTerminal ? (
        <TerminalButton padding="10px" onClick={() => toggleTerminal(false)}>
          Reload Terminal
        </TerminalButton>
      ) : (
        <TerminalBackground>
          <TerminalTopbar>
            <span>HFX-SOFT v.1.0.0a</span>
            <TerminalButton onClick={() => toggleTerminal(true)}>
              <VscChromeClose />
            </TerminalButton>
          </TerminalTopbar>
          <TerminalBody ref={terminalRef} id="terminal-body">
            {!hideInit && (
              <>
                {init ? (
                  <TerminalText
                    noPrefix
                  >{`Initialization done in ${num}s`}</TerminalText>
                ) : (
                  <TerminalText>
                    Initialization<AnimatedDot>.</AnimatedDot>
                  </TerminalText>
                )}
                {init &&
                  (keyboard ? (
                    <>
                      <TerminalText noPrefix>
                        Keyboard installation successful!
                      </TerminalText>
                      <TerminalText noPrefix>
                        Type{" "}
                        <span className="highlighted">
                          {RESPONSES[0].inputs[0]}
                        </span>{" "}
                        to show list of avaible commands.
                      </TerminalText>
                    </>
                  ) : (
                    <TerminalText>
                      Installing keyboard<AnimatedDot>.</AnimatedDot>
                    </TerminalText>
                  ))}
              </>
            )}
            {init &&
              keyboard &&
              inputHistory.map((input, i) => {
                return (
                  <div key={i}>
                    <TerminalText>{input}</TerminalText>
                    {input.trim() !== "" && (
                      <TerminalText noPrefix>
                        {terminalResponse(input)}
                      </TerminalText>
                    )}
                  </div>
                );
              })}
            {init && keyboard && canWrite && (
              <TerminalText>
                {input}
                <div className="cursor"> </div>
              </TerminalText>
            )}
          </TerminalBody>
        </TerminalBackground>
      )}
    </TerminalWrapper>
  );
};
