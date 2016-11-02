import koa from 'koa';
import route from 'koa-route';
import send from 'koa-send';
import path from 'path';
import fs from 'fs';
import webpack from 'webpack'
import config from './webpack.config';

/***********************************************************************/
let compiler = webpack(config);

const app = koa();

let middleware = require('koa-webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

app.use(middleware);

app.use(require("koa-webpack-hot-middleware")(compiler));



app.use(route.get('/', index));

app.use(route.get('/home', home));

app.use(route.get('/menu', menu));

function *index(){
    yield send(this, './static/index.html');
}

function *menu(){
    this.body = 'Menu';
}

function *index(){
    this.body = 'content';
}

export default app;
