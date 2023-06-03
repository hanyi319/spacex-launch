import Filters from "./Filters";
import LaunchList from "./LaunchList";
import { launchList } from "./mock";
import "./App.css";
import spacexLogo from "./assets/spacex.svg";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={spacexLogo} style={{ width: "300px" }} alt="React logo" />
        <Filters />
        <LaunchList launchList={launchList} />
      </div>
    </>
  );
}

export default App;
