import cfonts from "cfonts";

import { rngGradientStops, rngRgbValue, rngUpOrDown } from "./utils";
import {
  currentFilename,
  isPrintTrackGradientEnabled,
  isRenderLoopEnabled,
  isShowingLibrary,
} from "../../state";

type Gradient = number[][];

export const createGradient = (): Gradient =>
  Array.from(Array(rngGradientStops())).map(() => [
    rngRgbValue(),
    rngRgbValue(),
    rngRgbValue(),
  ]);

const incrementGradient = (gradient: Gradient): Gradient =>
  gradient.map((stop) =>
    stop.map((value) => {
      const nextValue = value + rngUpOrDown();
      return nextValue >= 50 && nextValue <= 255 ? nextValue : value;
    })
  );

// const gradientToRGB = (gradient: Gradient): string[] =>
//   gradient.map((stop) => `rgb(${stop[0]},${stop[1]},${stop[2]})`);

const rgbToHex = (stop: number[]) =>
  "#" +
  stop
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

const gradientToHex = (gradient: Gradient) =>
  gradient.map((stop) => rgbToHex(stop));

export const printTrack = (filename: string, gradient: Gradient) => {
  const metadata = filename
    .replace(/.mp3/, "")
    .split(" - ")
    .reverse()
    .map((chunk) => chunk.split("_"))
    .flat();

  const topWhitespace = metadata.length <= 3 ? ["", ""] : [""];
  const bottomWhiteSpaces = [[], ["", "", ""], ["", ""], ["", ""], [""]];
  const bottomWhiteSpace = bottomWhiteSpaces[metadata.length];
  const metadataWithWhitespace = [
    ...topWhitespace,
    ...metadata,
    ...bottomWhiteSpace,
  ];
  const trackMessage = metadataWithWhitespace.join("|");
  const nextGradient = gradientToHex(gradient);

  cfonts.say(trackMessage, {
    font: "block",
    align: "center",
    lineHeight: 5,
    space: true,
    colors: isPrintTrackGradientEnabled ? undefined : ["white", "candy"],
    gradient: isPrintTrackGradientEnabled ? nextGradient : undefined,
    independentGradient: false,
    transitionGradient: isPrintTrackGradientEnabled ? true : false,
  });
};

export const printTrackRenderLoop = (filename, gradient) => {
  printTrack(filename, gradient);
  if (currentFilename === filename && isRenderLoopEnabled) {
    setTimeout(() => {
      if (currentFilename === filename && !isShowingLibrary) {
        const nextGradient = incrementGradient(gradient);
        printTrackRenderLoop(filename, nextGradient);
      }
    }, 100);
  }
};
