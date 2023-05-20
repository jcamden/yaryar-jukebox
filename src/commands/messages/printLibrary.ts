import { tracks } from "../../tracks";

const clean = /(\{|\}|"|:|.mp3|.wav|,(?!["{}[\]])|row[0-9])/g;

export const printLibrary = () => {
  console.clear();
  console.log(JSON.stringify(tracks, null, 2).replace(clean, ""));
};
