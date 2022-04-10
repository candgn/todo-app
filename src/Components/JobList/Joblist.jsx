import React from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import "./Joblist.scss";

const Joblist = ({}) => {
  return (
    <div className="job-list-container">
      <div className="job-list-wrapper">
        <SearchBar />
      </div>
    </div>
  );
};

export default Joblist;
