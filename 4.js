// Replying to request

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
  path: '/error',
  handler(request, reply) {
    reply(Boom.notFound())
  }
})

server.route({
  method: 'GET',
  path: '/read-file',
  handler(request, reply) {
    reply(require('fs').createReadStream(__filename))
  }
})

server.route({
  method: 'GET',
  path: '/helloworld',
  handler(request, reply) {
    reply({ hello: "world"})
  }
})


server.start(() => {})
