const Koa = require("koa");
const Router = require('koa-router');
const bodyParser=require('koa-bodyparser');
const staticCache = require('koa-static-cache');
const appProt = '8420';
const routerRegister = require('./router/index.js')

let env = "production";
if(process.argv[2] === 'dev'){
  env = 'dev'
}

var app = new Koa();
const router = new Router();
app.use(bodyParser())

// router.get('/', async (ctx) => {
//   ctx.body="首页"
// })

// 注册路由
app.use(router.routes());
app.use(router.allowedMethods());
routerRegister(router, env);

app.listen(appProt);
console.log(`app start, port ${appProt}`);
app.on("error", function(err, ctx) {
  console.log(err);
});
