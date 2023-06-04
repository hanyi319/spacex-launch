import React from "react";
import { Button, Card, Message } from "@arco-design/web-react";
import { IconInfoCircle, IconSend } from "@arco-design/web-react/icon";
import { Launch } from "../../api/api";
import LaunchDetail from "../launchDetail/LaunchDetail";

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
            <img style={{ width: "100%" }} alt="dessert" src={launch.img} />
          </div>
        }
        actions={[
          <Button
            type="outline"
            size="large"
            style={{ padding: "0 10px" }}
            icon={<IconInfoCircle />}
            onClick={() => setDetailVisible(true)}
          >
            Detail
          </Button>,
          <Button
            type="primary"
            size="large"
            style={{ padding: "0 10px" }}
            icon={<IconSend />}
            onClick={() => {
              Message.info("Launch Success!");
            }}
          >
            Launch
          </Button>,
        ]}
      >
        <Meta
          title={
            <>
              <span style={{ fontWeight: "bold" }}>{launch.name}</span>
            </>
          }
          description={<>{launch.title}</>}
        />
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
