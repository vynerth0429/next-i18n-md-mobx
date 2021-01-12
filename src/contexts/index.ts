import {
  ThemeProvider,
} from '@material-ui/core/styles';
import theme from '../styles/material';

interface IContext {
  context: (props: any) => any,
  props: {
    [dynamic: string]: any
  }
}

export const contexts: IContext[] = [
  {
    context: ThemeProvider,
    props: {
      theme: theme
    }
  },
];

