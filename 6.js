// server static files

'use strict'
const Hapi = require('hapi')
const Path = require('path')
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

server.register(require('inert'), () => {

  server.route({
    method: 'GET',
    path: '/{params*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'bootstrap')
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/picture.jpg',
    handler: {
      file: Path.join(__dirname, 'public/picture.jpg')
    }
  })

  server.route({
    method: 'GET',
    path: '/picture1.jpg',
    handler(request, reply) {
      var path = Path.join(__dirname, 'public/picture1.jpg')
      reply.file(path)
    }
  })

  server.start(() => console.log(`Started at: ${server.info.uri}`))
})
