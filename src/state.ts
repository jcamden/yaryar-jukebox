import { ChildProcess } from "child_process";

import { currentTracks } from "./currentTracks";

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

export let currentFilename = "";

export const setCurrentTrack = (str: string) => {
  currentTrack = str;
  currentFilename = currentTracks[str] ?? "";
};

export let isShowingLibrary = false;

export const toggleIsShowingLibrary = () => {
  isShowingLibrary = !isShowingLibrary;
};
