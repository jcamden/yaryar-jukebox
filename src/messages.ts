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
  cfonts.say("(Press escape to escape)   ", {
    font: "console", // define the font face
    align: "left", // define text alignment
    colors: ["gray"], // define all colors
    // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 0.5, // define letter spacing
    lineHeight: 0.5, // define the line height
    // space: true, // define if the output text should have empty lines on top and on the bottom
    // maxLength: "0", // define how many character can be on one line
    // gradient: ["#383838", "#262626"], // define your two gradient colors
    // independentGradient: false, // define if you want to recalculate the gradient for each new line
    // transitionGradient: true, // define if this is a transition between colors directly
    // env: "node", // define the environment cfonts is being executed in
  });
  cfonts.say(
    `



  
Welcome to`,
    {
      font: "tiny",
      align: "center",
      gradient: ["#6b40cf", "#5328b8"],
      transitionGradient: true,
    }
  );
  cfonts.say("   Yaryar Jukebox   ", {
    font: "pallet",
    align: "center",
    gradient: ["red", "blue"],
    independentGradient: false,
    transitionGradient: false,
  });
  cfonts.say("Press spacebar to view library", {
    font: "console",
    align: "center",
    letterSpacing: 0.5,
    lineHeight: 1,
    gradient: ["white", "green"],
    transitionGradient: true,
  });
};

export const printTrack = (filename: string) => {
  const metadata = filename
    .replace(/.mp3/, "")
    .split(" - ")
    .reverse()
    .map((chunk) => chunk.split("_"))
    .flat();
  const whitespace = metadata.length <= 3 ? [" ", " "] : [" "];

  const metadataWithWhitespace = [...whitespace, ...metadata];

  console.clear();
  metadataWithWhitespace.forEach((metadatum) => {
    cfonts.say(metadatum, {
      font: "block",
      align: "center",
      lineHeight: 10,
      space: true,
      gradient: [randomHexColorCode(), randomHexColorCode()],
      independentGradient: false,
      transitionGradient: true,
    });
  });
};

const clean = /(\{|\}|"|:|.mp3|.wav|,(?!["{}[\]])|row[0-9])/g;

export const printLibrary = () => {
  console.clear();
  console.log(JSON.stringify(currentTracks, null, 2).replace(clean, ""));
};
