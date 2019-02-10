import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
  root: {
    background: styledBy('color', {
      red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    border: 0,
    borderRadius: 3,
    boxShadow: styledBy('color', {
      red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
    color: 'white',
    height: 48,
    padding: '30px',
    margin:'1em 0 !important'
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};

const cStyles = {
    display: "flex",
    border: '2px dashed blue',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};


const MyButton = withStyles(styles)(MyButtonRaw);

function AdaptingHOC() {
  return (
    <div style={cStyles}>
      <MyButton color="red">(adapt-hoc)Red</MyButton>
      <MyButton color="blue">(adapt-hoc)Blue</MyButton>
    </div>
  );
}

export default AdaptingHOC;