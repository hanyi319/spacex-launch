import { Launch } from "./api";
import LaunchItem from "./LaunchItem";
import "./LaunchList.css";

interface Props {
  launches: Launch[];
}

const LaunchList = ({ launches }: Props) => {
  return (
    <div className="list-container">
      {launches.map((launch: Launch) => (
        <div className="item-container">
          <LaunchItem key={launch.id} launch={launch} />
        </div>
      ))}
    </div>
  );
};

export default LaunchList;
