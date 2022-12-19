import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const MuiSubmitBtn = ({
  type,
  text,
  color,
  bgColor,
  width,
  height,
  onClick,
  endIcon,
  variant,
  startIcon,
}) => (
  <Button
    variant={variant}
    type={type}
    size="medium"
    startIcon={startIcon}
    sx={{
      width: width,
      height: height,
      color: color,
      backgroundColor: bgColor,
      marginLeft: ".5rem",
      textTransform: "capitalize",
      // marginRight: ".5rem",
    }}
    endIcon={endIcon}
    onClick={(event) => (onClick !== undefined ? onClick(event) : null)}
  >
    {text}
  </Button>
);

MuiSubmitBtn.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

MuiSubmitBtn.defaultProps = {
  variant: "contained",
  text: "submit",
  type: "submit",
  width: "8rem",
  height: "2.5rem",
};

export default MuiSubmitBtn;
