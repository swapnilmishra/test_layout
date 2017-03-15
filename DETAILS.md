## How to run

```
npm install // installs dependencies
npm start // runs local webpack dev server
```

webpack-dev-middleware is used to run local server with hot reloading of assets.

Running ```npm run build:prod``` outputs prduction ready bundlejs.
Dev build uses dev.js and production build prod.js configs.

## Note

Webpack aliases have been used to simpilfy path issues and rembering them.
e.g If you see ```import ProductListing from "containers/ProductListing";```
Here __containers__ corresponds to the alias defined in ```dev.js``` or ```prod.js```.
This is done to avoid rememering paths and simplify the workflow.

## Tech stack

* ReactJS - for view
* Webpack,Babel - for building and compiling JSX,ES6
* Webpack dev and prod build with different configs

