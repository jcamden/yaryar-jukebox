import { printHomeScreen, stopAudio, toggleLibrary } from "../commands";
import { settingsRepl } from "../settingsRepl";
import { audio } from "../state";

export const controls: { [key: string]: () => void } = {
  backspace: () => {
    stopAudio();
    printHomeScreen();
  },
  escape: () => {
    if (audio) {
      stopAudio();
    }
    console.clear();
    process.exit();
  },
  space: () => {
    toggleLibrary();
  },
  // tab: () => {
  //   toggleIsRenderLoopEnabled();
  // },
  "\\": () => {
    settingsRepl();
  },
};
