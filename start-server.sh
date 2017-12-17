export HUGO_VERSION=0.72.0 && \
docker run --rm -it \
--volume="$PWD:/src" \
-p 1313:1313 \
--name hugo \
klakegg/hugo:"$HUGO_VERSION" \
server -w --disableFastRender