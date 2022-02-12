/**
 * Module dependencies.
 */

const http = require('http')
const context = require('./context')
const request = require('./request')
const respose = require('./response')

class Koa {
  constructor() {
    this.fn = null
  }

  use(fn) {
    this.fn = fn
  }

  nativeHandleRequest(req, res) {
    this.fn(req, res)
  }

  listen(...args) {
    const server = http.createServer(this.fn)
    server.listen(...args)
  }
}

module.exports = Koa