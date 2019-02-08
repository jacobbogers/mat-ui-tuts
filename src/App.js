import React from "react";
import ReactDOM from "react-dom";

import 'typeface-roboto';
//import Button from "@material-ui/core/Button";
//
// demos
//
//import Hook from "./css-in-js/hook";
//import HOC from "./css-in-js/hoc";
//import AdaptStyleComp from "./css-in-js/adapt-style";
//import AdaptHook from "./css-in-js/adapt-style";
//import AdaptHigh from "./css-in-js/adapt-high";
//import UseThemeHook from "./css-in-js/advanced-hook";
import UseThemeNesting from "./css-in-js/advanced-theme-nesting";

// app.scss
import "./app.scss";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

function App() {
  return (
    <div id="container" style={styles}>
      {/*<Button variant="contained" color="primary">
        Hello World
      </Button>
      <Hook />
      <HOC />
      <AdaptStyleComp />
      <AdaptHook />
      <AdaptHigh />
     {/* <Themes/>*/}
     {/*<AdaptHigh />*/}
     {/*<UseThemeHook />*/}
     <UseThemeNesting />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
