# Todo list

| Component              | demo | analyzed source                           |
| ---------------------- | ---- | ----------------------------------------- |
| app bar                | x    |                                           |
| Avatar                 | x    |                                           |
| Backdrop               | ?    |                                           |
| Badge                  | x    |                                           |
| BottomNavigation       | P    |                                           |
| BottomNavigationAction | P    |                                           |
| Button                 | D    |                                           |
| ButtonBase             | P    |                                           |
| Card                   | M    |                                           |
| CardAction             | M    |                                           |
| CardContent            | M    |                                           |
| CardHeader             | M    |                                           |
| CardMedia              | D    |                                           |
| Checkbox               | D    |                                           |
| Chip                   | D    |                                           |
| CirculatProgress       | D    |                                           |
| ClickAwayListener      | D    |                                           |
| Collapse               | D    |                                           |
| CssBaseline            | D    |                                           |
| Dialog                 | D    |                                           |
| DialogActions          | ?    |                                           |
| DialogContent          | ?    |                                           |
| DialogContentText      | ?    |                                           |
| DialogTitle            | ?    |                                           |
| Divider                | D    |                                           |
| Drawer                 | A    |                                           |
| ExpansionPanel         | A    |                                           |
| ExpansionPanelActions  | A    |                                           |
| ExpansionPanelDetails  | A    |                                           |
| ExpansionPanelSummary  | A    |                                           |
| Fab                    | D    |                                           |
| FilledInput            | D    |                                           |
| FormControl            | A    |                                           |
| FormControlLabel       | D    |                                           |
| FormGroup              | D    |                                           |
| FormHelperText         | D    |                                           |
| FormLabel              | D    |                                           |
| Grid                   | D    | [doc][grid-doc]                           |
| GridList               | P    |                                           |
| GridListTile           | P    | check the coverage of an image (example ) |
| Grow                   | D    | [demo][grow-demo]                         |
| Hidden                 | D    |                                           |
| Icons                  | D    |                                           |
| IconButton             | D    | see grid list demo                        |
| Input                  |      | the big one                               |
| nputAdornmen           |      |                                           |
| nputBas                |      |                                           |
| nputLabe               |      |                                           |
| inearProgres           |      |                                           |
| in                     |      |                                           |
| is                     |      |                                           |
| istIte                 |      |                                           |
| istItemAvata           |      |                                           |
| istItemIco             |      |                                           |
| istItemSecondaryActio  |      |                                           |
| istItemTex             |      |                                           |
| istSubheade            |      |                                           |
| en                     |      |                                           |
| enuIte                 |      |                                           |
| enuLis                 |      |                                           |
| obileSteppe            |      |                                           |
| oda                    |      |                                           |
| uiThemeProvide         |      |                                           |
| ativeSelec             |      |                                           |
| oSs                    |      |                                           |
| utlinedInpu            |      |                                           |
| ape                    |      |                                           |
| opove                  |      |                                           |
| oppe                   |      |                                           |
| orta                   |      |                                           |
| adi                    |      |                                           |
| adioGrou               |      |                                           |
| ootRe                  |      |                                           |
| elec                   |      |                                           |
| lid                    |      |                                           |
| nackba                 |      |                                           |
| nackbarConten          |      |                                           |
| te                     |      |                                           |
| tepButto               |      |                                           |
| tepConnecto            |      |                                           |
| tepConten              |      |                                           |
| tepIco                 |      |                                           |
| tepLabe                |      |                                           |
| teppe                  |      |                                           |
| vgIco                  |      |                                           |
| wipeableDrawe          |      |                                           |
| witc                   |      |                                           |
| a                      |      |                                           |
| abl                    |      |                                           |
| ableBod                |      |                                           |
| ableCel                |      |                                           |
| ableFoote              |      |                                           |
| ableHea                |      |                                           |
| ablePaginatio          |      |                                           |
| ableRo                 |      |                                           |
| ableSortLabe           |      |                                           |
| ab                     |      |                                           |
| extFiel                |      |                                           |
| oolba                  |      |                                           |
| oolti                  |      |                                           |
| ouchRippl              |      |                                           |
| Typography             |      |                                           |
| Zoo                    |      |                                           |

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

<li class="j1tkml1p" style="width:66.66666666666667%;height:164px;padding:2px">
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

```css

```


[grid-doc]: https://material-ui.com/layout/grid/
[grow-demo]: https://material-ui.com/utils/transitions/#grow
