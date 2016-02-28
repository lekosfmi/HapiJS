// Route parameters

'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

function handler(request, reply) {
  reply(request.params)
}

server.route({
  method: 'GET',
  path: '/{stuff*}',
  handler: handler
})

server.route({
  method: 'GET',
  path: '/users/{userId}/files',
  handler: handler
})



server.start(() => console.log(`Started at : ${server.info.uri}`))
