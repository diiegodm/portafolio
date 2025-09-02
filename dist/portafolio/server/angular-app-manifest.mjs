
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
    'index.csr.html': {size: 6671, hash: '049b7c51a9877049f49d00105b8e85b1f88043490f72327280aad63e1328e59c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: 'f4d7fc6c3e6e14edc391aa1b124e802ef611f2e714db976f7c509a8d4fbd7707', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27863, hash: 'bf98f53d816abf09fc5da41e3d33d4f6e1a88fe65aa8932a5a1847e83b332a9b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EEVFANBV.css': {size: 20587, hash: 'KJxHq16DNqs', text: () => import('./assets-chunks/styles-EEVFANBV_css.mjs').then(m => m.default)}
  },
};
