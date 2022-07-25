import {
  TerminalBackground,
  TerminalWrapper,
  TerminalTopbar,
  TerminalCloseButton,
  TerminalBody,
} from "./Terminal.style";
import { VscChromeClose } from "react-icons/vsc";

export const Terminal = () => {
  return (
    <TerminalWrapper>
      <TerminalBackground>
        <TerminalTopbar>
          <span>HFX-SOFT v.1.0.0a</span>
          <TerminalCloseButton>
            <VscChromeClose />
          </TerminalCloseButton>
        </TerminalTopbar>
        <TerminalBody></TerminalBody>
      </TerminalBackground>
    </TerminalWrapper>
  );
};
