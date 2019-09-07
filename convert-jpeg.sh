for file in *
do
	echo "Converting $file to 1400x progressive jpeg..."
	convert -strip -interlace Plane -gaussian-blur 0.05 -resize 1400x -quality 85 "$file" "$file"_1400xp.jpg
	echo "Converting $file to 550x progressive jpeg..."
	convert -strip -interlace Plane -gaussian-blur 0.05 -resize x550 -quality 85 "$file" "$file"_x550p.jpg
done
