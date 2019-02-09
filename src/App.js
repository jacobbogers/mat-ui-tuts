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
     <AdaptingHOC /> 
     <AdaptingHook />
     <AdaptingStyledComponents /> 
     <UseThemeHook />
     <UseThemeNesting />
    </div>
  );
}

import jss from 'jss'

const createGenerateId = () => {
  let counter = 0

  return function(rule, sheet,c,d,e) {
    return JSON.stringify({rule, sheet, c,d,e})//`pizza--${rule.key}-${counter++}`
  }
}

jss.setup({createGenerateId})

const sheet = jss.createStyleSheet({
  button: {
    float: 'left'
  }
})

console.log(sheet.toString());

ReactDOM.render(<App />, document.querySelector("#app"));
