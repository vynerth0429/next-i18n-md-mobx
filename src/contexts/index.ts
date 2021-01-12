import {
  ThemeProvider,
} from '@material-ui/core/styles';
import theme from '../styles/material';

import {
  StoreProvider,
} from './store-context';

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
  {
    context: StoreProvider,
    props: {}
  },
];

