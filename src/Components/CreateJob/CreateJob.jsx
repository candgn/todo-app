import React, { useState } from "react";
import "./CreateJob.scss";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CreateJob = ({}) => {
  const [priority, setPriority] = useState();
  return (
    <div className="create-job-container">
      <div className="create-job-item-wrapper" style={{ width: "70%" }}>
        <TextField label="New Job" variant="outlined" sx={{ width: "100%" }} />
      </div>

      <div className="create-job-item-wrapper" style={{ width: "20%" }}>
        <FormControl fullWidth>
          <InputLabel id="priority-select-label">Priority</InputLabel>
          <Select
            labelId="priority-select-label"
            id="priority-select"
            value={priority}
            label="Priority"
            sx={{ width: "100%" }}
            //   onChange={handleChange}
          >
            <MenuItem value={1}>Trivial</MenuItem>
            <MenuItem value={2}>Regular</MenuItem>
            <MenuItem value={3}>Urgent</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="create-job-item-wrapper" style={{ width: "10%" }}>
        <Button variant="outlined" sx={{ width: "100%" }}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default CreateJob;
