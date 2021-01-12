interface IColorConfig {
  RED_1: string,
  RED_2: string,
  RED_3: string,
  RED_4: string,
  RED_5: string,
  RED_6: string,
  DARK_BLUE_1: string,
  DARK_BLUE_2: string,
  DARK_BLUE_3: string,
  LIGHT_BLUE_1: string,
  LIGHT_BLUE_2: string,
  LIGHT_BLUE_3: string,
  LIGHT_BLUE_4: string,
  GREEN_1: string,
  GREEN_2: string,
  GREEN_3: string,
  ORANGE_1: string,
  ORANGE_2: string,
  ORANGE_3: string,
  GREY_1: string,
  GREY_2: string,
  GREY_3: string,
  GREY_4: string,
  BLACK_1: string,
  WHITE_1: string,
}

export const ColorConfig: IColorConfig = {
  RED_1: "#FF7F79",
  RED_2: "#E14D4D",
  RED_3: "#A91025",
  RED_4: "#FF7961",
  RED_5: "#F44336",
  RED_6: "#BA000D",
  DARK_BLUE_1: "#406D8E",
  DARK_BLUE_2: "#074260",
  DARK_BLUE_3: "#001C36",
  LIGHT_BLUE_1: "#6D9FFF",
  LIGHT_BLUE_2: "#2171EA",
  LIGHT_BLUE_3: "#0047B7",
  GREEN_1: "#80E27E",
  GREEN_2: "#4CAF50",
  GREEN_3: "#087F23",
  ORANGE_1: "#FFC947",
  ORANGE_2: "#FF9800",
  ORANGE_3: "#C66900",
  GREY_1: "#717375",
  GREY_2: "#A5A6A7",
  GREY_3: "#7F8182",
  GREY_4: "#313437",
  BLACK_1: "#000000",
  WHITE_1: "#FFFFFF",
  LIGHT_BLUE_4: "#88A4B3"
};

type TColorConfig = (keyof IColorConfig);

export const colorWithAlpha = (color: TColorConfig, alpha: number = 100) => {
  return ColorConfig[color] + alpha;
}
