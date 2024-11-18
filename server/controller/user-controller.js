import User from "../schema/user-schema.js";
export const addTask = async function(req,res){
    const userData = req.body;
    const newUser=new User(userData);
    try{
        await newUser.save();
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(409).json({message: error.message})
    }
}

export const getTasks=async function(req,res){
    try{
       const users=await User.find({});
       res.status(200).json(users);
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
export const getTask=async function(req,res){
    try{
        const users=await User.find({_id:req.params.id});
        res.status(200).json(users);
     }
     catch(error){
         res.status(404).json({message:error.message})
     }
}
export const editTask=async function(req,res) {
    let user=req.body;
    const editTask=new User(user);
    try{
       await User.updateOne({_id:req.params.id},editTask);
       response.status(201).json(editTask);
    }
    catch(error){
        res.status(409).json({message:error.message})
    }
}
export const deleteTask=async function(req,res){
    try{
        await User.deleteOne({_id:req.params.id});
        res.status(200).json({message:'user deleted successfully'})
    }
    catch(error){
        response.status(409).json({message:error.message})
    } 
}
