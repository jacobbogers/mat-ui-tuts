import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
      width: 500,
      margin: 10
  }
});


function SimpleBottomNavigationHooks () {
  const [selection, setSelection] = useState(0);
  const classes = useStyles();
  
 return (
      <BottomNavigation
        value={selection}
        onChange={(_e,v)=>setSelection(v)}
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction value={"some random text"} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
}


export default SimpleBottomNavigationHooks;
