export const rotateImage = (m: number[][]): number[][] => m[0].map((_, i) => m.map((x) => x[i]));

export const rotateImageInPlace = (m: number[][]): number[][] => m;
