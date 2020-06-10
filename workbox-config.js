module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{html,json,js,css}"
  ],
  "swDest": "_site/sw.js",
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|svg)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 20,
      },
    },
  }],
};