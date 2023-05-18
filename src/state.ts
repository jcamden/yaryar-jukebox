import { ChildProcess } from "child_process";

export let audio: ChildProcess;

export const setAudio = (newAudio: ChildProcess) => {
  audio = newAudio;
};

export const stopAudio = () => {
  audio.kill();
};

export const onAudioExit = (callback: () => void) => {
  audio.on("exit", callback);
};

export let currentTrack: string;

export const setCurrentTrack = (str: string) => {
  currentTrack = str;
  console.log("currentTrack");
  console.log(currentTrack);
};
