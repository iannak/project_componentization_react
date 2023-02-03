import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme: Theme) => ({
  selectRoot: {
    width: "185px",
    height: "52px",
    borderRadius: "12px",
    borderColor: "black",
    border: "2px solid black",
    borderLeft: "6px solid black",

    "&:hover": {
      borderColor: "black",
    },
  },
}));
