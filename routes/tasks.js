const express = require('express')
const router = express.Router()

const {getalltasks,createtask,gettask,updatetask,deletetask} = require('../controller/tasks')

router.route('/').get(getalltasks).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

module.exports = router