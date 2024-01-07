/**
 *
 * Calculates the luminance of a given RGB color.
 * @param r - The red component of the RGB color (0-255).
 * @param g - The green component of the RGB color (0-255).
 * @param b - The blue component of the RGB color (0-255).
 * @returns The calculated luminance value of the RGB color (0-1).
 */
export function calculateLuminace(r: number, g: number, b: number): number {
  // Normalize the RGB color components to the range of 0-1
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Calculate the transformed components using the luminance formula
  const transformedR =
    normalizedR <= 0.03928
      ? normalizedR / 12.92
      : ((normalizedR + 0.055) / 1.055) ** 2.4;
  const transformedG =
    normalizedG <= 0.03928
      ? normalizedG / 12.92
      : ((normalizedG + 0.055) / 1.055) ** 2.4;
  const transformedB =
    normalizedB <= 0.03928
      ? normalizedB / 12.92
      : ((normalizedB + 0.055) / 1.055) ** 2.4;

  // Calculate the luminance value by multiplying the transformed components with the corresponding weights
  const luminance =
    0.2126 * transformedR + 0.7152 * transformedG + 0.0722 * transformedB;

  return luminance;
}

export function calculateContrastRatio(
  r1: number,
  g1: number,
  b1: number,
  r2: number,
  g2: number,
  b2: number
): number {
  const luminance1 = calculateLuminace(r1, g1, b1);
  const luminance2 = calculateLuminace(r2, g2, b2);

  return luminance1 > luminance2
    ? (luminance1 + 0.05) / (luminance2 + 0.05)
    : (luminance2 + 0.05) / (luminance1 + 0.05);
}

export function hexToRGB(hex:string):number[]{
  hex = hex.replace(/^#/,"").replace(/[-.]/g,"");

  if(hex.length !==3 && hex.length !== 6){
    return[0,0,0];
  }

  if(hex.length === 3){
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);

  return [r,g,b]
}
