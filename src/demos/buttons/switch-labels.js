import React, { useReducer } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


function reducer(state, a){
  // is there a change?
  const { map } = state;
  const found = map.get(a.type);
  if (found  === undefined) {
      map.set(a.type, a.value);
      return { map };// new obj
  }
  map.set(a.type, a.value);
  return { map }; 
}

export default function SwitchLabels() {
	const [state, dispatch] = useReducer(reducer, { map: new Map([['checkedA', true], ['checkedB', true]]) });

  const { map } = state;
  
  const handleChange = name => event => {
    dispatch({ type:name, value: event.target.checked });
  };

	return (
		<FormGroup row>
			<FormControlLabel
				control={<Switch checked={map.get('checkedA')} onChange={handleChange('checkedA')} value="checkedA" />}
				label="Secondary"
			/>
			<FormControlLabel
				control={
					<Switch
						checked={map.get('checkedB')}
						onChange={handleChange('checkedB')}
						value="checkedB"
						color="primary"
					/>
				}
				label="Primary"
			/>
			<FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
			<FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
			<FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
		</FormGroup>
	);
}
