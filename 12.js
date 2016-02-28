// Managing state with cookies

'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

server.state('hello', {
    // control expiration (an hour from now)
    ttl: 60 * 60 * 1000,
    // turns on Http only flag
    isHttpOnly: true,
    encoding: 'iron',
    password: 'penguinspenguinspenguinspenguinspenguinspenguinspenguinspenguinspenguinspenguinspenguinspenguins'
})

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler(request, reply) {
      let hello = request.state.hello.name
      reply(`Cookies! ${hello}`)
        .state('hello', { name: 'Vanielle '})
    }
  }
})

server.start(() => console.log(`Started at: ${server.info.uri}`))
