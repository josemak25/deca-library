import { CHANGE_THEME, DEFAULT_THEME } from '../types';

export const getTheme = () => ({ type: DEFAULT_THEME });

export const changeTheme = payload => ({ type: CHANGE_THEME, theme: payload });
