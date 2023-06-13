import { printLibrary, printTrack } from "./messages";
import { isShowingLibrary, toggleIsShowingLibrary } from "../state";

export const toggleLibrary = () => {
  if (!isShowingLibrary) {
    printLibrary();
  } else {
    printTrack();
  }
  toggleIsShowingLibrary();
};
