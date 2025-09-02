
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
    'index.csr.html': {size: 6671, hash: '7765a8d511658fabebad95da95e314cca47c4bb059ba59002a4ea909853a8e00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '98b10fdd4f9e102abaff814a366346eec407a6815e4cb68240c610028541da31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28062, hash: 'cbb555de21d846f8c60c5bb4338971262c0e98c63d541ffa437d7a5cc40e217e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MH7GQADV.css': {size: 20333, hash: '5tk01bOYBVo', text: () => import('./assets-chunks/styles-MH7GQADV_css.mjs').then(m => m.default)}
  },
};
