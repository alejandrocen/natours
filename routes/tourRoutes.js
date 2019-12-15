const express = require('express')
const tourController = require('./../controllers/tourController')

const router = express.Router()

router.get('/top', tourController.aliasTopTours, tourController.getAllTours)
router.get('/stats', tourController.getTourStats)
router.get('/monthly-plan/:year', tourController.getMonthlyPlan)

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour)

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router
