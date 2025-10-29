import { Colors } from '@/constants/theme';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  theme: typeof Colors.dark | typeof Colors.light;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Colors.dark,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemScheme = useColorScheme();
  const [themeName, setThemeName] = useState<'light' | 'dark'>(
    systemScheme ?? 'dark'
  );

  useEffect(() => {
    if (systemScheme) setThemeName(systemScheme);
  }, [systemScheme]);

  const theme = Colors[themeName] || Colors.dark;

  const toggleTheme = () => setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
