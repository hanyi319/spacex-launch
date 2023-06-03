import LaunchItem from "./LaunchItem";
import { Launch } from "./api";
import "./LaunchList.css";

interface Props {
  launchList: Launch[];
}

const LaunchList = ({ launchList }: Props) => {
  return (
    <div className="list-container">
      {launchList.map((launch: Launch) => (
        <div className="item-container" key={launch.id}>
          <LaunchItem key={launch.id} launch={launch} />
        </div>
      ))}
    </div>
  );
};

export default LaunchList;
