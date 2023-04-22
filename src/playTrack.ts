import { ChildProcess } from "child_process";

import playSound from "play-sound";

import { currentTracks } from "./currentTracks";
import { stopAudio } from "./utils";

export const player = playSound({});

export let audio: ChildProcess;

export let currentTrack: string;

export const setCurrentTrack = (str: string) => {
  currentTrack = str;
};

export const playTrack = (str: string) => {
  if (currentTrack === str) {
    return;
  }

  currentTrack = str;

  stopAudio(audio);

  audio = player.play(
    `assets/${currentTracks[str]}`,
    {
      // timeout: 5000
      mplayer: ["-volume", 100],
    },
    (err: any) => {
      if (err) {
        console.log("There was an error:");
        console.log(JSON.stringify(err, null, 3));
      }
    }
  );
};
