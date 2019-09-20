# Caravans of Gold Exhibit

Install Jekyll v4.x https://jekyllrb.com/docs/

`git clone https://github.com/nulib/caravans-wax.git`

`cd caravans-wax`

`bundle install`

`bundle exec jekyll serve`

Visit: http://localhost:4000


## Images

- driving desires: 416 MB (original), 432 kb (desktop), 192 KB (pwa)
- Saharan Frontiers: 1.09 GB (original),
- long reach of the sahara: 576 MB (original),
- saharan echoes: 32 MB (original),
- shifting away from the sahara: 85 MB (original)

## Screen Resolutions

**Nigeria**
Screen resolution,	Share
720x1280,	22.63%
1080x1920,	16.29%
750x1334, 11.03%
480x854, 7.57%
720x1440,	7.00%
[source](https://deviceatlas.com/blog/most-used-smartphone-screen-resolutions#nigeria)

**Africa**
_Desktop_
1366x768: 37%
1024x768: 13%
1280x1024: 11%

_Mobile_
360x640: 25%
320x534: 7%
480x800: 6%
[source](http://gs.statcounter.com/screen-resolution-stats#monthly-201705-201705-bar)

## Image preparation
Use Imagemagick:

```
#!/bin/bash/
for file in *
do
	echo "Converting $file to full webp"
	convert "$file" -resize x550 "$file"_full.webp
	echo "Converting $file to small webp"
	convert "$file" -resize 350x "$file"_small.webp
	echo "Deleting original version of $file"
	rm "$file"
done
```

or

`mogrify -format webp -resize x500`

### Final images
- file_1200.webp
- file_1200.webp
- file_1200.webp
