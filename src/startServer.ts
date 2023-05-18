import readline from "readline";

import { printHomeScreen } from "./messages";
import { onKeypress } from "./onKeypress";

export const startServer = () => {
  printHomeScreen();

  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on("keypress", (str, key) => {
    onKeypress(str, key);
  });
};
