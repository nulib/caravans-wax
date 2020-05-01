for file in *
do
	echo "Converting $file to full webp..."
	convert "$file" -resize x550 "$file"_full.webp
	echo "Converting $file to small webp..."
	convert "$file" -resize 350x "$file"_small.webp
	if test -f "$file"_small.webp; then
		echo "Deleting original version of $file..."
		rm "$file"
	fi
done

convert -strip -interlace Plane -sampling-factor 4:2:0 -define jpeg:dct-method=float -quality 70% bead-hero.jpg bead-hero-2.jpg
