import React , { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
});

function RadioButtons() {

  const [radioValue, selectRadio] = useState('a')
  const classes = useStyles();

 return (
      <div>
        <Radio
          checked={radioValue === 'a'}
          onChange={()=> selectRadio('a')}
          value="a"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={radioValue === 'b'}
          onChange={()=> selectRadio('b')}
          value="b"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={radioValue === 'c'}
          onChange={()=> selectRadio('c')}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={radioValue === 'd'}
          onChange={()=> selectRadio('d')}
          value="d"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          checked={radioValue === 'e'}
          onChange={()=> selectRadio('e')}
          value="e"
          color="default"
          name="radio-button-demo"
          aria-label="E"
          icon={<RadioButtonUncheckedIcon fontSize="small" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        />
      </div>
    );
  }



export default RadioButtons;