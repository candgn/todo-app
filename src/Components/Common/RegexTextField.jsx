import React, { useCallback } from "react";

import { TextField } from "@mui/material";

export const matchNothingRegex = /(?!)/;

const RegexTextField = ({ length, regex, onChange, ...rest }) => {
  const handleChange = useCallback(
    (e) => {
      // If check for character length (default 255)
      if (e.currentTarget.value.length < length) {
        // Replaces unsupported characters with empty string
        e.currentTarget.value = e.currentTarget.value.replace(regex, "");
        onChange(e);
      }
    },
    [onChange, regex]
  );

  return <TextField onChange={handleChange} {...rest} />;
};

export default RegexTextField;

RegexTextField.defaultProps = {
  length: 255,
};
