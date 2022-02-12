const Koa = require('../toy-koa')

const app = new Koa()

app.use((req, res) => {
  console.log(req, res);
  res.end('hello toy koa') // 原生是res.end，express是res.send，koa是ctx.body
})

app.listen('10001', () => {
  console.log('listening in port 10001');
})
