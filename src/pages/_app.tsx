import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ContinentsChangeProvider from '../contexts/ContinentsChangeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsChangeProvider>
        <Component {...pageProps} />
      </ContinentsChangeProvider>
    </ChakraProvider>
  );
}

export default MyApp
