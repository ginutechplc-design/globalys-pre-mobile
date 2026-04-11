import foundation from '../../../spec/theme/02_theme_foundation.json'

export const colorTokens = {
  light: foundation.content.light_mode,
  dark: foundation.content.dark_mode
} as const

export type ColorMode = keyof typeof colorTokens
