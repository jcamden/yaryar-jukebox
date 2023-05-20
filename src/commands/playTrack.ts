import playSound from "play-sound";

import {
  createGradient,
  printHomeScreen,
  printTrack,
  printTrackRenderLoop,
} from "./messages";
import { stopAudio } from "./stopAudio";
import {
  audio,
  currentTrack,
  isRenderLoopEnabled,
  isShowingLibrary,
  onAudioExit,
  setAudio,
  setCurrentTrack,
  toggleIsShowingLibrary,
} from "../state";
import { tracks } from "../tracks";

const player = playSound({});

export const playTrack = (str: string) => {
  if (currentTrack === str) {
    return;
  }

  if (audio) {
    stopAudio();
  }

  const filename = tracks[str];

  setAudio(
    player.play(
      `assets/${filename}`,
      {
        // timeout: 5000
        mplayer: ["-volume", 100],
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any) => {
        if (err) {
          if (err !== 1) {
            console.log("There was an error:");
            console.log(JSON.stringify(err, null, 3));
          }
        }
      }
    )
  );

  // clear current track when the track ends (but not when a new track has been selected)
  onAudioExit(() => {
    if (currentTrack === str) {
      setCurrentTrack("");
      printHomeScreen();
    }
  });

  setCurrentTrack(str);
  if (isShowingLibrary) {
    toggleIsShowingLibrary();
  }

  console.clear();
  if (isRenderLoopEnabled) {
    printTrackRenderLoop(filename, createGradient());
  } else {
    printTrack(filename, createGradient());
  }
};
