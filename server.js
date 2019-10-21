const mongoose = require('mongoose')
require('dotenv').config()

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
    console.log('Connection successful!')
  })

const port = process.env.PORT || 3000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port: ${port}...`)
})
