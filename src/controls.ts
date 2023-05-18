import { printHomeScreen, printLibrary, printTrack } from "./messages";
import {
  currentFilename,
  isShowingLibrary,
  setCurrentTrack,
  stopAudio,
  toggleIsShowingLibrary,
} from "./state";

export const controls: { [key: string]: () => void } = {
  backspace: () => {
    stopAudio();
    setCurrentTrack("");
  },
  escape: () => {
    stopAudio();
    process.exit();
  },
  space: () => {
    if (!isShowingLibrary) {
      printLibrary();
    } else if (currentFilename !== "") {
      printTrack(currentFilename);
    } else {
      printHomeScreen();
    }
    toggleIsShowingLibrary();
  },
};
