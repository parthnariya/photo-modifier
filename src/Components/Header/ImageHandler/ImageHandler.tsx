import UploadIcon from "../../../assets/icons/upload.svg?react";
import DownloadIcon from "../../../assets/icons/save.svg?react";
type ImageHandlerType = {
  type: "download" | "upload";
};

const ImageHandler = ({ type }: ImageHandlerType) => {
  return <>{type === "upload" ? <UploadIcon /> : <DownloadIcon />}</>;
};

export default ImageHandler;
