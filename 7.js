// View engines

'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

server.register(require('vision'), () => {

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    layout: true,
    path: 'views'
  })

  server.route({
    method: 'GET',
    path: '/{name?}',
    handler(request, reply) {
      reply.view('home', { name: request.params.name || 'World' })
    }
  })

  server.start(() => console.log(`Started at: ${server.info.uri}`))
})
