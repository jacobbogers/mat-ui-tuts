import React from "react";
import Typography from "@material-ui/core/Typography";
import { unstable_Box as Box } from "@material-ui/core/Box";

function Color() {
  return (
    <Typography component="div" variant="body1">
      <Box color="primary.main">primary.main</Box>
      <Box color="secondary.main">secondary.main</Box>
      <Box color="error.main">error.main</Box>
      <Box color="text.primary">text.primary</Box>
      <Box color="text.secondary">text.secondary</Box>
      <Box color="text.disabled">text.disabled</Box>
      <Box color="text.hint">text.hint</Box>
      <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
        primary.main
      </Box>
      <Box bgcolor="secondary.main" color="secondary.contrastText" p={2} m={1}>
        secondary.main
      </Box>
      <Box bgcolor="error.main" color="error.contrastText" p={2} m={1}>
        error.main
      </Box>
      <Box bgcolor="text.primary" color="background.paper" p={2} m={1}>
        text.primary
      </Box>
      <Box bgcolor="text.secondary" color="background.paper" p={2} m={1}>
        text.secondary
      </Box>
      <Box bgcolor="text.disabled" color="background.paper" p={2} m={1}>
        text.disabled
      </Box>
      <Box bgcolor="text.hint" color="background.paper" p={2} m={1}>
        text.hint
      </Box>
    </Typography>
  );
}

export default Color;
