import React , { useState } from 'react';
//import { makeStyles } from '@material-ui/styles';

import Checkbox from '@material-ui/core/Checkbox';

function useCheckStates(nrSlots){
    const setters = Array.from({ length: nrSlots }).map(()=> useState(false));
    const allValues = setters.map(([v]) => v);
    const allSetters = setters.map(([_,s]) => s);
    return [allValues, allSetters];
}

function Checkboxes (){
    const [values, setters] = useCheckStates(7);
    return (
        <div>
          <Checkbox
            checked={ values[0] }
            onChange={ () => setters[0](!values[0]) }
            value="0"
          />
          <Checkbox
            checked={ values[1] }
            onChange={() => setters[1](!values[1])}
            value="1"
            color="primary"
          />
          <Checkbox value="checkedC" checked={ values[2] } onChange={() => setters[2](!values[2])} />
          <Checkbox checked = { values[3] } disabled value="checkedD" onChange={() => setters[3](!values[3])} />
          <Checkbox disabled checked={ values[4] } onChange={() => setters[4](!values[4])} value="checkedE" />
          <Checkbox
            checked={values[5]}
            onChange={() => setters[5](!values[5])}
            value="checkedF"
            indeterminate
          />
          <Checkbox ochecked={ values[6] } onChange={() => setters[6](!values[6])} defaultChecked color="default" value="checkedG" />
        </div>
      );
}

export default Checkboxes;