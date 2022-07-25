import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
