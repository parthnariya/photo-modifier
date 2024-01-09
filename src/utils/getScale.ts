const SCALES: Record<number, number> = {
  3500: 15,
  3000: 20,
  2500: 25,
  2000: 30,
  1000: 40,
  800: 50,
  600: 60,
  400: 70,
  200: 80,
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
  return 95;
}
