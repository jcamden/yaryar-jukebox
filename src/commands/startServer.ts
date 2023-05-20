import readline from "readline";

import { onKeypress } from "../onKeypress";

import { printHomeScreen } from ".";

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
