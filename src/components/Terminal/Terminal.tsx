import { useEffect, useState, useRef } from "react";
import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalCloseButton,
  TerminalBody,
  InitText,
  AnimatedDot,
  TerminalInput,
  Cursor,
} from "./Terminal.style";
import { VscChromeClose } from "react-icons/vsc";
import { scrollToBottom } from "../../services/scrollToBottom";
import { getRandNumb } from "../../services/getRandNum";
import { useInput } from "../../context/InputContext";

const num = getRandNumb(5);

export const Terminal = () => {
  const [data, setData] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<any>({ init: false, packages: false });
  const [hideInit, setHideInit] = useState(false);
  const { input, setInput } = useInput();

  const enter = () => {
    if (input === "cls") {
      setHideInit(false);
      setData([]);
      setInput("");
      return;
    }
    setData((prev: string[]) => [...prev, input]);
    setInput("");
  };

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
  }, [data]);

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
          <TerminalCloseButton onClick={enter}>e</TerminalCloseButton>
          {!hideInit && (
            <>
              {loading.init ? (
                <InitText>{`Initialized done in ${num}s`}</InitText>
              ) : (
                <InitText>
                  Initialization<AnimatedDot>.</AnimatedDot>
                </InitText>
              )}
              {loading.init &&
                (loading.packages ? (
                  <InitText>Packages installation successful!</InitText>
                ) : (
                  <InitText>
                    Installing packages<AnimatedDot>.</AnimatedDot>
                  </InitText>
                ))}
            </>
          )}
          {loading.init &&
            loading.packages &&
            data.map((word, i) => {
              return <p key={i}>{word}</p>;
            })}
          {loading.init && loading.packages && (
            <div className="input">
              <TerminalInput>{input}</TerminalInput>
              <Cursor />
            </div>
          )}
        </TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
