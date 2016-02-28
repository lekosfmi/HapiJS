// Extending the request with lifecycle events

'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: '8000'
})

// When request has been received before it is passed through the router
server.ext('onRequest', (request, reply) => {
  console.log('onRequest')
  reply.continue()
})

// After it has been passed throught the router, onPreAuth runs before authentication
server.ext('onPreAuth', (request, reply) => {
  console.log('onPreAuth')
  reply.continue()
})

// onPostAuth runs after authentication
server.ext('onPostAuth', (request, reply) => {
  console.log('onPostAuth')
  reply.continue()
})

// Runs validation
server.ext('onPreHandler', (request, reply) => {
  console.log('onPreHandler')
  reply.continue()
})

// Runs the route itself
server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    console.log('handler')
    reply('hello world')
  }
})

// Runs following the route is summoned
server.ext('onPostHandler', (request, reply) => {
  console.log('onPostHandler')
  reply.continue()
})

// Send the response to the client
server.ext('onPreResponse', (request, reply) => {
  console.log('onPreResponse')
  reply.continue()
})

server.start(() => {} )
