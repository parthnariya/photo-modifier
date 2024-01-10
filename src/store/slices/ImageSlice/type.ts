export type InitialStateImageSlice = {
  image: string;
  imageName: string;
  width: number | null;
  height: number | null;
  scaleValue: number;
  canvasContainerWidth: number | null;
  canvasContainerHeight: number | null;
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
