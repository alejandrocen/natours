const User = require('./../models/userModel')
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

  const users = await features.query

  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  })
})

exports.getUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'Internal servel error'
  })
}

exports.createUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'Internal servel error'
  })
}

exports.updateUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'Internal servel error'
  })
}

exports.deleteUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'Internal servel error'
  })
}
