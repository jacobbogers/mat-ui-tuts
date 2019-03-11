/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
	root: {
		width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: 0,
        padding: 0
	}
});

function SimpleList(props) {
	const { classes } = props;

    return (
		<ul className={classes.root}>
			<ListItem disableGutters={true} divider={true} disabled={true} alignItems="center" butten={true} dense={true}>List Item 0</ListItem>
            <ListItem disabled={true} alignItems="center" butten={true} dense={true}>List Item 1</ListItem>
		</ul>
	);
}

SimpleList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
