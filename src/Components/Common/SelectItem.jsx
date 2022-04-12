import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";

const SelectItem = ({ data, selected, setSelected, multiple }) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setSelected(value);
  };

  // Re-renders when state changes from outsides of component
  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  return (
    <Select
      labelId="priority-select-label"
      id="priority-select"
      value={selectedValue}
      label="Priority"
      sx={{ width: "100%" }}
      onChange={(e) => handleSelect(e.target.value)}
      multiple={multiple}
    >
      {data.map((item, i) => (
        <MenuItem value={item.value} key={item.title + i}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectItem;
