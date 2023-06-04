import React from "react";
import { Button, Card } from "@arco-design/web-react";
import { IconInfoCircle } from "@arco-design/web-react/icon";
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
            <img
              style={{ width: "100%" }}
              alt="no img"
              src={
                launch.links.flickr.original[0] ||
                "https://sxcontent9668.azureedge.us/cms-assets/assets/CRS_28_vertical_060223_DSC_2206_desktop_bc8f8c3019.jpg"
              }
            />
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
            Learn More
          </Button>,
        ]}
      >
        <Meta
          title={
            <>
              <span style={{ fontWeight: "bold" }}>{launch.name}</span>
            </>
          }
          description={<>{new Date(launch.date_local).toLocaleString()}</>}
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
