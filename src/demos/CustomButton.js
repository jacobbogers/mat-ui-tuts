import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import flamepic from '../../The_Trolls_Tongue.jpg';

const useStyles = makeStyles({
    root: {
        // picture centric
        background: () => `url(${flamepic}) no-repeat rgb(128,128,128)`,
        imageRendering: 'pixelated',
        backgroundOrigin: 'border-box !important',
        backgroundSize: 'cover !important',
        backgroundPosition: '50% 50% !important',
        //layout centric
        height: 200,
        width: 'calc( 200px * 4/3 )',
        margin: 10
    },
   /* disabled: {
        backgroundBlendMode: 'darken'
    }*/
});

function CustomButton(){
    const classes = useStyles();
    return <ButtonBase classes={classes}></ButtonBase>
}

export default CustomButton;