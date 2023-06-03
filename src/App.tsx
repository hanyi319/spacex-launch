import { useState } from "react";
import LaunchList from "./LaunchList";
import "./App.css";
import Filters from "./Filters";

function App() {
  const [launches, setLaunches] = useState([
    {
      id: 1,
      name: "猎鹰 9 号",
      title: "首个可重复使用的轨道级火箭",
      img: "https://www.spacex.com/static/images/backgrounds/f9_feature.jpg",
    },
    {
      id: 2,
      name: "猎鹰重型",
      title: "超过500万磅的推力",
      img: "https://www.spacex.com/static/images/backgrounds/fh_feature.jpg",
    },
    {
      id: 3,
      name: "龙飞船",
      title: "将人类和货物送入太空",
      img: "https://www.spacex.com/static/images/backgrounds/dragon_feature.jpg",
    },
    {
      id: 4,
      name: "星舰",
      title: "服务于地球轨道、月球、火星以及更遥远的目标",
      img: "https://www.spacex.com/vehicles/starship/assets/images/Starhip_website-crop20230126_dji_0199_01.jpg",
    },
  ]);

  return (
    <>
      <div className="app-container">
        <Filters />
        <LaunchList launches={launches} />
      </div>
    </>
  );
}

export default App;
