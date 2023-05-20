import { ChildProcess } from "child_process";

import { tracks } from "./tracks";

export let audio: ChildProcess;

export const setAudio = (newAudio: ChildProcess) => {
  audio = newAudio;
};

export const onAudioExit = (callback: () => void) => {
  audio.on("exit", callback);
};

export let currentTrack: string;

export let currentFilename = "";

export const setCurrentTrack = (str: string) => {
  currentTrack = str;
  currentFilename = tracks[str] ?? "";
};

export let isShowingLibrary = false;

export const toggleIsShowingLibrary = () => {
  isShowingLibrary = !isShowingLibrary;
};

export let isRenderLoopEnabled = false;

export const toggleIsRenderLoopEnabled = () => {
  isRenderLoopEnabled = !isRenderLoopEnabled;
};

export let isPrintTrackGradientEnabled = false;

export const toggleisPrintTrackGradientEnabled = () => {
  isPrintTrackGradientEnabled = !isPrintTrackGradientEnabled;
};
