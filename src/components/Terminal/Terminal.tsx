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

const num = getRandNumb(5);

export const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<any>({ init: true, packages: true });
  const [hideInit, setHideInit] = useState(false);

  const { input, setInput, inputHistory } = useInput();

  useEffect(() => {
    setTimeout(() => {
      setLoading((prevState: any) => ({ ...prevState, init: true }));
    }, 5000);
    setTimeout(() => {
      setLoading((prevState: any) => ({ ...prevState, packages: true }));
    }, 15000);
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
          {!hideInit && (
            <>
              {loading.init ? (
                <TerminalText>{`Initialized done in ${num}s`}</TerminalText>
              ) : (
                <TerminalText>
                  Initialization<AnimatedDot>.</AnimatedDot>
                </TerminalText>
              )}
              {loading.init &&
                (loading.packages ? (
                  <TerminalText>Packages installation successful!</TerminalText>
                ) : (
                  <TerminalText>
                    Installing packages<AnimatedDot>.</AnimatedDot>
                  </TerminalText>
                ))}
            </>
          )}
          {loading.init &&
            loading.packages &&
            inputHistory.map((word, i) => {
              return <p key={i}>{word}</p>;
            })}
          {loading.init && loading.packages && (
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
