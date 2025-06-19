
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/infinitysol/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 8283, hash: 'd74cd771125d138de44ca5b10c8ca23413ea97bf3bed932033aa9c18c5157f97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5332, hash: '517ab8bb8f2b7dbbd02d684a5002572c88512d9e09e2c4a133c6e578d78f9e72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UGL6THQB.css': {size: 264971, hash: 'rvy8sqM8+jk', text: () => import('./assets-chunks/styles-UGL6THQB_css.mjs').then(m => m.default)}
  },
};
