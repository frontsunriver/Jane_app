import React from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import { THEMES } from "../constants";
import createTheme from "../theme";

import GlobalStyle from "../components/GlobalStyle";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Presentation = ({ children }) => {
  return (
    <MuiThemeProvider theme={createTheme(THEMES.DEFAULT)}>
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Root>
          <CssBaseline />
          <GlobalStyle />
          <AppContent>
            {children}
            <Outlet />
          </AppContent>
        </Root>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Presentation;
