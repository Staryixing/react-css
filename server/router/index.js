// import fs from "fs";
// import React from 'react';
// import { renderToString } from "react-dom/server";
let bundles = {
  app:'/js/app.js',
  vendor: '/js/vendor.js'
}

const routerRegister = (router, env) => {
  if(env === "dev"){
    const hostname = APP_DEV_SERVER;
    bundles.app = hostname + bundles.app;
    bundles.vendor = hostname + bundles.vendor;
  }

  router.get('*',(ctx, next) => {
    ctx.response.body = "404";
  })
}

module.exports = routerRegister
