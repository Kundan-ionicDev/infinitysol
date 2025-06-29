
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 8271, hash: '5d14e9ab1f7ba4771b529c80f38ef60f1280fe3f84ab83f26fe128bf26d4b6f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5320, hash: 'b1c7aa08ed9d1d31af771919008da8f7a503daf71f3cc7aef7d181090fe748fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5MYPSVJR.css': {size: 265691, hash: 'Sfkfpt0jVo8', text: () => import('./assets-chunks/styles-5MYPSVJR_css.mjs').then(m => m.default)}
  },
};
