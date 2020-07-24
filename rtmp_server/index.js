const NodeMedia = require('node-media-server');

const configuration = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
};

var server = new NodeMedia(configuration);
server.run();
