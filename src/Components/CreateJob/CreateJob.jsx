import React, { useState } from "react";
import "./CreateJob.scss";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RegexTextField from "../Common/RegexTextField";

import { connect } from "react-redux";
import { addJob } from "../../redux/reducer";
import initialState from "./Constants";

const onlyAlphanumericRegex = /[^a-z0-9]/gi;

const CreateJob = ({ addJob }) => {
  const [priority, setPriority] = useState(initialState.PRIORITY);
  const [jobDesc, setJobDesc] = useState(initialState.JOB_DESC);

  const add = () => {
    if (jobDesc === "") {
      alert("You need to fill job description!");
    } else if (priority === undefined) {
      alert("You need to select priority!");
    } else {
      addJob({ id: Math.floor(Math.random() * 1000), jobDesc, priority });
      setPriority(initialState.PRIORITY);
      setJobDesc(initialState.JOB_DESC);
    }
  };
  return (
    <div className="create-job-container">
      {/* Job Description input field with alphanumeric values and 255 character length */}
      <div className="create-job-item-wrapper" style={{ width: "70%" }}>
        <RegexTextField
          regex={onlyAlphanumericRegex}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          label="New Job"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </div>
      {/* Job priority options */}
      <div className="create-job-item-wrapper" style={{ width: "20%" }}>
        <FormControl fullWidth>
          <InputLabel id="priority-select-label">Priority</InputLabel>
          <Select
            labelId="priority-select-label"
            id="priority-select"
            value={priority}
            label="Priority"
            sx={{ width: "100%" }}
            onChange={(e) => setPriority(e.target.value)}
          >
            <MenuItem value={1}>Trivial</MenuItem>
            <MenuItem value={2}>Regular</MenuItem>
            <MenuItem value={3}>Urgent</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* Create Job button */}
      <div className="create-job-item-wrapper" style={{ width: "10%" }}>
        <Button variant="outlined" onClick={add} sx={{ width: "100%" }}>
          Add
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJob: (obj) => dispatch(addJob(obj)),
  };
};

export default connect(null, mapDispatchToProps)(CreateJob);
