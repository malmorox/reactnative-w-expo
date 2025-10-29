import React, { createContext, useContext, useState } from 'react';
import { Colors } from './constants/Colors';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [themeName, setThemeName] = useState(systemScheme);

  const theme = Colors[themeName];

  const toggleTheme = () => setThemeName(themeName === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
