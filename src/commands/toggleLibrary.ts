import {
  createGradient,
  printHomeScreen,
  printLibrary,
  printTrackRenderLoop,
} from "./messages";
import {
  currentFilename,
  isShowingLibrary,
  toggleIsShowingLibrary,
} from "../state";

export const toggleLibrary = () => {
  if (!isShowingLibrary) {
    printLibrary();
  } else if (currentFilename !== "") {
    printTrackRenderLoop(currentFilename, createGradient());
  } else {
    printHomeScreen();
  }
  toggleIsShowingLibrary();
};
