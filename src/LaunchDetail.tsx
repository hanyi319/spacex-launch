import { Button, Modal } from "@arco-design/web-react";
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
    onCancel={onClose}
    autoFocus={false}
    focusLock={true}
    footer={
      <>
        <Button type="text" onClick={onClose}>
          OK
        </Button>
      </>
    }
  >
    <img style={{ width: "100%" }} alt="dessert" src={launch.img} />
    <p>{launch.detail}</p>
  </Modal>
);

export default LaunchDetail;
