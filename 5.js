// using the response object

'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    reply('Hello World')
      .code(418)
      .type('text/plain')
      .header('hello', 'world')
      .state('hello', 'world')
  }
})

server.start(() => {})
