import assert from 'node:assert'
import {
  describe,
  it
} from 'node:test'
import { greet } from './greet'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
describe('greet', () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  it('returns greeting', () => {
    const actual = greet('World')
    assert.strictEqual(actual, 'Hello World')
  })
})
