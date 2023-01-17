const express = require('express')
const router = express.Router()
const protectRoute = require('../middleWare/authMiddleWare')
const {getAllExpenses,CreateExpense} = require('../controllers/ExpenseController')

router.get('/',getAllExpenses)
router.post('/',CreateExpense)


module.exports = router