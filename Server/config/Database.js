const mongoose=require("mongoose");
mongoose.set('strictQuery', true)
const Databaseconnection=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser : true}).then(
            console.log("DbConnect")
        )
    } catch (error) {
        console.log(error);
    }
}

module.exports=Databaseconnection;