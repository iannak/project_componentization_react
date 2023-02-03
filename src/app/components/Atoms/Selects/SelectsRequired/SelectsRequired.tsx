"use client";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

import useStyles from "./styles";
type Options = {
  value: string;
  label: string;
};

interface IMenuItem {
  value: string;
  label: string;
  options: Options[];
}

export default function SelectsRequired(props: IMenuItem) {
  const { classes } = useStyles();

  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className={classes.selectRoot}
        required={true}
      >
        <MenuItem value="" disabled>
          {props.label}
        </MenuItem>
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
