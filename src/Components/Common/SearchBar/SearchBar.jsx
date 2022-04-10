import { TextField } from "@mui/material";
import React from "react";
import "./SearchBar.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({}) => {
  return (
    <div className="search-bar-container">
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label={"Search Job"}
        variant="outlined"
        InputProps={{
          endAdornment: <AiOutlineSearch style={{ fontSize: "24px" }} />,
        }}
        // onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
