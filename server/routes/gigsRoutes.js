const express = require('express');
const router = express.Router();

const {
  createGig,
  updateGig,
  deleteGig,
  getAllGigs,
  getSingleGig,
  getUserGigs,
} = require('../controllers/gigsController');
const { authenticateUser } = require('../middleware/authentication');

router.route('/create').post(authenticateUser, createGig);
router.route('/update/:id').patch(authenticateUser, updateGig);
router.route('/delete/:id').delete(authenticateUser, deleteGig);
router.route('/').get(getAllGigs);
router.route('/:id').get(getSingleGig);
router.route('/userGigs').get(authenticateUser, getUserGigs);

module.exports = router;
