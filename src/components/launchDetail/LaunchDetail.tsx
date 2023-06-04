import { Button, Modal } from "@arco-design/web-react";
import { Launch } from "../../api/api";

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
    style={{ maxWidth: "80%", margin: "16px auto" }}
    footer={
      <>
        <Button type="text" onClick={onClose}>
          OK
        </Button>
      </>
    }
  >
    <img
      style={{ width: "100%" }}
      alt="no img"
      src={
        launch.links.flickr.original[0] ||
        "https://sxcontent9668.azureedge.us/cms-assets/assets/CRS_28_vertical_060223_DSC_2206_desktop_bc8f8c3019.jpg"
      }
    />
    <p>{launch.details || "no more information"}</p>
  </Modal>
);

export default LaunchDetail;
