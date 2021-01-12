import { memo } from 'react';

import './index.scss'
import './../i18n';

import { contexts } from '../contexts';

function AppContent({ render }: any) {
  return (
    <>
      {
        render()
      }
    </>
  );
}

const AppContentMemo = memo(AppContent);

function App({ Component, pageProps }) {
  return (
    <>
      {
        contexts.reverse().reduce((acc, contextItem)=>{
          return (
            <contextItem.context {...contextItem.props}>
              {acc}
            </contextItem.context>
          )
        }, <AppContentMemo render={() => (<Component {...pageProps} />)}/>  )
      }
    </>
  )
}

export default memo(App);
