import { createContext, ReactNode } from 'react';

interface ToggleThemeProviderProps {
    children: ReactNode;
    themeToggler: () => void;
    theme: string;
}

interface ToggleThemeProviderData {
    theme: string;
    themeToggler: () => void;
}

export const ToggleThemeContext = createContext({} as ToggleThemeProviderData);

export function ToggleThemeProvider({ children, ...rest }) {
    return (
        <ToggleThemeContext.Provider value={{
            themeToggler: rest.themeToggler,
            theme: rest.theme
        }}>
            {children}
        </ToggleThemeContext.Provider>
    )
}