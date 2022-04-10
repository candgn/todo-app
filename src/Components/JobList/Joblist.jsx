import React from "react";
import { connect } from "react-redux";
import { addJob } from "../../redux/reducer";
import SearchBar from "../Common/SearchBar/SearchBar";
import "./Joblist.scss";

const Joblist = ({ jobs }) => {
  console.log(jobs);
  return (
    <div className="job-list-container">
      <div className="job-list-wrapper">
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateJob: (obj) => dispatch(addJob(obj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Joblist);
