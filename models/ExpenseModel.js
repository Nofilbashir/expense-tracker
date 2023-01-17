const mongoose = require('mongoose')

const ExpenseModel = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref: 'UserModel',
    },
    amount:{
        type:String,
        required: [true, 'Please add a amount value']
    },
    expenseType:{
        type:String,
        required: [true, 'Please add a expense type']
    },
    paymantMethod:{
        type:String,
        required: [true, 'Please add a Payment method']
    },


},{timestamps:true}
)


module.exports = mongoose.model('ExpenseModel', ExpenseModel)

