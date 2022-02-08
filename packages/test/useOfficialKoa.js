const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  // 阻止网页图标请求，防止干扰测试请求
  if (ctx.url === '/favicon.ico')
    return
  else next()
})

app.use((ctx, next) => {
  console.log("ctx.req.url: ", ctx.req.url);
  next()
  console.log("ctx.request.url: ", ctx.request.url);
  console.log("ctx.url: ", ctx.url);
})

app.use((ctx, next) => {
  console.log("ctx.req.path: ", ctx.req.path);
  next()
  console.log("ctx.request.path: ", ctx.request.path);
  console.log("ctx.path: ", ctx.path);
})

app.use((ctx, next) => {
  console.log('hello official koa');
  ctx.body = 'hello official koa'
})

app.listen(10000, () => {
  console.log('listening in port 10000');
})

/**
 * 总结 koa 的几个特点：
 *  1. koa是一个类，类下有use、listen方法
 *  2. use方法接收一个函数，这个函数的参数是ctx、next
 *  3. ctx 是 res、req的扩展与结合
 *  4. use函添加中间件洋葱模型，next可以跳到下一个中间件逻辑，同时支持async/await
 */