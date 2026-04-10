import typographySystem from '../../../spec/theme/04_typography_system.json'

export const typographyTokens = {
  families: typographySystem.content.font_families,
  textStyles: typographySystem.content.text_styles,
  numericStyles: typographySystem.content.numeric_styles
} as const
