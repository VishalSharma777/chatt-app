const mongoose = require('mongoose')

const connectDB = async()=>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
       
        
    })
    console.log(`mongoDb Connected ${conn.connection.host}`)
} catch (error) {
    console.log(`Error Message ${error.message}`);
    process.exit();
}
};

module.exports = connectDB;