const Koa = require("koa");
const router = require('koa-router')();

var app = new Koa();
router.get('/', async (ctx) => {
  ctx.body="首页"
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8420)
