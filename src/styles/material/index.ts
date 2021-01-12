import { PaletteConfig } from './PaletteConfig';
import { TypographyConfig } from './TypographyConfig';
import { ComponentConfig } from './ComponentConfig';

export * from './TypographyConfig';
export * from './ComponentConfig';
export * from './ColorConfig';
export * from './PaletteConfig';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: PaletteConfig,
  typography: TypographyConfig,
  overrides: ComponentConfig,
});

export default theme;