bundle exec jekyll build
purgecss --css _site/assets/styles.css --content _site/index.html,_site/**/*.html --output assets
s3_website push
