import Filters from "./components/Filters/Filters";
import LaunchList from "./components/launchList/LaunchList";
import { launchList } from "./api/mock";
import "./App.css";
import spacexLogo from "./assets/spacex.svg";
import { getAllLaunches } from "./api/api";

const getLaunchList = async () => {
  await getAllLaunches({}).then((res) => {
    console.log(res.data);
  });
};

getLaunchList();

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
