import playSound from "play-sound";

import { currentTracks } from "./currentTracks";
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

  setAudio(
    player.play(
      `assets/${currentTracks[str]}`,
      {
        // timeout: 5000
        mplayer: ["-volume", 100],
      },
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
    }
  });

  setCurrentTrack(str);
};
