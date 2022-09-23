import { describe, expect, it } from '@jest/globals'
import { greet } from './greet'

describe('greet', () => {
  it('returns greeting', () => {
    expect(greet('World')).toBe('Hello World')
  })
})
