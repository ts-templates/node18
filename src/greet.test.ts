import assert from 'node:assert'
import {
  describe,
  it
} from 'node:test'
import { greet } from './greet'

await describe('greet', async () => {
  await it('returns greeting', () => {
    const actual = greet('World')
    assert.strictEqual(actual, 'Hello World')
  })
})
