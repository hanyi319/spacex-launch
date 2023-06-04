import Filters from "./components/Filters/Filters";
import LaunchList from "./components/launchList/LaunchList";
import spacexLogo from "./assets/spacex.svg";
import { Launch, getAllLaunches } from "./api/api";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [launchList, setLaunchList] = useState<Launch[]>([]); // 用于显示列表
  const [launchesData, setLaunchesData] = useState<Launch[]>([]); // 用于存储从接口返回的数据
  // const [loading, setLoading] = useState(false); // 缓冲状态
  // const [page, setPage] = useState(1); // 分页信息

  const loadLaunches = async () => {
    // setLoading(true);
    const res = await getAllLaunches({});
    setLaunchesData(res.data);
    // setLoading(false);
  };

  const handleLoadMore = () => {
    const newData = launchesData.splice(0, 12);
    setLaunchList((prevLaunches) => [...prevLaunches, ...newData]);
  };

  useEffect(() => {
    loadLaunches();
  }, []);

  /**
   * 创建两个数组，launchList 用于显示列表，launchesData 用于存储从接口返回的数据
   * 在首次加载时，将 launchesData 的前12条数据移动到 launchList
   * 然后通过点击加载更多按钮逐步添加数据到 launchList 中
   */
  useEffect(() => {
    if (launchesData.length > 0 && launchList.length === 0) {
      const newData = launchesData.splice(0, 12);
      setLaunchList(newData);
    }
  }, [launchesData, launchList]);

  return (
    <>
      <div className="app-container">
        <img src={spacexLogo} style={{ width: "300px" }} alt="React logo" />
        <Filters />
        <LaunchList launchList={launchList} onLoadMore={handleLoadMore} />
      </div>
    </>
  );
}

export default App;
