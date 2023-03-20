import { audio, setCurrentTrack } from "./playTrack";
import { stopAudio } from "./utils";

export const controls: { [key: string]: () => void } = {
  space: () => {
    stopAudio(audio);
    setCurrentTrack("");
  },
  escape: () => {
    stopAudio(audio);
    process.exit();
  },
};
