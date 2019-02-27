// react
import React, { useState } from 'react';

//material
import { makeStyles } from '@material-ui/styles';

//mate comp
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//mate color
import green from '@material-ui/core/colors/green';

//mat icons
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';



const useStyles = makeStyles({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
});

function useCheckStates(nrSlots){
    const setters = Array.from({ length: nrSlots }).map(()=> useState(false));
    const allValues = setters.map(([v]) => v);
    const allSetters = setters.map(([v,s]) => () => s(!v));
    return [allValues, allSetters];
}

function CheckboxLabelsHooks(){

   const [vals, sets] = useCheckStates(9)
   const classes  = useStyles()

   // shortcuts for classnames
   const { root, checked } = classes;

   //snip1
    const ctrl1 = <Checkbox checked={vals[0]} onChange={sets[0]} value="cA" />;
    const ctrl2 = <Checkbox checked={vals[1]} onChange={sets[1]} value="cB" color="primary" />;
    const ctrl3 = <Checkbox checked={vals[2]} onChange={sets[2]} value="cC"  />;
    const ctrl4 = <Checkbox checked={vals[3]} onChange={sets[3]} value="cD" />
    const ctrl5 = <Checkbox checked={vals[4]} onChange={sets[4]} value="cE" />
    const ctrl6 = <Checkbox checked={vals[5]} onChange={sets[5]} value="cF" intermediate />
    const ctrl7 = <Checkbox checked={vals[6]} onChange={sets[6]} value="cG" intermediate classes={{ root, checked }}/>
    const ctrl8 = <Checkbox checked={vals[7]} onChange={sets[7]} value="cH" checkedIcon={<Favorite />}  icon={<FavoriteBorder />} />
    const ctrl9 = 
        <Checkbox 
            checked={vals[8]} 
            onChange={sets[8]} 
            value="cI" 
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
        />
 

    return (
      <FormGroup row>
        <FormControlLabel control={ctrl1} label="Secondary" />
        <FormControlLabel control={ctrl2} label="Primary" />
        <FormControlLabel control={ctrl3} label="Uncontrolled" />
        <FormControlLabel control={ctrl4} label="Disabled" disabled />
        <FormControlLabel control={ctrl5} label="Disabled" disabled />
        <FormControlLabel control={ctrl6} label="Indeterminate" />
        <FormControlLabel control={ctrl7} label="Custom Color" />
        <FormControlLabel control={ctrl8} label="Custom icon" />
        <FormControlLabel control={ctrl9} label="Custom size" />
      </FormGroup>
    );
  }



export default CheckboxLabelsHooks;
