import { Modal } from "@arco-design/web-react";
import { Launch } from "./api";

interface Props {
  visible: boolean;
  onClose: any;
  launch: Launch;
}

const LaunchDetail = ({ visible, onClose, launch }: Props) => (
  <Modal
    title="Detail"
    visible={visible}
    onOk={onClose}
    onCancel={onClose}
    autoFocus={false}
    focusLock={true}
  >
    <img style={{ width: "100%", transform: "translateY(-20px)" }} alt="dessert" src={launch.img} />
    <p>
      Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable
      and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s
      first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive
      parts of the rocket, which in turn drives down the cost of space access.
    </p>
  </Modal>
);

export default LaunchDetail;
