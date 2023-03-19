import readline from "readline";

import { onKeypress } from "./onKeypress";

export const startServer = () => {
  console.log("Welcome to Yaryar Jukebox.");

  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on("keypress", (str, key) => {
    onKeypress(str, key);
  });
};
