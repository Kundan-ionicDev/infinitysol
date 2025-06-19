
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'infinitysol',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 8280, hash: '5b6b74dcbf80e0b8120f0f27def51d802df8061c747943b8c6f8882eea07ef96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5329, hash: 'bdee4387de338ad0aedaefedd72a7c6e237651ba86f72039ead328c4bbb857b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UGL6THQB.css': {size: 264971, hash: 'rvy8sqM8+jk', text: () => import('./assets-chunks/styles-UGL6THQB_css.mjs').then(m => m.default)}
  },
};
