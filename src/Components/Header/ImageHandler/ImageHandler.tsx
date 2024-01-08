import { ChangeEventHandler, MouseEventHandler, useRef } from "react";
import DownloadIcon from "../../../assets/icons/save.svg?react";
import UploadIcon from "../../../assets/icons/upload.svg?react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { loadImage } from "../../../store/slices/ImageSlice/imageSlice";
import { getBase64 } from "../../../utils/getBase64";
type ImageHandlerType = {
  type: "download" | "upload";
};

const ImageHandler = ({ type }: ImageHandlerType) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const uploadImageHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  const fileChangeHandler: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.target.files && event.target.files[0]) {
      const temp = await getBase64(event.target.files[0]);
      dispatch(loadImage(temp));
    }
  };
  return (
    <>
      {type === "upload" ? (
        <>
          <UploadIcon onClick={uploadImageHandler} />
          <input
            ref={imageInputRef}
            style={{ display: "none" }}
            onChange={fileChangeHandler}
            type="file"
            multiple={false}
            accept=""
          />
        </>
      ) : (
        <DownloadIcon />
      )}
    </>
  );
};

export default ImageHandler;
