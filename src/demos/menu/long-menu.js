import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
	'None',
	'Atria',
	'Callisto',
	'Dione',
	'Ganymede',
	'Hangouts Call',
	'Luna',
	'Oberon',
	'Phobos',
	'Pyxis',
	'Sedna',
	'Titania',
	'Triton',
	'Umbriel'
].sort();

const ITEM_HEIGHT = 48;

export default function LongMenu() {
	const [anchorEl, setAnchorEl] = useState(null);

	function onClose(e, reason) {
		console.log(`%c reason for closing:${reason}`, 'color:red');
		setAnchorEl(null);
	}

	function menuSelect(e) {
		onClose(e, 'menu-selected');
	}

	function openMenu(e) {
		console.log(`%c opening the menu`, 'color:green');
		setAnchorEl(e.currentTarget);
	}

	const open = !!anchorEl;

	return (
		<div>
			<IconButton
				aria-label="More"
				aria-owns={open ? 'long-menu' : undefined}
				aria-haspopup="true"
				onClick={openMenu}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={onClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: 200
					}
				}}
			>
				{options.map(option => (
					<MenuItem key={option} selected={!['Pyxis','Atria'].includes(option)} onClick={menuSelect}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
