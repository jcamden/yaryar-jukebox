import { audio, setCurrentTrack } from "./playTrack";

export const controls: { [key: string]: () => void } = {
  space: () => {
    audio.kill();
    setCurrentTrack("");
  },
  escape: () => {
    if (audio) {
      audio.kill();
    }
    process.exit();
  },
};
