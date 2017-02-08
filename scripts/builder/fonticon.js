//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * fonticon.js
 *
 * 生成字体文件
 *
 * @author fe.yf <631190613@qq.com>
 */

const fs   = require('fs')
const path = require('path')
const glob = require('golb')
const { compose } = require('redux')
const streamToPromise = require('stream-to-promise')
const { StringDecoder } = require('string_decoder')
const svg2ttf   = require('svg2ttf')
const ttf2eot   = require('ttf2eot')
const ttf2woff  = require('ttf2woff')
const ttf2woff2 = require('ttf2woff2')
const svg2svg   = require('svgicons2svgfont')
const resolve = require('./pathResolve')


const svgFilePath = resolve('public/icons')
const svgFiles = glob.sync(`${svgFilePath}/*.svg`)
const stream = svg2svg({ fontName: 'iconfont' })

function pickname(file) {
  return path.basename(file).substr(0, file.lastIndexOf(path.extname(file)))
}

function toUint8Arr(buffer) {
  return new Uint8Array(buffer)
}

function toBuffer(buffer) {
  return buffer.buffer
}

function caller(type, value) {
  return function(acc) {
    acc[type] = value
    return acc
  }
}


function callContainer(adapter) {
  return function (fonts) {
    return new Promise((resolve, reject) => {
      const { seedCall, preCall, call, postCall, type } = adapter
      try {
        fonts.push({
            ...type,
          buffer: new Buffer(
            postCall(call(preCall(seedCall(fonts).buffer)))
          )
        })

        resolve(fonts)
      } catch(e) {
        reject(e)
      }
    })
  }
}

Promise.resolve({})
  .then(caller('source', svgFiles.map(pickname)))
  .then(generateSVG)


function generateSVG(acc) {
  return new Promise((resolve, reject) => {
    streamToPromise(stream)
      .then(buf => {
        resolve(caller('svg', buf)(acc))
      })
      .catch(reject)
  })
}

function generateTTF(acc) {
  return new Promise
}

console.log()
