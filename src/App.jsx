import "./App.scss";
import CreateJob from "./Components/CreateJob/CreateJob";
import Joblist from "./Components/JobList/Joblist";
import SectionContainer from "./Components/SectionContainer/SectionContainer";

function App() {
  return (
    <div className="App">
      <SectionContainer title="Create Job">
        <CreateJob />
      </SectionContainer>
      <SectionContainer title="Job List">
        <Joblist />
      </SectionContainer>
    </div>
  );
}

export default App;
