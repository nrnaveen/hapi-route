'use strict';

class BaseRoutes {

	constructor(server){ this.server = server; }

	get(path = '/', handler, options = []){ this.handle(path, handler, 'GET', options); }

	post(path = '/', handler, options = []){ this.handle(path, handler, 'POST', options); }

	put(path = '/', handler, options = []){ this.handle(path, handler, 'PUT', options); }

	delete(path = '/', handler, options = []){ this.handle(path, handler, 'DELETE', options); }

	handle(path = '/', handler, method = 'GET', options = []){
		this.server.route({
			method: method,
			path: path,
			handler: handler,
			options: options
		});
	}
};

module.exports = BaseRoutes;