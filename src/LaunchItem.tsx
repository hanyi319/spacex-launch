import React from "react";
import { Button, Card } from "@arco-design/web-react";
import { Launch } from "./api";
import LaunchDetail from "./LaunchDetail";

interface Props {
  launch: Launch;
}

const { Meta } = Card;

const LaunchItem = ({ launch }: Props) => {
  const [detailVisible, setDetailVisible] = React.useState(false);

  return (
    <>
      <Card
        hoverable
        cover={
          <div style={{ overflow: "hidden" }}>
            <img
              style={{ width: "100%", transform: "translateY(-20px)" }}
              alt="dessert"
              src={launch.img}
            />
          </div>
        }
        actions={[
          <Button type="text" size="large" onClick={() => setDetailVisible(true)}>
            Detail
          </Button>,
          <Button type="text" size="large">
            Launch
          </Button>,
        ]}
      >
        <Meta title={launch.name} description={<>{launch.title}</>} />
      </Card>
      <LaunchDetail
        visible={detailVisible}
        onClose={() => setDetailVisible(false)}
        launch={launch}
      />
    </>
  );
};

export default LaunchItem;
