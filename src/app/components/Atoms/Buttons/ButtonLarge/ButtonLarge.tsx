"use client";

import { Box, Button, ButtonProps } from "@mui/material";

import useStyles from "./styles";

export default function ButtonLarge(props: ButtonProps) {
  const { classes } = useStyles();

  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="contained" size="large" className={classes.buttonRoot}>
          Large
        </Button>
      </div>
    </Box>
  );
}
