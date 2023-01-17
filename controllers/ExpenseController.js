const asyncHander = require('express-async-handler')
const ExpenseModel = require('../models/ExpenseModel')






// ==================Get API======================
const getAllExpenses = asyncHander( async(req,res)=>{
    const AllExpenses = await ExpenseModel.find({})
    res.status(200).json(AllExpenses)
})


const CreateExpense = asyncHander( async(req,res)=>{
    const amount = req.body.amount
    const expenseType = req.body.expenseType
    const paymantMethod = req.body.paymantMethod
    console.log('hit hoa')
    console.log(req.body)

    if(amount==='' || expenseType==='' || paymantMethod===''  ){
        res.status(404)
        console.log('if chala')

        throw new Error ('Please Add ALL Field')
     }else{
        console.log('ss')
        const Expense = await ExpenseModel.create({amount, expenseType,paymantMethod})
       res.status(200).json(Expense)
       console.log('else chala')

     }
})










module.exports = {getAllExpenses,CreateExpense}