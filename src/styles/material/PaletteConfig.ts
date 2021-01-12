import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { ColorConfig } from './ColorConfig';

export const PaletteConfig: PaletteOptions = {
  primary: {
    main: ColorConfig.RED_2,
    light: ColorConfig.RED_1,
    dark: ColorConfig.RED_3,
  },
  secondary: {
    main: ColorConfig.DARK_BLUE_2,
    light: ColorConfig.DARK_BLUE_1,
    dark: ColorConfig.DARK_BLUE_3,
  },
  info: {
    main: ColorConfig.LIGHT_BLUE_2,
    light: ColorConfig.LIGHT_BLUE_1,
    dark: ColorConfig.LIGHT_BLUE_3,
  },
  success: {
    main: ColorConfig.GREEN_2,
    light: ColorConfig.GREEN_1,
    dark: ColorConfig.GREEN_3,
  },
  warning: {
    main: ColorConfig.ORANGE_2,
    light: ColorConfig.ORANGE_1,
    dark: ColorConfig.ORANGE_3,
  },
  error: {
    main: ColorConfig.RED_5,
    light: ColorConfig.RED_4,
    dark: ColorConfig.RED_6,
  },
  text: {
    primary: ColorConfig.GREY_4,
    secondary: ColorConfig.GREY_1,
    disabled: ColorConfig.GREY_2,
    hint: ColorConfig.GREY_3,
  },
  divider: ColorConfig.GREY_2,
  common: {
    white: ColorConfig.WHITE_1,
    black: ColorConfig.BLACK_1,
  }
};
