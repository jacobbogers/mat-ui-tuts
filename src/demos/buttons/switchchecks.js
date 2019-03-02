import React , { useReducer } from 'react';
import Switch from '@material-ui/core/Switch';


function reducer(state, action){
    // is there a change?
    const { map } = state;
    const found = map.get(action.type);
    if (!found || action.value !== found){
        map.set(action.type, action.value);
        return { map };// new obj
    }
    return state; // return same object nothing changed
}

function Switches() {
    
    const [state, dispatch] = useReducer(reducer, { map: new Map([['checkedA',true],['checkedB', true]]) });
  
    const handleChange = name => event => {
       dispatch({ type:name, value: event.target.checked });
     };
    const { map } = state;
     return (
      <div>
        <Switch
          checked={map.get('checkedA')}
          onChange={handleChange('checkedA')}
          
        />
        <Switch
          checked={map.get('checkedB')}
          onChange={handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
        <Switch value="checkedC" />
        <Switch disabled value="checkedD" />
        <Switch disabled checked value="checkedE" />
    <Switch value="checkedF" color="default" />
      </div>
    );
}


export default Switches;