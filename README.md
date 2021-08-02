# Fruit API challenge

## Installation with docker

Run `docker-compose run app bash -c "npm ci"` to build the docker container and install the npm dependecies.

Run `docker-compose up` and go to http://localhost:8080 to see the app running.

## Installation without docker

Change to the folder `apps/app` and run:

```
npm ci
npm run serve & npm run api
```
