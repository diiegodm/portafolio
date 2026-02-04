
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
    'index.csr.html': {size: 7623, hash: '859f0d3a82149cdfb48a4914090178e43bd922cd313c9831edfcd685aacd3d4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1115, hash: '3aa4a5a08479a1e4e026fd02fcdf615896a6ec2002ab7e7ae603c215cdfa2096', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37345, hash: '5d24715e7eca9c27692cdc86dd0a42c288c736d96214a721f5a1a692be211190', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GRX4U6K7.css': {size: 24383, hash: 'ZNvBgBVstag', text: () => import('./assets-chunks/styles-GRX4U6K7_css.mjs').then(m => m.default)}
  },
};
