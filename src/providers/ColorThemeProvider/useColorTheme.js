import { useContext } from 'react';
import { ColorThemeContext } from './ColorThemeProvider';

export const useColorTheme = () => useContext(ColorThemeContext);
