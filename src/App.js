import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'typeface-open-sans';

import jss from 'jss'
import preset from 'jss-preset-default';

jss.setup(preset())


// Create your style.
const style = {
  myButton: {
    color: 'green'
  }
}

// Compile styles, apply plugins.
const sheet = jss.createStyleSheet(style)

console.log(sheet.toString())
//ReactDOM.render(<App />, document.querySelector('#app'));
