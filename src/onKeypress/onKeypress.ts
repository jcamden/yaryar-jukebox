import { controls } from "./controls";
import { playTrack } from "../commands/playTrack";
import { currentTrack, settingsMap } from "../state";
import { tracks } from "../tracks";

interface Key {
  name: string;
  sequence: string;
}

const keyboardKeys = Object.keys(tracks);

export const onKeypress = (str: string, key: Key) => {
  // console.log(str);
  // console.log(key);

  if (keyboardKeys.includes(key.sequence) || keyboardKeys.includes(key.name)) {
    if (!settingsMap.allowInterrupt && currentTrack) {
      return;
    }
    if (str) {
      playTrack(str);
    } else {
      playTrack(key.name);
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
