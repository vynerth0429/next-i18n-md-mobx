import { memo } from 'react';

import '../styles/globals.scss'
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
