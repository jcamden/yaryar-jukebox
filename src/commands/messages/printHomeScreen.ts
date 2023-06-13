import cfonts from "cfonts";

export const printHomeScreen = () => {
  console.clear();
  // cfonts.say("(Press escape to escape)   ", {
  //   font: "console", // define the font face
  //   align: "left", // define text alignment
  //   colors: ["gray"], // define all colors
  //   // background: "transparent", // define the background color, you can also use `backgroundColor` here as key
  //   letterSpacing: 0.5, // define letter spacing
  //   lineHeight: 0.5, // define the line height
  //   // space: true, // define if the output text should have empty lines on top and on the bottom
  //   // maxLength: "0", // define how many character can be on one line
  //   // gradient: ["#383838", "#262626"], // define your two gradient colors
  //   // independentGradient: false, // define if you want to recalculate the gradient for each new line
  //   // transitionGradient: true, // define if this is a transition between colors directly
  //   // env: "node", // define the environment cfonts is being executed in
  // });
  cfonts.say(
    `
  
  
  
Welcome to`,
    {
      font: "chrome",
      align: "center",
      colors: ["#6b40cf", "white", "#6b40cf"],
      transitionGradient: false,
    }
  );
  cfonts.say("   Yaryar Jukebox   ", {
    font: "pallet",
    align: "center",
    gradient: ["red", "blue"],
    independentGradient: false,
    transitionGradient: false,
    // lineHeight: 1,
  });
  cfonts.say("spacebar: library - backslash: settings - escape: escape", {
    font: "console",
    align: "center",
    letterSpacing: 0.5,
    lineHeight: 1,
    gradient: ["white", "green"],
    transitionGradient: true,
  });
};
