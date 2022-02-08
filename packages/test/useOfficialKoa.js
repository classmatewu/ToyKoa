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