const SCALES: Record<number, number> = {
  3500: 0.10,
  3000: 0.15,
  2500: 0.20,
  2000: 0.25,
  1000: 0.35,
  800: 0.45,
  600: 0.55,
  400: 0.65,
  200: 0.75,
};

export function getScale(diffWidth: number, diffHeight: number) {
  // Calculate the diagonal difference.
  const diagonalDiff = Math.sqrt(
    diffWidth * diffWidth + diffHeight * diffHeight
  );

  // Find the first key in the lookup table that is less than or equal to the diagonal difference.
  for (const threshold in SCALES) {
    if (diagonalDiff <= +threshold) {
      return SCALES[threshold];
    }
  }

  // Default scale for very small differences.
  return 0.9;
}
