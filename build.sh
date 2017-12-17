export HUGO_VERSION=0.72.0 && \
docker run --rm -it \
--volume="$PWD:/src" \
klakegg/hugo:"$HUGO_VERSION" \