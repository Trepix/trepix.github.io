export JEKYLL_VERSION=3.8 && \
docker run --rm -it \
--volume="$PWD:/srv/jekyll" \
-p 4000:4000 \
-e JEKYLL_ENV='production' \
jekyll/jekyll:$JEKYLL_VERSION \
jekyll serve --watch
