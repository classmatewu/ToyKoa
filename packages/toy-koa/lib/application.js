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
    this.context = context
    this.request = request
    this.respose = respose
  }

  use(fn) {
    this.fn = fn
  }

  nativeHandleRequest(req, res) {
    this.fn(req, res)
  }

  listen(...args) {
    const server = http.createServer(this.nativeHandleRequest.bind(this)) // 注意这种传函数表达式的，函数有this调用的，最好bind一下，不然this可能会丢失，因为this的取值是函数在调用时确定的
    server.listen(...args)
  }
}

module.exports = Koa