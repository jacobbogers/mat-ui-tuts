import React from "react";
import ReactDOM from "react-dom";

import "typeface-roboto";

// demos basic

import AdaptingHOC from "./css-in-js/adapt-hoc";
import AdaptingHook from "./css-in-js/adapt-hook";
import AdaptingStyledComponents from "./css-in-js/adapt-style";

// demos advanced

import UseThemeHOC from "./css-in-js/advanced-theme-hoc";
import UseThemeHook from "./css-in-js/advanced-theme-hook";
import UseThemeNesting from "./css-in-js/advanced-theme-nesting";

// system (alpha)
import Demo from "./system-alpha/basics/demo";
import Box from "./Box";
// app.scss
import "./app.scss";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: '600px'
};

function App() {
  return (
    <div id="container" style={styles}>
	 <Box color="white" bgcolor="palevioletred" p={1}>
        Styled components
      </Box>
      <Box color="white" bgcolor="palevioletred" p={1}>
        JSS
      </Box>
      <Box p={1}>4px</Box>
      <Box p={2}>8px</Box>
      <Box p={-1}>-4px</Box>
      <Demo />
      <AdaptingHOC />
      <AdaptingHook />
      <AdaptingStyledComponents />
      <UseThemeHOC />
      <UseThemeHook />
      <UseThemeNesting />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
