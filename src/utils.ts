import { ChildProcess } from "child_process";

export const stopAudio = (audio: ChildProcess) => {
  if (audio) {
    audio.kill();
  }
};
