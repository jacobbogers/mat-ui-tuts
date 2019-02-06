import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
//
// demos
//
import Hook from "./css-in-js/hook";
import HOC from "./css-in-js/hoc";
import './app.scss';

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

function App() {
  return (
    <div id="container" style={styles}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Hook />
      <HOC />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
