import { printHomeScreen, stopAudio, toggleLibrary } from "../commands";

export const controls: { [key: string]: () => void } = {
  backspace: () => {
    stopAudio();
    printHomeScreen();
  },
  escape: () => {
    stopAudio();
    process.exit();
  },
  space: () => {
    toggleLibrary();
  },
};
