import React from "react";
import ReactDOM from "react-dom";

import 'typeface-roboto';

// demos basic

import AdaptingHOC from './css-in-js/adapt-hoc';
import AdaptingHook from './css-in-js/adapt-hook';
import AdaptingStyledComponents from './css-in-js/adapt-style';

// demos advanced

import UseThemeHOC from './css-in-js/advanced-theme-hoc';
import UseThemeHook from "./css-in-js/advanced-theme-hook";
import UseThemeNesting from "./css-in-js/advanced-theme-nesting";

// system (alpha)
import Demo from './system-alpha/basics/demo'

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
