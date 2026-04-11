import { type PropsWithChildren, useEffect } from 'react'
import { applyThemeTokens } from './theme.css'

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  useEffect(() => {
    applyThemeTokens('light')
  }, [])

  return <>{children}</>
}
