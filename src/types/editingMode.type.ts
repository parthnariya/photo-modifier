export const EditingMode = {
  ADJUST_IMAGE: "ADJUST_IMAGE", // the mode for manipulating image tone
  CROP_IMAGE: "CROP_IMAGE", // the mode for crop image
} as const;
export type EditingModeType = keyof typeof EditingMode;
