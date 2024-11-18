import mongoose from "mongoose"



const Connection=async function(username,password){
    const URL=`mongodb://${username}:${password}@schedulr-shard-00-00.g0sn5.mongodb.net:27017,schedulr-shard-00-01.g0sn5.mongodb.net:27017,schedulr-shard-00-02.g0sn5.mongodb.net:27017/?ssl=true&replicaSet=atlas-mwrbks-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Schedulr`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('database connected successfully');
    }catch(error){
        console.log('error while printing the database',error);
    }
}
export default Connection;