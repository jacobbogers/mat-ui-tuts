# Todo list

| Component               | demo | analyzed source                             |
|-------------------------|------|---------------------------------------------|
| app bar                 | x    |                                             |
| Avatar                  | x    |                                             |
| Backdrop                | ?    |                                             |
| Badge                   | x    |                                             |
| BottomNavigation        | P    |                                             |
| BottomNavigationAction  | P    |                                             |
| Button                  | D    |                                             |
| ButtonBase              | P    |                                             |
| Card                    | M    |                                             |
| CardAction              | M    |                                             |
| CardContent             | M    |                                             |
| CardHeader              | M    |                                             |
| CardMedia               | D    |                                             |
| Checkbox                | D    |                                             |
| Chip                    | D    |                                             |
| CirculatProgress        | D    |                                             |
| ClickAwayListener       | D    |                                             |
| Collapse                | D    |                                             |
| CssBaseline             | D    |                                             |
| Dialog                  | D    |                                             |
| DialogActions           | ?    |                                             |
| DialogContent           | ?    |                                             |
| DialogContentText       | ?    |                                             |
| DialogTitle             | ?    |                                             |
| Divider                 | D    |                                             |
| Drawer                  | A    |                                             |
| ExpansionPanel          | A    |                                             |
| ExpansionPanelActions   | A    |                                             |
| ExpansionPanelDetails   | A    |                                             |
| ExpansionPanelSummary   | A    |                                             |
| Fab                     | D    |                                             |
| FilledInput             | D    |                                             |
| FormControl             | A    |                                             |
| FormControlLabel        | D    |                                             |
| FormGroup               | D    |                                             |
| FormHelperText          | D    |                                             |
| FormLabel               | D    |                                             |
| Grid                    | D    | [doc][grid-doc]                             |
| GridList                | P    |                                             |
| GridListTile            | P    | check the coverage of an image (example )   |
| Grow                    | D    | [demo][grow-demo]                           |
| Hidden                  | D    |                                             |
| Icons                   | D    |                                             |
| IconButton              | D    | see grid list demo                          |
| Input                   | D    | the big one                                 |
| InputAdornment          | D    |                                             |
| InputBase               | D    |                                             |
| InputLabel              | D    | need "Input" and "FormControl"              |
| LinearProgres           | D    |                                             |
| Link                    | D    |                                             |
| List                    | D    |                                             |
| ListItem                | D    |                                             |
| ListItemAvatar          | D    |                                             |
| ListItemIcon            | D    |                                             |
| ListItemSecondaryAction | D    |                                             |
| ListItemText            | D    |                                             |
| ListSubheader           | D    |                                             |
| Menu                    | A    |                                             |
| MenuItem                | A    |                                             |
| MenuList                | A    |                                             |
| MobileStepper           | A    |                                             |
| Modal                   | A    | Nice autocomplete helpers, check them out   |
| MuiThemeProvider        | A    |                                             |
| NativeSelect            | A    | use build in select instead of material one |
| NoSsr                   | S    |                                             |
| OutlinedInput           | A    |                                             |
| Paper                   | A    |                                             |
| Popover                 | A    |                                             |
| Popper                  | A    |                                             |
| Portal                  | A    |                                             |
| Radio                   | A    |                                             |
| RadioGroup              | A    |                                             |
| RootRef                 | A    | div component using React.createRef         |
| Select                  | A    |                                             |
| Slide                   | A    | also look at Grow, Fade etc                 |
| Snackbar                | A    |                                             |
| SnackbarContent         | A    |                                             |
| Step                    | A    |                                             |
| StepButton              | A    |                                             |
| StepConnector           | A    |                                             |
| StepContent             | A    |                                             |
| StepIcon                | A    |                                             |
| StepLabel               | A    |                                             |
| Stepper                 | A    |                                             |
| SvgIcon                 | A    |                                             |
| SwipeableDrawer         | A    | drawer stuff                                |
| Switch                  | A    | pimped up checkboxes                        |
| Tab                     | A    | tabbing without the tabpanes (buttons only) |
| Table                   | A    | not impressed, but ok                       |
| TableBody               | A    |                                             |
| TableCell               | A    |                                             |
| TableFooter             | A    |                                             |
| TableHead               | A    |                                             |
| TablePagination         | A    |                                             |
| TableRow                | A    |                                             |
| TableSortLabel          | A    |                                             |
| Tabs                    | A    |                                             |
| TextField               | A    |                                             |
| Toolbar                 | A    |                                             |
| Tooltip                 | A    |                                             |
| TouchRipple             | ?    |                                             |
| Typography              | A    |                                             |
| Zoom                    | A    | transition like Fade, Grow, Slide,etc       |

```html
<style>
	.j1tkml1p {
        box-sizing: border-box;
        flex-shrink: 0;
	}

	.j17kk6pz {
		height: 100%;
		display: block;
		position: relative;
		overflow: hidden;
	}

	.jr2wztu {
		top: 50%;
		width: 100%;
		position: relative;
		transform: translateY(-50%);
	}
</style>

<li
	class="j1tkml1p" 
	style="width:66.66666666666667%;height:164px;padding:2px">
		<div class="j17kk6pz" style="overflow: visible;">
		<img
			src="https://material-ui.com/static/images/grid-list/breakfast.jpg"
			alt="Breakfast"
			class="jr2wztu"
		/>
		<!-- full link address https://material-ui.com/static/images/grid-list/breakfast.jpg -->
	</div>
</li>
```

#### complete working example

```html
<style>
	*,
	html,
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		height: 100%;
		width: 100%;
	}

	body {
		height: 100%;
		width: 100%;
		border: 4px yellow solid;
	}

	.j1tkml1p {
		box-sizing: border-box;
		border: 3px red solid;
		height: 100%;
	}

	ul {
		list-style-type: none;
		display: block;
		height: 100%;
	}

	.j17kk6pz {
		height: 100%;
		width: 20%;
		display: block;
		position: relative;
		border: 3px dashed black;
	}

	.jr2wztu {
		border: 4px green solid;
		margin: 0;
		padding: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		object-position: 50% 50%;
		background: black;
	}
</style>
<ul>
	<li class="j1tkml1p">
		<div class="j17kk6pz">
			<img
				src="https://material-ui.com/static/images/grid-list/breakfast.jpg"
				alt="Breakfast"
				class="jr2wztu"
			/>
		</div>
	</li>
</ul>
```

### css transitions

[from](https://flaviocopes.com/css-transitions/)

- CSS shortcut

```css
.container {
	transition: property duration timing-function delay;
}
```

- events: accourding to [spec](https://drafts.csswg.org/css-transitions/#transition-events)
  - `transitionend`: The transitionend event occurs at the completion of the transition.
  - `transitionrun`: The transitionrun event occurs when a transition is created
  - `transitionstart`: The transitionstart event occurs when a transition’s delay phase ends.
  - `transitioncancel`: he transitioncancel event occurs when a transition is canceled.

### React transiton group

3 subsections

#### Transitions

I dont think this is CSS, transitions are "jumpy?".

#### CSSTransitions

Name speaks for itself i think

#### TransitionGroup

???

#### breakpoints

##### `theme.breakpoints.up(key) => media query`

This gives something like

#### nice libraries

Look at these 
- npm 'react-swipeable-views'
- npm 'react-swipeable-views-utils'




[grid-doc]: https://material-ui.com/layout/grid/
[grow-demo]: https://material-ui.com/utils/transitions/#grow
