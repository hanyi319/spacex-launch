import Filters from "./Filters";
import LaunchList from "./LaunchList";
import { launchList } from "./mock";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Filters />
        <LaunchList launchList={launchList} />
      </div>
    </>
  );
}

export default App;
