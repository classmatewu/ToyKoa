const Koa = require('../toy-koa')

const app = new Koa()

app.use((req, res) => {
  console.log(req, res);
  res.end('hello toy koa') // 原生res上没有send方法，那是express实现的？
})

app.listen('10001', () => {
  console.log('listening in port 10001');
})
