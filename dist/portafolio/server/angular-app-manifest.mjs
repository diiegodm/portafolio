
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7518, hash: '06e495c61eb7653e077133a4696271a15b0e57f52eb8a201102bf3c021485fd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: 'ef814f910268464b2bec6088036082568a767e35596c16515ff08038e0842701', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40499, hash: '1fbe758b00ead50ea8e24add1af8196b3ed45823f9d80bbbbd93e6011b24903b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5DJZNETH.css': {size: 23298, hash: 'sxSfxxJIgvA', text: () => import('./assets-chunks/styles-5DJZNETH_css.mjs').then(m => m.default)}
  },
};
