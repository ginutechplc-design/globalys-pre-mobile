import semanticTokens from '../../../spec/theme/03_semantic_tokens.json'

export const semanticTokensMap = semanticTokens.content.tokens

export type SemanticTokenName = keyof typeof semanticTokensMap
