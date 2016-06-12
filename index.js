'use strict';

const swig = require('swig');
const path = require('path');

module.exports = (app, opts) => {
  opts = opts || {};
  const ext = opts.ext || 'html';
  const root = opts.root || 'views';
  const sendBody = opts.sendBody !== undefined ? opts.sendBody : true;
  swig.setDefaults({
    cache: opts.cache !== undefined ? opts.cache : 'memory'
  });
  // extend ctx.render
  app.context.render = function(view, locals) {
    // join extension
    if (path.extname(view) == "") {
      view = view + '.' + ext;
    }
    // resolve tpl path
    const tpl = path.resolve(root, view);
    // render tpl
    const html = swig.renderFile(tpl, locals);
    if (sendBody) {
      this.body = html;
    }
    return html;
  };
}
