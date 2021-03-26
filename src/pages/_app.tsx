// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global.styles';
import theme from '../styles/theme.styles';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles/>
    </ThemeProvider>

  )
}
