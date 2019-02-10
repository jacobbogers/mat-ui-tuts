//https://codesandbox.io/s/938z306rm4

import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';

const Box = styled.div`${palette}${spacing}${typography}`;

export default Box;