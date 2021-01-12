import { Overrides } from "@material-ui/core/styles/overrides";

import { ColorConfig } from './ColorConfig';

export const ComponentConfig: Overrides = {
  MuiButton: {
    root: {
      borderRadius: '4px',
      height: '48px',
      fontWeight: 600,
    }
  },
  MuiChip: {
    colorPrimary: {
      backgroundColor: ColorConfig.RED_1,
    },
    root: {
      borderRadius: '8px',
    }
  },
  MuiDivider: {
    root: {
      backgroundColor: `${ColorConfig.GREY_4}16`
    }
  },
  MuiCard: {
    root: {
      border: `1px solid ${ColorConfig.GREY_4}16`
    }
  },
  MuiPaper: {
    elevation1: {
      boxShadow: "0px 2px 4px rgba(165, 166, 167, 0.14), 0px 4px 5px rgba(165, 166, 167, 0.12), 0px 1px 10px rgba(165, 166, 167, 0.2)"
    }
  },
  MuiIconButton: {
    root: {
      color: ColorConfig.GREY_4,
    }
  }
};
