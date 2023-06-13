import chalk from "chalk";
import promptSync from "prompt-sync";

import { printLibrary, printTrack } from "./commands";
import { isShowingLibrary, settings, updateSettings } from "./state";

const prompt = promptSync();

const printMenu = () =>
  settings.forEach(({ name, desc, enabled }, index) => {
    console.log(
      `${chalk.greenBright(index + 1 + ".")} ${chalk.magentaBright(name)}${
        enabled !== undefined ? " - " + chalk.blueBright(enabled) : ""
      } - ${chalk.gray(desc)}`
    );
  });

export const settingsRepl = () => {
  console.clear();
  console.log(chalk.cyanBright("~~~~Yaryar Jukebox Settings~~~~") + "\n");
  printMenu();
  console.log(
    "\n" +
      chalk.greenBright("\\. ") +
      chalk.magentaBright("exit settings") +
      "\n"
  );
  const text = prompt("♫  ");

  if (text === "\\") {
    console.clear();
    if (isShowingLibrary) {
      printLibrary();
    } else {
      printTrack();
    }

    return;
  }

  const numericEntry = parseInt(text);

  if (!numericEntry) {
    settingsRepl();
  }

  const key = (numericEntry - 1).toString();

  if (Object.keys(settings).includes(key)) {
    updateSettings(
      settings.map((setting, index) =>
        index === numericEntry - 1
          ? { ...setting, enabled: !setting.enabled }
          : setting
      )
    );
    settingsRepl();
  } else {
    console.log(`${text}`);
    settingsRepl();
  }
};
