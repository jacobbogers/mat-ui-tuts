import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

function DeepChild() {
  const theme = useTheme();
  return <Button>{`spacing ${theme.spacing}`}</Button>;
}

function UseThemeHook() {
  return (
    <div>
       <ThemeProvider
        theme={{
          spacing: "8px"
        }}
      >
        <DeepChild />
      </ThemeProvider>
    </div>
  );
}

export default UseThemeHook;
