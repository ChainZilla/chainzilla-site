import { SWITCH_LANGUAGE, TOGGLE_NAV } from './types';

export const switchLanguage = language => ({ type: SWITCH_LANGUAGE, payload: language });

export const toggleNav = value => ({ type: TOGGLE_NAV, payload: value })