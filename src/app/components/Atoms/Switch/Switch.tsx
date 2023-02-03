"use client";

import { Box, styled, Switch } from "@mui/material";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "red",
  },
}));

export default function SwitchBasic() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <Box>
      <Box>
        <PinkSwitch {...label} defaultChecked />
      </Box>
      <Box>
        <Switch {...label} defaultChecked color="primary" />
      </Box>
    </Box>
  );
}
