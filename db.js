import mongoose from "mongoose";

const conn = ()=>{
    mongoose.set('strictQuery',false)
    mongoose.connect(process.env.DB_URI,{
        dbName:"lenslight",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Conntected to the DB succesfully")
    }).catch((err)=>{
        console.log(`Db connection ${err}`)
    })
}

export default conn