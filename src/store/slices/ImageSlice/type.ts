export type InitialStateImageSlice = {
  image: string;
  imageName: string;
  width: number | null;
  height: number | null;
  scaleValue: number;
  zoomLevel: number;
  canvasContainerWidth: number | null;
  canvasContainerHeight: number | null;
  signalToDownloadFlag: boolean;
};

export type SetImageDimensionsPayloadType = {
  width: number;
  height: number;
};

export type SetCanvasDimensionsPayloadType = Pick<
  InitialStateImageSlice,
  "canvasContainerHeight" | "canvasContainerWidth"
>;

export type SetScaleValuePayloadType = Pick<
  InitialStateImageSlice,
  "scaleValue"
>;

export type DownloadImagePayloadType = {
  dataURl: string;
};
