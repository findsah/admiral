import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

const MuiDialog = (props) => {
  const { children, open, onClose, title, height, size, ...other } = props;

  return (
    <Dialog maxWidth={size} fullWidth aria-labelledby="title" open={open}>
      <DialogTitle sx={headerWrapper} {...other}>
        {title}
        <IconButton
          aria-label="onClose"
          onClick={() => onClose()}
          sx={iconWrapper}
        >
          <ClearIcon sx={{ color: "#F44336" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          height: height,
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

MuiDialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
};

export default MuiDialog;

const headerWrapper = {
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "1rem",
  padding: "10px 24px !important",
  textAlign: "center",
  color: "#0057B7",
  backgroundColor: "#d1cccc1a",
  marginBottom: "1rem",
};

const iconWrapper = {
  position: "absolute",
  margin: "4px",
  padding: "2px",
  top: "0",
  right: "0",
  // color: (theme) => theme.palette.gray[500],
  borderRadius: "2px",
};
