import { printHomeScreen, stopAudio, toggleLibrary } from "../commands";
import {
  toggleIsRenderLoopEnabled,
  toggleisPrintTrackGradientEnabled,
} from "../state";

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
  tab: () => {
    toggleIsRenderLoopEnabled();
  },
  "\\": () => {
    toggleisPrintTrackGradientEnabled();
  },
};
