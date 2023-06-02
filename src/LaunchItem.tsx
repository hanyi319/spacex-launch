import { Button, Card } from "@arco-design/web-react";
import { Launch } from "./api";

interface Props {
  launch: Launch;
}

const { Meta } = Card;

const LaunchItem = ({ launch }: Props) => {
  return (
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
        <Button type="text" size="large">
          Launch
        </Button>,
      ]}
    >
      <Meta title={launch.name} description={<>{launch.title}</>} />
    </Card>
  );
};

export default LaunchItem;
