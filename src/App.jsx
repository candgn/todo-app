import "./App.scss";
import CreateJob from "./Components/CreateJob/CreateJob";
import SectionContainer from "./Components/SectionContainer/SectionContainer";

function App() {
  return (
    <div className="App">
      <SectionContainer title="Add Job">
        <CreateJob />
      </SectionContainer>
    </div>
  );
}

export default App;
