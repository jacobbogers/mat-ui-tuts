import React from 'react';

//import { withStyles } from '@material-ui/core/styles';
//hooks version
import { makeStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400
  },
  bullet: {
    margin: '0 2px',
    transform: 'scale(0.8)',
    display: 'inline-block'
  },
  noselect: {
    userSelect: 'none'
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard() {
    const classes = useStyles();
    
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.noselect} variant="body1" color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography className={classes.noselect} variant="h5" component="h2">be{bull}nev{bull}o{bull}lent</Typography>
        <Typography className={`${classes.pos} ${classes.noselect}`} color="textSecondary">
          adjective
        </Typography>
        
        <Typography className={classes.noselect} component="p">
          <div>well meaning and kindly.</div>
          <span>{'"a benevolent smile"'}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}



export default SimpleCard;
