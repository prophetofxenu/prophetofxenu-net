{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.ffmpeg
  ];

  # https://devenv.sh/scripts/
  scripts.convertImages.exec = ''
    images=$(find images -name '*.png' -o -name '*.jpg')

    for img in $images
    do
      webp_filename=$(echo "$img" | sed -E -e 's/\.png|\.jpg|\.jpeg//').webp
      if [[ -f $webp_filename ]]
      then
          echo "Skipping $webp_filename as it already exists"
      else
          ffmpeg -i $img -c:v libwebp -quality 80 $webp_filename
      fi
    done
  '';

  # See full reference at https://devenv.sh/reference/options/
}
