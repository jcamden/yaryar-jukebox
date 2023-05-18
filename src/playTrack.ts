import playSound from "play-sound";

import { currentTracks } from "./currentTracks";
import { printHomeScreen, printTrack } from "./messages";
import {
  audio,
  currentTrack,
  onAudioExit,
  setAudio,
  setCurrentTrack,
  stopAudio,
} from "./state";

const player = playSound({});

export const playTrack = (str: string) => {
  if (currentTrack === str) {
    return;
  }

  if (audio) {
    stopAudio();
  }

  const filename = currentTracks[str];

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

  printTrack(filename);
};
