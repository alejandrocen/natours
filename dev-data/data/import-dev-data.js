const fs = require('fs')
const mongoose = require('mongoose')
require('dotenv').config()

const Tour = require('./../../models/tourModel')

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

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
)

const importData = async () => {
  try {
    await Tour.create(tours)
    // eslint-disable-next-line no-console
    console.log('Data successfully loaded!')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } finally {
    process.exit()
  }
}

const deleteData = async () => {
  try {
    await Tour.deleteMany()
    // eslint-disable-next-line no-console
    console.log('Data successfully deleted!')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } finally {
    process.exit()
  }
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
