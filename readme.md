# Modern full stack setup

### An opinionated template for setting up your own full stack on google functions and netlify

# running the app locally

first time steps

- ensure packages/entities/ormconfig.js has the proper database credentials

In the root project directory run

> `yarn`

> `yarn start`

You will see the GraphQL [api] server start and the web project [web] start. Follow the url outputted to see
your site live

# packages

## api

All server side logic is placed here and is deployed to google functions

- Apollo lambda
- Express

## web

All client side code is placed here and is deployed to netlify

- Gatsby
- React
- Emotion
- Apollo client

## entities

All shared data entities are placed and managed here to be shared with api and web

- Typeorm
- Postgres

# running the app in production

first time steps

- ensure `packages/entities/ormconfig.js` has the proper database credentials
- ensure your keyfile.json is placed in the root directory so the server can deployed to gcloud
- ensure your netlify project is set up [more]
