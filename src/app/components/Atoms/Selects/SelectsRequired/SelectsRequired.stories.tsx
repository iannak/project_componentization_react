import { Meta } from "@storybook/react";

import SelectsRequired from "./SelectsRequired";

export default {
  title: "Components/Selects/SelectsRequired",
  component: SelectsRequired,
} as Meta;

export const Default = () => (
  <SelectsRequired
    value="1"
    label="no selection ..."
    options={[
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ]}
  />
);
