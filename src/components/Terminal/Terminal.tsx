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

const mockData = ["Terminal Init value"];

export const Terminal = () => {
  const [init, setInit] = useState(false);
  const [init2, setInit2] = useState(false);
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(mockData);
  const [inputValue, setInputvalue] = useState<string>("");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const test = () => {
    setInputvalue((prev) => prev.concat("b"));
  };
  const enter = () => {
    setData((prev) => [...prev, inputValue]);
    setInputvalue("");
  };
  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 5000);
    setTimeout(() => {
      setInit2(true);
      setReady(true);
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
          <TerminalCloseButton onClick={test}>x</TerminalCloseButton>
          <TerminalCloseButton onClick={enter}>e</TerminalCloseButton>
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
          {ready &&
            data.map((word, i) => {
              return <p key={i}>{word}</p>;
            })}
          {ready && (
            <div className="input">
              <TerminalInput>{inputValue}</TerminalInput>
              <Cursor />
            </div>
          )}
        </TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
