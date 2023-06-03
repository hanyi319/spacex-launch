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
    okText="OK"
    cancelText="Cancel"
  >
    <img style={{ width: "100%", transform: "translateY(-20px)" }} alt="dessert" src={launch.img} />
    <p>{launch.detail}</p>
  </Modal>
);

export default LaunchDetail;
