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

const num = getRandNumb(5);

export const Terminal = () => {
  const [data, setData] = useState<string[]>([]);
  const [inputValue, setInputvalue] = useState<string>("cls");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<any>({ init: false, packages: false });
  const [clean, setClean] = useState(true);

  const test = () => {
    setInputvalue((prev) => prev.concat("b"));
  };
  const enter = () => {
    if (inputValue === "cls") {
      setClean(false);
      setData([]);
      setInputvalue("");
      return;
    }
    setData((prev: string[]) => [...prev, inputValue]);
    setInputvalue("");
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
          <TerminalCloseButton onClick={test}>b</TerminalCloseButton>
          <TerminalCloseButton onClick={enter}>e</TerminalCloseButton>
          {clean && (
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
              <TerminalInput>{inputValue}</TerminalInput>
              <Cursor />
            </div>
          )}
        </TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
