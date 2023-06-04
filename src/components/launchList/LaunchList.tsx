import LaunchItem from "../launchItem/LaunchItem";
import { Button } from "@arco-design/web-react";
import { Launch } from "../../api/api";
import "./LaunchList.css";

interface Props {
  launchList: Launch[];
  // loading: boolean;
  onLoadMore: () => void;
}

const LaunchList = ({ launchList, onLoadMore }: Props) => {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <>
      <div className="list-container">
        {launchList.map((launch: Launch) => (
          <div className="item-container" key={launch.id}>
            <LaunchItem key={launch.id} launch={launch} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "32px" }}>
        <Button onClick={handleLoadMore}>加载更多</Button>
      </div>
    </>
  );
};

export default LaunchList;
