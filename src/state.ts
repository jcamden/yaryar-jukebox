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

export let settings = [
  {
    name: "allow interrupt",
    desc: "allow a song to be interrupted by playing another song",
    enabled: false,
  },
  {
    name: "now-playing gradient",
    desc: "apply random gradients to now-playing display",
    enabled: false,
  },
  {
    name: "now-playing render loop",
    desc: "enable render loop to animate now-playing display",
    enabled: false,
  },
];

type Settings = typeof settings;

export const createSettingsMap = (settings: Settings) =>
  settings.reduce((accum, setting) => {
    const camelCaseName = setting.name.replace(/(-|\s)./g, (c) =>
      c.substring(1).toUpperCase()
    );
    return { ...accum, [camelCaseName]: setting.enabled };
  }, {});

interface SettingsMap {
  allowInterrupt: false;
  nowPlayingGradient: false;
  nowPlayingRenderLoop: false;
}

export let settingsMap = createSettingsMap(settings) as SettingsMap;

export const updateSettings = (newSettings) => {
  settings = newSettings;
  settingsMap = createSettingsMap(newSettings) as SettingsMap;
};
