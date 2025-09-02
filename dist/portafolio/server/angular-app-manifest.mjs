
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
    'index.csr.html': {size: 6671, hash: '292845205e8fc6719b7ae2dc53bc6fcb6f69d4bd0fc6ef242dfb73c06d7a52d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '0dd7b07384daabec6548f7cf38d3de699ea8b2a61e0ac413df23ffba304137d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27959, hash: '5cff1fdf5ee6ac06e37397994c6a25e2ec7c54c74b64b70700c422143ceef9bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ABIBDZY3.css': {size: 20396, hash: 'btkItXdVOEc', text: () => import('./assets-chunks/styles-ABIBDZY3_css.mjs').then(m => m.default)}
  },
};
