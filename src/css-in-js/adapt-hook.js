import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

// cooks the jss stylesheet at this
const useStyles = makeStyles({
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
    margin:'1rem 0 !important'
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.string.isRequired,
};

const styles = {
    display: "flex",
    border: '1px solid orange',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

function AdaptingHook() {
  return (
    <div style={styles}>
      <MyButton color="red">(adapt-hook)Red</MyButton>
      <MyButton color="blue">(adapt-hook)Blue</MyButton>
    </div>
  );
}

export default AdaptingHook;