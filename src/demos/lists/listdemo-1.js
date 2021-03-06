/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
/*
  import ListItem from '@material-ui/core/ListItem';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import ListItemText from '@material-ui/core/ListItemText';
  import Divider from '@material-ui/core/Divider';
  import InboxIcon from '@material-ui/icons/Inbox';
  import DraftsIcon from '@material-ui/icons/Drafts';
*/

const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
});

function SimpleList(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<List component="ul" dense={true} disablePadding={true} subheader={<scan>hello world</scan>}>
				<li>Hi</li>
				<li>Ho</li>
			</List>
		</div>
	);
}

SimpleList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
