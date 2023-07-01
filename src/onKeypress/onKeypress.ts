import { controls } from "./controls";
import { playTrack } from "../commands/playTrack";
import { currentTrack, settingsMap } from "../state";
import { tracks } from "../tracks";

interface Key {
  name: string;
  sequence: string;
}

export const onKeypress = (str: string, key: Key) => {
  // console.log(str);
  // console.log(key);

  if (Object.keys(tracks).includes(key.sequence)) {
    if (!settingsMap.allowInterrupt && currentTrack) {
      return;
    }
    if (str) {
      playTrack(str);
    } else {
      console.log("play sequence");
      playTrack(key.sequence);
    }
  }

  if (Object.keys(controls).includes(key.name)) {
    controls[key.name]();
  }

  if (Object.keys(controls).includes(key.sequence)) {
    controls[key.sequence]();
  }
};

// {
//   sequence: '\x1BOP',
//   name: 'f1',
//   ctrl: false,
//   meta: false,
//   shift: false,
//   code: 'OP'
// }
