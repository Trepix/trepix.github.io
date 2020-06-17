.DEFAULT_GOAL   := help
HUGO_VERSION	= 0.72.0
HUGO_IMAGE 		= klakegg/hugo


.PHONY: help
help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build 
build: ## Build the site locally
	docker run --rm -it \
		--volume="$(PWD):/src" \
		$(HUGO_IMAGE):$(HUGO_VERSION)

.PHONY: publish 
publish: ## Build the site and deploy it on github
	./scripts/publish.sh

.PHONY: start-server 
start-server: ## Start hugo server
	docker run --rm -it \
		--volume="$(PWD):/src" \
		-p 1313:1313 \
		--name hugo \
		$(HUGO_IMAGE):$(HUGO_VERSION) \
		server -w --disableFastRender

.PHONY: terminal 
terminal: ## Open shell inside server if docker is up
	docker exec -ti hugo /bin/sh


