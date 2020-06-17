.DEFAULT_GOAL   := help
HUGO_VERSION	= 0.72.0
HUGO_IMAGE 		= klakegg/hugo

.PHONY: help
help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: start-server
start-server: 
	docker run --rm -it \
		--volume="$(PWD):/src" \
		-p 1313:1313 \
		--name hugo \
		$(HUGO_IMAGE):$(HUGO_VERSION) \
		server -w --disableFastRender

.PHONY: build
build: 
	docker run --rm -it \
		--volume="$(PWD):/src" \
		$(HUGO_IMAGE):$(HUGO_VERSION)

.PHONY: terminal
terminal: 
	docker exec -ti hugo /bin/sh
