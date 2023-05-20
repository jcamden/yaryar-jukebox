export const randomHexColorCode = () =>
  "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

export const rngRgbValue = () => Math.floor(Math.random() * (255 - 0 + 1));
export const rngUpOrDown = () =>
  Math.floor(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
export const rngGradientStops = () => Math.floor(Math.random() * 4 + 2);

// export const randomRGB = () => {
//   const randomBetween = (min, max) =>
//     min + Math.floor(Math.random() * (max - min + 1));
//   const r = randomBetween(0, 255);
//   const g = randomBetween(0, 255);
//   const b = randomBetween(0, 255);
//   const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
// };
