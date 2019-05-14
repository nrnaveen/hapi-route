# Hapi Route
Node Hapi plugin for registering routes

## What
Hapi Route allows you to put all your routing logic in simple way.

## How
### server.js
```javascript
const server = new Hapi.server();

const Router = require('hapi-route');
var router = new Router(server);

router.get('/', (request, h) => {
	return "Hello World!";
}, options);


router.post('/', (request, h) => {
	return "Hello World!";
}, options);
```