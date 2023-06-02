import { useState } from "react";
import LaunchList from "./LaunchList";
import "./App.css";

function App() {
  const [launches, setLaunches] = useState([
    {
      id: 1,
      name: "FALCON 9",
      title: "FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT",
      img: "https://www.spacex.com/static/images/backgrounds/f9_feature.jpg",
    },
    {
      id: 2,
      name: "FALCON HEAVY",
      title: "OVER 5 MILLION LBS OF THRUST",
      img: "https://www.spacex.com/static/images/backgrounds/fh_feature.jpg",
    },
    {
      id: 3,
      name: "DRAGON",
      title: "SENDING HUMANS AND CARGO INTO SPACE",
      img: "https://www.spacex.com/static/images/backgrounds/dragon_feature.jpg",
    },
    {
      id: 4,
      name: "STARSHIP",
      title: "SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND",
      img: "https://www.spacex.com/vehicles/starship/assets/images/Starhip_website-crop20230126_dji_0199_01.jpg",
    },
  ]);

  return (
    <>
      <div className="app-container">
        <LaunchList launches={launches} />
      </div>
    </>
  );
}

export default App;
