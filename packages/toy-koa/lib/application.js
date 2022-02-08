/**
 * Module dependencies.
 */

const http = require('http')

class Koa {
  constructor() {
    this.fn = null
  }

  use(fn) {
    this.fn = fn
  }

  listen(...args) {
    const server = http.createServer(this.fn)
    server.listen(...args)
  }
}

module.exports = Koa