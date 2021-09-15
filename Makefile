default: build run clean

dev: build run-dev clean

build:
	docker-compose build --build-arg NPM_TOKEN=${NPM_TOKEN}

run:
	docker-compose up

run-dev:
	docker-compose run --service-ports --entrypoint="npm run dev" -e NPM_TOKEN=${NPM_TOKEN} web

clean:
	docker-compose down