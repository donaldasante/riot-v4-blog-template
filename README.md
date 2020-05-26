# RIOT V4 Blog Template
This is a simple [riot] (https://riot.js.org/) v4 blog example application. It was created to showcase some of the useful features of Riot.js library.
It is also dev and production ready and a good starting point for creating a Riot SPA.

## Run locally

Download or clone this repo.

Install packages.

```bash
$ npm install
```

And then run the server using `webpack-dev-server` or any possible way you know

```bash
$ npm start
```

To create a dev test build

```bash
$ npm run build-dev
```

To create a production build

```bash
$ npm run build
```

To run production or dev build
 - Install [live-server] (https://www.npmjs.com/package/live-server)
 - Goto public folder (/public)
 - build dev or production packages
 - Run live-server
```bash
$ npm install -g live-server
$ cd public
$ npm run build or npm run build-dev
$ live-server --entry-file=index.html 
```

- Open [http://localhost:8080/](http://localhost:8080/)