.DEFAULT_GOAL   := help

.PHONY: help
help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build 
build: ## Build the site
	docker run --rm -it \
		--volume="$(PWD):/src" \
		klakegg/hugo:0.72.0

.PHONY: build-assets
build-assets: ## Build the assets
	docker run -ti --rm \
		--volume="$(PWD):/src" \
		-v /src/node_modules \
		--name webpack \
		trepix/web-assets-builder:latest \
		build

.PHONY: deploy 
deploy: ## Build the site and deploy it on github
	./scripts/deploy.sh

.PHONY: start-server 
start-server: ## Start hugo server
	docker-compose -f infrastructure/docker-compose.yml up
