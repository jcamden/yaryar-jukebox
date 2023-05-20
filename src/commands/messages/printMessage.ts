import chalk from "chalk";
import figlet from "figlet";

const painter = (str: string, colorHex?: string) =>
  colorHex ? chalk.hex(colorHex)(str) : str;

interface PrintMessageOptions {
  colorHex?: string;
  font?: string;
  horizontalLayout?: string;
  verticalLayout?: string;
  whitespaceBreak?: boolean;
  width?: number;
}

// currently unused, so may want to remove chalk and figlet
export const printMessage = (msg: string, options?: PrintMessageOptions) => {
  const {
    colorHex,
    font,
    horizontalLayout,
    verticalLayout,
    width,
    whitespaceBreak,
  } = options;

  console.log(
    painter(
      figlet.textSync(msg, {
        font,
        horizontalLayout,
        verticalLayout,
        width,
        whitespaceBreak,
      }),
      colorHex
    )
  );
};
