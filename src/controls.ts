import { setCurrentTrack, stopAudio } from "./state";

export const controls: { [key: string]: () => void } = {
  space: () => {
    stopAudio();
    setCurrentTrack("");
  },
  escape: () => {
    stopAudio();
    process.exit();
  },
};
