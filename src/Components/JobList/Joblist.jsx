import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

import { connect } from "react-redux";
import { updateJob } from "../../redux/reducer";
import SearchBar from "../Common/SearchBar/SearchBar";
import "./Joblist.scss";

import Constants from "../CreateJob/Constants";
import SelectItem from "../Common/SelectItem";

const columns = [
  { title: "Job Description" },
  { title: "Priority" },
  { title: "" },
];

const sortItems = [
  { title: "Job Description", value: 1 },
  { title: "Priority", value: 2 },
];

const Joblist = ({ jobs, updateJob }) => {
  const [jobList, setJobList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortType, setSortType] = useState(2);
  const [priorityFilter, setPriorityFilter] = useState([1, 2, 3]);

  // Sort and filter list when selected sort type or searchkeyword changed
  useEffect(() => {
    handleSort(sortType);
    // eslint-disable-next-line
  }, [jobs, sortType, searchKeyword, priorityFilter]);

  //Update Jobs priority
  const handleUpdatePriority = (id, priority) => {
    updateJob({ id, priority });
  };

  const handleSort = (sortType) => {
    // Filter joblist when inputs given to searchbar
    const keywordFiltered = [...jobs].filter((item) => {
      if (searchKeyword === "") {
        return item;
      } else {
        return item.jobDesc.toLowerCase().includes(searchKeyword);
      }
    });
    const priorityFiltered = [...keywordFiltered].filter((item) =>
      priorityFilter.includes(item.priority)
    );
    // sort filtered joblist
    const sorted = [...priorityFiltered].sort((a, b) =>
      sortType === 2 ? a.priority - b.priority : a.jobDesc > b.jobDesc ? 1 : -1
    );
    setJobList(sorted);
  };

  return (
    <div className="job-list-container">
      <div className="job-list-wrapper">
        <SearchBar onSearch={setSearchKeyword} />
      </div>
      <div className="job-list-filter-wrapper">
        <FormControl fullWidth style={{ marginRight: "5px" }}>
          <InputLabel id="priority-select-label">Sort</InputLabel>
          <SelectItem
            data={sortItems}
            selected={sortItems[1].value}
            setSelected={(val) => setSortType(val)}
          />
        </FormControl>
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
      <div className="job-list-wrapper">
        <div style={{ height: 400, width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((item, i) => (
                  <TableCell key={"table-head-" + i}>{item.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {jobList?.map((item, i) => (
                <TableRow key={"table-row-" + i}>
                  <TableCell>{item.jobDesc}</TableCell>
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
                    <SelectItem
                      data={Constants.SELECT_PRIORITY}
                      selected={item.priority}
                      setSelected={(val) => handleUpdatePriority(item.id, val)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Joblist);
