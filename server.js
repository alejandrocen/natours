const mongoose = require('mongoose')
require('dotenv').config()

process.on('uncaughtException', err => {
  // eslint-disable-next-line no-console
  console.error(`${err.name}: ${err.message}`)
  // eslint-disable-next-line no-console
  console.log('Uncaught exception, shutting down...')
  process.exit(1)
})

const app = require('./app')

const uri = process.env.DB_HOST

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection successful.')
  })

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port: ${port}.`)
})

process.on('unhandledRejection', err => {
  // eslint-disable-next-line no-console
  console.error(`${err.name}: ${err.message}`)
  // eslint-disable-next-line no-console
  console.log('Unhandled rejection, shutting down...')
  server.close(() => {
    process.exit(1)
  })
})
