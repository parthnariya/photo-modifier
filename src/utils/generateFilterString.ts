export const generateFilterString = (
  brightness?: number,
  blur?: number,
  contrast?: number,
  hueRotate?: number,
  invert?: number,
  saturation?: number,
  noise?: number,
  pixelate?: number,
  tint?: number
): string => {
  if (
    brightness === 0 &&
    blur === 0 &&
    contrast === 0 &&
    hueRotate === 0 &&
    invert === 0 &&
    noise === 0 &&
    pixelate === 0 &&
    saturation === 0 &&
    tint === 0
  ) {
    return "";
  }
  const filters = [];
  if (brightness) {
    filters.push(`brightness(${100 + brightness}%)`);
  }
  if (blur) {
    filters.push(`blur(${blur/10}px)`);
  }
  if (contrast) {
    filters.push(`contrast(${100 + contrast}%)`);
  }
  if (saturation) {
    filters.push(`saturate(${100 + saturation}%)`);
  }
  if (hueRotate) {
    filters.push(`hue-rotate(${hueRotate}deg)`);
  }
  if (invert) {
    filters.push(`invert(${invert}%)`);
  }

  return filters.join("");
};
