import { ChildProcess } from "child_process";

import playSound from "play-sound";

import { currentTracks } from "./currentTracks";

export const player = playSound({});

export let audio: ChildProcess;

let currentTrack: string;

export const playTrack = (str: string) => {
  if (currentTrack === str) {
    return;
  }

  currentTrack = str;

  if (audio) {
    audio.kill();
  }

  audio = player.play(
    `assets/${currentTracks[str]}`,
    {
      // timeout: 5000
      mplayer: ["-volume", 10],
    },
    (err: any) => {
      if (err) {
        console.log("There was an error:");
        console.log(JSON.stringify(err, null, 3));
      }
    }
  );
};
