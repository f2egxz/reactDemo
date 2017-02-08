//-*- mode: js2 -*-
//-*- coding: utf-8 -*-
//@flow

/**
 * makeNodeEnvDefine.js
 *
 * 根据环境变量定义配置文件
 *
 * @author fe.yf <631190613@qq.com>
 */

function makeNodeEnvDefine(developmentCall, productionCall, testCall) {

  if(!developmentCall)
    throw new Error(
      'Function `makeNodeEnvDefine` require `developmentCall` function.'
    )

  if(!productionCall && typeof productionCall !== 'function')
    productionCall = developmentCall
  if(!testCall && typeof testCall !== 'function')
    testCall = developmentCall

  const env = process.env.NODE_ENV || 'development'

  switch(env) {
  case 'development': return developmentCall()
  case 'production':  return productionCall()
  case 'test':        return testCall()
  default: throw new Error(`Unknow NODE_ENV: ${env}`)
  }
}


module.exports = makeNodeEnvDefine
