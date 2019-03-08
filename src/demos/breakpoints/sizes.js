import React from "react";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";

const select = {
  xs: "extra - small: 0px or larger",
  sm: "small: 600px or larger",
  md: "medium: 960px or larger",
  lg: "large: 1280px or larger",
  xl: "extra - large: 1920px or larger"
};

function WithWidth(props) {
  const { width } = props;
  const descr = select[width] || "not found";

  return (
    <Typography variant="h4">
      {`Current width: >${width}/${descr}<`}
    </Typography>
  );
}

WithWidth.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth({ withTheme: true })(WithWidth);