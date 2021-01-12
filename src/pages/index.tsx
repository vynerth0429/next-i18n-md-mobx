import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react';

import { useTranslation } from 'react-i18next';
import useStores from '../hooks/useStores';

function Home() {
  // Use translation
  const { t } = useTranslation();

  // Use state management (Store)
  const { authStore } = useStores();

  const handleLogin = () => {
    authStore.login('Sample login');
  };

  const handleLogout = () => {
    authStore.logout();
  };

  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Typography
          variant="h4"
          align="center">
          { t('header.lbl_welcome') }
        </Typography>

        {
          <Typography
            variant="body1"
            align="center">
            {
              authStore.hasToken
                ? t('header.lbl_login')
                : t('header.lbl_logout')
            }
          </Typography>
        }

        <Button
          variant="contained"
          color="primary"
          onClick={
            authStore.hasToken
              ? handleLogout
              : handleLogin
          }>
          {
            authStore.hasToken
              ? t('button.lbl_logout')
              : t('button.lbl_login')
          }
        </Button>
      </Box>
    </main>
  )
}

export default observer(Home);