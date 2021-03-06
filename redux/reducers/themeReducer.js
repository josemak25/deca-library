import { DEFAULT_THEME, CHANGE_THEME } from '../types';

const initialState = {
  CURRENT_THEME: 'lightMode',

  lightMode: {
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_LARGE: 16,
    PRIMARY_COLOR: 'rgba(28,122,151,1)',
    SECONDARY_COLOR: 'rgb(42, 50, 85)',
    SHADOW_COLOR: 'rgba(67,189,210,1)',
    SVG_COLOR: 'rgba(103,202,218,1)',
    COLOR_VARIANT_ONE: 'rgb(46, 182, 206)',
    COLOR_VARIANT_TWO: 'rgb(67, 189, 209)',
    COLOR_VARIANT_THREE: 'rgb(103, 202, 218)',
    COLOR_VARIANT_FOUR: 'rgb(0, 180, 212)',
    FONT_FAMILY_BOLD: 'panton-bold',
    FONT_FAMILY_REGULAR: 'panton-regular',
    FONT_FAMILY_LIGHT: 'panton-light',
    FONT_WEIGHT_LIGHT: 200,
    FONT_WEIGHT_MEDIUM: 600,
    FONT_WEIGHT_HEAVY: 800
  },

  darkMode: {
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_LARGE: 16,
    PRIMARY_COLOR: 'rgb(30, 147, 242)',
    SECONDARY_COLOR: 'rgb(238, 167, 2)',
    FONT_WEIGHT_LIGHT: 200,
    FONT_WEIGHT_MEDIUM: 600,
    FONT_WEIGHT_HEAVY: 800
  }
};

export default function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEFAULT_THEME: {
      const currentTheme = state.CURRENT_THEME;
      const theme = state[currentTheme];
      return { ...state, CURRENT_THEME: currentTheme, [currentTheme]: theme };
    }
    case CHANGE_THEME: {
      const currentTheme = action.theme;
      const theme = state[currentTheme];
      return { ...state, CURRENT_THEME: currentTheme, [currentTheme]: theme };
    }

    default:
      return state;
  }
}
