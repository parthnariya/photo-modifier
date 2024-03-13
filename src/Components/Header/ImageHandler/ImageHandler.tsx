import { ChangeEventHandler, MouseEventHandler, useRef } from "react";
import DownloadIcon from "../../../assets/icons/save.svg?react";
import UploadIcon from "../../../assets/icons/upload.svg?react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import {
  enableDownloadSignal,
  loadImage,
  resetCanvas,
} from "../../../store/slices/ImageSlice/imageSlice";
import { getBase64 } from "../../../utils/getBase64";
type ImageHandlerType = {
  type: "download" | "upload";
};

const ImageHandler = ({ type }: ImageHandlerType) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { image } = useAppSelector((state) => state.image);
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
      if (image) {
        dispatch(resetCanvas());
      }
      const imageBase64 = await getBase64(event.target.files[0]);
      dispatch(loadImage(imageBase64));
    }
  };

  const downloadImageHandler = () => {
    dispatch(enableDownloadSignal());
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
        <DownloadIcon onClick={downloadImageHandler} />
      )}
    </>
  );
};

export default ImageHandler;
