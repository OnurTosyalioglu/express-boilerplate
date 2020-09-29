# Express Boilerplate

## Spec

- Flexible
- Plug and play
- Preconfigured databases
- Layered
- Modern JS
- Generator Cli

## Packages

### Server 

* [PM2](https://www.npmjs.com/package/pm2)
* [Socket.io](https://www.npmjs.com/package/socket.io)

### Databases

* [Mysql](https://www.npmjs.com/package/mysql2)
* [MongoDB](https://www.npmjs.com/package/mongoose)
* [Redis](https://www.npmjs.com/package/redis)
* [Memcached](https://www.npmjs.com/package/memcached)
* [ElasticSearch](https://www.npmjs.com/package/@elastic/elasticsearch)
* [Kafka](https://www.npmjs.com/package/kafkajs)

### Middleware

* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
* [Cors](https://www.npmjs.com/package/cors)
* [BodyParser](https://www.npmjs.com/package/body-parser)

### Log

* [Winston](https://www.npmjs.com/package/winston)

### 3rd Party Services

* [AWS](https://www.npmjs.com/package/aws-sdk)
* [Firebase](https://www.npmjs.com/package/firebase-admin)
* [NodeMailer](https://www.npmjs.com/package/nodemailer)

- DEV

### Server
* [Nodemon](https://www.npmjs.com/package/nodemon)

### Transpiler & Linter & Formatting & File 
* [Babel](https://www.npmjs.com/package/@babel/core)
* [Prettier](https://www.npmjs.com/package/prettier)
* [Eslint](https://www.npmjs.com/package/eslint)
* [Rimraf](https://www.npmjs.com/package/rimraf)

### Test

* [jest](https://www.npmjs.com/package/jest)
* [supertest](https://www.npmjs.com/package/supertest)
* [faker](https://www.npmjs.com/package/faker)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Core

* application
    * usecase
	  * service
* domain
    * entity
    * value objects
	  * repository
* infrastructure
    * source
	  * model
	  * repository (concrete)

## Build, CI/CD

- Clean
yarn clean

- Build
yarn build

- Start (hot reload/dev)
yarn start

- Serve
yarn serve

- Test
yarn test

- Test (hot reload/dev)
yarn watch

## Gitlab CI/CD

- install
- test
- build
- deploy

## Generator Cli

- service
- usecase
- entity
- valueobject
- model
- repo
- repo:con
