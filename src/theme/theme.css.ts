import { colorTokens } from './tokens/colors'
import { spacingTokens } from './tokens/spacing'
import { radiusTokens } from './tokens/radius'
import { typographyTokens } from './tokens/typography'

const root = document.documentElement

const setVar = (name: string, value: string | number): void => {
  root.style.setProperty(name, String(value))
}

export const applyThemeTokens = (mode: 'light' | 'dark' = 'light'): void => {
  const colors = colorTokens[mode]

  Object.entries(colors).forEach(([token, value]) => {
    setVar(`--color-${token.replace(/_/g, '-')}`, value)
  })

  Object.entries(spacingTokens).forEach(([token, value]) => {
    setVar(`--space-${token}`, `${value}px`)
  })

  const radiusScale = Object.fromEntries(
    Object.entries(radiusTokens).filter(([token]) => token !== 'usage_by_component_family')
  )

  Object.entries(radiusScale).forEach(([token, value]) => {
    setVar(`--radius-${token.replace('corner_', '')}`, `${value}px`)
  })

  setVar('--font-family-primary', typographyTokens.families.primary)
}
