import theme from 'theme'

type Query = 'lg' | 'md' | 'sm'

export function media(query: Query): string {
  switch (query) {
    case 'lg': {
      return `@media screen and (min-width: ${theme.breakpoints.lg}px)`
    }

    case 'md': {
      return `@media screen and (min-width: ${theme.breakpoints.md}px)`
    }

    case 'sm': {
      return `@media screen and (min-width: ${theme.breakpoints.sm}px)`
    }
  }
}
