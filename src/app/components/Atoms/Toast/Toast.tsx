"use client";

import { Alert, Box } from "@mui/material";
import useStyles from "./styles";

export default function ToastAlert() {
  const { classes } = useStyles();

  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div className={classes.toastRoot}>
        <Alert variant="filled" severity="error">
          This is an error alert — check it out!
        </Alert>
      </div>
      <div className={classes.toastRoot}>
        <Alert variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
      </div>
      <div className={classes.toastRoot}>
        <Alert variant="filled" severity="info">
          This is an info alert — check it out!
        </Alert>
      </div>
      <div className={classes.toastRoot}>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      </div>
    </Box>
  );
}
