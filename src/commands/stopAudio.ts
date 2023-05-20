import { audio, setCurrentTrack } from "../state";

export const stopAudio = () => {
  setCurrentTrack("");
  audio.kill();
};
