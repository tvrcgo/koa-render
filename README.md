# koa-render
View render for koa 2.

### Usage
Extend ctx.render function.
```js
const Koa = require('koa');
const render = require('koa-render');
const app = new Koa();

render(app, {
  root: path.resolve('views'),
  ext: 'tpl',
  cache: true
})
```

Render view.
```js
app.use((ctx, next) => {
  ctx.render('index', {
    msg: 'Hi, it works.'
  })
})
```

### Install
```sh
npm i tvrcgo/koa-render --save
```

### License
MIT
