# API

## CSS

### Styles

- withStyles (connetor like)
- styled (hoc)
- makeStyles (hook)

### Themes

- useTheme (hook) gives access to theme object in component
- makeStyles/useStyles (provide function that will pass theme object as first argument
- withTheme enhancer (just like "connect" for react-redux)

#### ThemeProvider

Context for passing a theme object as a context down the child tree

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>...</ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

#### withTheme

withTheme is an enhancer providing the `theme` props to the object property

```javascript
import React from 'react';
import { withTheme } from '@material-ui/styles';

function MyComponent(props) {
  return <div>{props.theme.direction}</div>;
}

export default withTheme()(MyComponent);
```

#### useTheme

useTheme is an hook to lift the `theme` object in a functional component.

```javascript
import React from 'react';
import { useTheme } from '@material-ui/styles';

export default function MyComponent() {
  const theme = useTheme();

  return <div>{`spacing ${theme.spacing}`}</div>;
}
```