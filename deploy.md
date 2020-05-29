
# Deploy Steps in Bash

bundle exec jekyll build
cd ./_site
purgecss --css assets/styles.css --content index.html,**/*.html --output assets
cd ar
rm -r assets
cd ..
cd fr
rm -r assets
cd ..
workbox generateSW workbox-config.js
s3_website push
