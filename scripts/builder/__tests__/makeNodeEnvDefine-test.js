import define from '../makeNodeEnvDefine'

describe('node env define', () => {
  const devTarget  = 'foo'
  const prodTarget = 'bar'

  it('should be match development target.', () => {
    process.env.NODE_ENV = 'development'
    expect(
      define(
        development => devTarget,
        prodTarget  => prodTarget
      )
    ).toBe(devTarget)
  })
})
