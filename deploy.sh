#!/bin/bash
bundle exec jekyll build
cd ./_site
purgecss --css assets/styles.css --content index.html,**/*.html --output assets
cd ..
s3_website push
