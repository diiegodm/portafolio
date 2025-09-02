
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
    'index.csr.html': {size: 5172, hash: '2ccc901ff66b43517c8bd69c4966a7949464b791edfaa31d45061175672897ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '61e4d1ecf990a7f29e9f409df90cdbefb1bdd593516db0c05225d577056d817a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25849, hash: 'e6a371c3d9650a1033e1b243cd4841a604a56769de0a673d31fb7c2282586f4c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-67GY7RLV.css': {size: 16607, hash: 'U6FF3scz8nA', text: () => import('./assets-chunks/styles-67GY7RLV_css.mjs').then(m => m.default)}
  },
};
