import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        --white: ${({ theme }) => theme.white};
        --background: ${({ theme }) => theme.background};
        --gray-line: ${({ theme }) => theme.gray_line};
        --text: ${({ theme }) => theme.text};
        --text-highlight: ${({ theme }) => theme.text};
        --title: ${({ theme }) => theme.title};
        --red: ${({ theme }) => theme.red};
        --green: ${({ theme }) => theme.green};
        --blue: ${({ theme }) => theme.blue};
        --blue-dark: ${({ theme }) => theme.blue_dark};
        --blue-twitter: ${({ theme }) => theme.blue_twitter};
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text);

        transition: all 0.4s;
    }

    body, input, button, textarea {
        font: 400 1rem 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

