const express = require('express')
const router = express.Router()
const {getContact, createContact, deleteContact, updateContact, getSingleContact} = require('../controllers/contact-controller')

router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').get(getSingleContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router