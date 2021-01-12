import {
  Box,
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center">
      <main>
        <h1>
          { t('header.lbl_welcome') }
        </h1>
      </main>
    </Box>
  )
}
