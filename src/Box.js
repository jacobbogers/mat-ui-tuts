//https://codesandbox.io/s/938z306rm4
import styled from 'styled-components';
import {compose, spacing, palette, breakpoints, typography } from '@material-ui/system';

const Box = styled.div`
${breakpoints(
    compose(
        spacing,
        palette,
        typography
    ),
)}
`;


export default Box;
