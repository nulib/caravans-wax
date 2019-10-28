module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{html,md}",
    "assets/*.css",
    "assets/*.js",
    "img/*.jpg",
    "assets/bootstrap/bootstrap.min.js",
    "img/tour/*.jpg",
    "*.{png,ico,json,txt,svg,xml}",
    "search/index.json"
  ],
  "swDest": "sw.js",
  "swSrc": "service-worker.js"
};