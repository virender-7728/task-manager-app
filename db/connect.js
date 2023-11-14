const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Viren123:merahai@project-1.srnx0di.mongodb.net/03-task-manager?retryWrites=true&w=majority'

const connectDB = (url)=>{
    return mongoose.connect(connectionString,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })

}

module.exports = connectDB