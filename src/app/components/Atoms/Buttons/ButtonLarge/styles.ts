import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme: Theme) => ({
  buttonRoot: {
    color: "black",
    background: "orange",
    border: "2px solid black",
    width: "180px",
    height: "40px",
    borderRadius: "12px",
    borderColor: "black",

    "&:hover": {
      background: "orange",
    },
  },
}));
