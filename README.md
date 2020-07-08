# Teste innova tin

This project was generated using [Nx](https://nx.dev).
🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Installation
Run `npm install` to install the dependencies.

Run `npm install -g @nrwl/cli` to install the cli for monorepos.


## Run conveter
Run `nx build convert && node ./dist/apps/convert/main.js` to build and run the convert project.

Run `nx test convert` to run the tests from convert project.

Run `nx serve convert` to run the teste server for convert project.


## Run recreation-queue
Run `nx build recreation-queue && node ./dist/apps/recreation-queue/main.js` to build and run the recreation queue project.

Run `nx test recreation-queue` to run the tests from recreation queue project.

Run `nx serve recreation-queue` to run the teste server for recreation queue project.


## Run car crud: spa client and api 
Run `nx serve carcrud` to run the test server for spa client.

Run `nx serve api` to run the test server for api client.

Open in the browser: localhost:4200

### Obs: API router in http://localhost:4200/api/cars or http://localhost:3333/api/cars

## Run in prod
Run `nx build carcrud && npx http-server ./dist/apps/carcrud/` to build and run the spa client.

Run `nx build api && node ./dist/apps/api/main.js` to build and run the api.
