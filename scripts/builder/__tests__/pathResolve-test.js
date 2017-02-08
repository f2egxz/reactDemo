import path    from 'path'
import resolve from './../pathResolve'

describe('resolve', () => {
  it('should be match path string.', () => {
    const root = process.cwd()
    const target = 'foo'
    expect(
      resolve(target)
    ).toBe(path.resolve(root, target))
  })
})
