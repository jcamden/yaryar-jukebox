import { controls } from "./controls";
import { currentTracks } from "./currentTracks";
import { playTrack } from "./playTrack";

interface Key {
  name: string;
  sequence: string;
}

export const onKeypress = (str: string, key: Key) => {
  // console.log(str);
  // console.log(key);

  if (Object.keys(currentTracks).includes(key.sequence)) {
    playTrack(str);
  }

  if (Object.keys(controls).includes(key.name)) {
    controls[key.name]();
  }
};
