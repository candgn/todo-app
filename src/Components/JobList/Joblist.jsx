import React, { useEffect, useState } from "react";

import "./Joblist.scss";

import { connect } from "react-redux";
import { removeJob, updateJob } from "../../redux/reducer";

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Button,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

import SearchBar from "../Common/SearchBar/SearchBar";
import SelectItem from "../Common/SelectItem";

import { AiOutlineDelete } from "react-icons/ai";

import Constants from "../CreateJob/Constants";

const columns = [
  { title: "Job Description" },
  { title: "Priority" },
  { title: "" },
];

const sortItems = [
  { title: "Job Description", value: 1 },
  { title: "Priority", value: 2 },
];

const Joblist = ({ jobs, updateJob, removeJob }) => {
  const [jobList, setJobList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortType, setSortType] = useState(2);
  const [priorityFilter, setPriorityFilter] = useState([1, 2, 3]);

  // Sort and filter list when selected sort type or searchkeyword changed
  useEffect(() => {
    handleFilter(sortType);
    // eslint-disable-next-line
  }, [jobs, sortType, searchKeyword, priorityFilter]);

  //Update Jobs priority
  const handleUpdatePriority = (id, priority) => {
    updateJob({ id, priority });
  };

  const handleFilter = (sortType) => {
    // Filter job list when inputs given to searchbar
    const keywordFiltered = [...jobs].filter((item) => {
      if (searchKeyword === "") {
        return item;
      } else {
        return item.jobDesc.toLowerCase().includes(searchKeyword);
      }
    });
    //Filters job list according to priority filter
    const priorityFiltered = [...keywordFiltered].filter((item) =>
      priorityFilter.includes(item.priority)
    );
    // sort filtered job list
    const sorted = [...priorityFiltered].sort((a, b) =>
      sortType === 2 ? a.priority - b.priority : a.jobDesc > b.jobDesc ? 1 : -1
    );
    setJobList(sorted);
  };

  // Delete Job when user clicks
  const handleDeleteJob = (id) => {
    // Confirmation alert to delete the job
    var answer = window.confirm("Are you sure you want to delete it?");
    // If answer is okay it deletes the job
    if (answer) {
      removeJob({ id });
    }
  };

  return (
    <div className="job-list-container">
      {/* Search bar */}
      <div className="job-list-wrapper">
        <SearchBar onSearch={setSearchKeyword} />
      </div>
      {/* Filter Area */}
      <div className="job-list-filter-wrapper">
        {/* Sort Box */}
        <FormControl fullWidth style={{ marginRight: "5px" }}>
          <InputLabel id="priority-select-label">Sort</InputLabel>
          <SelectItem
            data={sortItems}
            selected={sortItems[1].value}
            setSelected={(val) => setSortType(val)}
          />
        </FormControl>
        {/* Priority Filter */}
        <FormControl fullWidth style={{ marginLeft: "5px" }}>
          <InputLabel id="priority-select-label">Filter</InputLabel>
          <SelectItem
            multiple={true}
            data={Constants.SELECT_PRIORITY}
            selected={priorityFilter}
            setSelected={(val) => setPriorityFilter(val)}
          />
        </FormControl>
      </div>
      {/* Job list table */}
      <div className="job-list-wrapper">
        <div style={{ height: 400, width: "100%" }}>
          <Table>
            {/* Job list table titles */}
            <TableHead>
              <TableRow>
                {columns.map((item, i) => (
                  <TableCell key={"table-head-" + i}>{item.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* Job list table body rows */}
            <TableBody>
              {jobList?.map((item, i) => (
                <TableRow key={"table-row-" + i}>
                  <TableCell>{item.jobDesc}</TableCell>
                  {/* Color map according to priority 1 => Urgent (red) 2 => Regular (orange) 3 => Trivial (Orange) */}
                  <TableCell
                    style={{
                      background:
                        item.priority === 1
                          ? "#FF000060"
                          : item.priority === 2
                          ? "#FFA50060"
                          : "#7CFC0060",
                    }}
                  >
                    {/* Job list edit and show priority */}
                    <SelectItem
                      data={Constants.SELECT_PRIORITY}
                      selected={item.priority}
                      setSelected={(val) => handleUpdatePriority(item.id, val)}
                    />
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <Button onClick={() => handleDeleteJob(item.id)}>
                      <AiOutlineDelete style={{ fontSize: "28px" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
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
    updateJob: (obj) => dispatch(updateJob(obj)),
    removeJob: (obj) => dispatch(removeJob(obj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Joblist);
