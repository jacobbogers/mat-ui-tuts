//https://www.valentinog.com/blog/react-webpack-babel/

npm install @material-ui/core

npm install @material-ui/icons

icon tool selector: https://material.io/tools/icons/

more material icons: https://materialdesignicons.com/

font awesome icons: https://fontawesome.com/icons?d=gallery

The "Icon" component uses *(font ligature)*

```javascript
import Icon from '@material-ui/core/Icon';

<Icon>star</Icon>
```


# Button, Fab, CustomButton, IconButton

All done except for Custom button based on "BaseButton" class.


## CSS

You can override all the class names injected by Material-UI thanks to the classes property. This property accepts the following keys:


| Name               | Description                                                                                |
|--------------------|--------------------------------------------------------------------------------------------|
| root               | Styles applied to the root element.                                                        |
| label              | Styles applied to the span element that wraps the children.                                |
| text               | Styles applied to the root element if variant="text".                                      |
| textPrimary        | Styles applied to the root element if variant="text" and color="primary".                  |
| textSecondary      | Styles applied to the root element if variant="text" and color="secondary".                |
| flat               | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| flatPrimary        | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| flatSecondary      | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| outlined           | Styles applied to the root element if variant="outlined".                                  |
| outlinedPrimary    | Styles applied to the root element if variant="outlined" and color="primary".              |
| outlinedSecondary  | Styles applied to the root element if variant="outlined" and color="secondary".            |
| contained          | Styles applied to the root element if variant="[containedfab]".                            |
| containedPrimary   | Styles applied to the root element if variant="[containedfab]" and color="primary".        |
| containedSecondary | Styles applied to the root element if variant="[containedfab]" and color="secondary".      |
| raised             | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| raisedPrimary      | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| raisedSecondary    | Styles applied to the root element for backwards compatibility with legacy variant naming. |
| fab                | Styles applied to the root element if variant="[fabextendedFab]".                          |
| extendedFab        | Styles applied to the root element if variant="extendedFab".                               |
| focusVisible       | Styles applied to the ButtonBase root element if the button is keyboard focused.           |
| disabled           | Styles applied to the root element if disabled={true}.                                     |
| colorInherit       | Styles applied to the root element if color="inherit".                                     |
| mini               | Styles applied to the root element if mini={true} & variant="[fabextendedFab]".            |
| sizeSmall          | Styles applied to the root element if size="small".                                        |
| sizeLarge          | Styles applied to the root element if size="large".                                        |
| fullWidth          | Styles applied to the root element if fullWidth={true}.                                    |

# Avatar

use random [user data generator](https://randomuser.me/)