import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../tailwind.config';

import './global.css';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
        width: 100vw;
        background-color: #17181C;
        color: #F5F5F5;
    }

    * {
        box-sizing: border-box;
    }


`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ theme }>
                <Component { ...pageProps } />
            </ThemeProvider>
        </>
    );
}