import { audio } from "./playTrack";

export const controls: { [key: string]: () => void } = {
  escape: () => {
    audio.kill();
    process.exit();
  },
};
