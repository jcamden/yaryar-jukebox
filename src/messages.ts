import cfonts from "cfonts";
import chalk from "chalk";
import figlet from "figlet";

import { currentTracks } from "./currentTracks";

const randomHexColorCode = () => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

interface PrintMessageOptions {
  colorHex?: string;
  font?: string;
  horizontalLayout?: string;
  verticalLayout?: string;
  whitespaceBreak?: boolean;
  width?: number;
}

// currently unused, so may want to remove chalk and figlet
export const printMessage = (msg: string, options?: PrintMessageOptions) => {
  const {
    colorHex,
    font,
    horizontalLayout,
    verticalLayout,
    width,
    whitespaceBreak,
  } = options;

  const painter = (str: string) => (colorHex ? chalk.hex(colorHex)(str) : str);

  console.log(
    painter(
      figlet.textSync(msg, {
        font,
        horizontalLayout,
        verticalLayout,
        width,
        whitespaceBreak,
      })
    )
  );
};

export const printHomeScreen = () => {
  console.clear();

  cfonts.say(
    `
  




  
Welcome to`,
    {
      font: "tiny", // define the font face
      align: "center", // define text alignment
      // colors: ["system"], // define all colors
      // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
      // letterSpacing: 1, // define letter spacing
      // lineHeight: 1, // define the line height
      // space: true, // define if the output text should have empty lines on top and on the bottom
      // maxLength: "0", // define how many character can be on one line
      gradient: ["#6b40cf", "#5328b8"], // define your two gradient colors
      // independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: true, // define if this is a transition between colors directly
      // env: "node", // define the environment cfonts is being executed in
    }
  );
  cfonts.say("   Yaryar Jukebox   ", {
    font: "pallet", // define the font face
    align: "center", // define text alignment
    // colors: ["system"], // define all colors
    // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    // letterSpacing: 1, // define letter spacing
    // lineHeight: 1, // define the line height
    // space: true, // define if the output text should have empty lines on top and on the bottom
    // maxLength: "0", // define how many character can be on one line
    gradient: ["red", "blue"], // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    // env: "node", // define the environment cfonts is being executed in
  });
  cfonts.say("Press spacebar to view library", {
    font: "console", // define the font face
    align: "center", // define text alignment
    // colors: ["system"], // define all colors
    // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 0.5, // define letter spacing
    lineHeight: 1, // define the line height
    // space: true, // define if the output text should have empty lines on top and on the bottom
    // maxLength: "0", // define how many character can be on one line
    gradient: ["white", "green"], // define your two gradient colors
    // independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: true, // define if this is a transition between colors directly
    // env: "node", // define the environment cfonts is being executed in
  });
};

export const printTrack = (filename: string) => {
  const test = [
    " ",
    " ",
    ...filename.replace(/.mp3/, "").split(" - ").reverse(),
  ];

  console.clear();
  test.forEach((metadatum) => {
    cfonts.say(metadatum, {
      font: "block", // define the font face
      align: "center", // define text alignment
      // colors: ["system"], // define all colors
      // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
      // letterSpacing: 1, // define letter spacing
      lineHeight: 10, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      // maxLength: "0", // define how many character can be on one line
      gradient: [randomHexColorCode(), randomHexColorCode()], // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: true, // define if this is a transition between colors directly
      // env: "node", // define the environment cfonts is being executed in
    });
  });
};

const clean = /(\{|\}|"|.mp3|.wav|,(?!["{}[\]]))/g;

export const printLibrary = () => {
  console.clear();
  console.log(JSON.stringify(currentTracks, null, 2).replace(clean, ""));
};
