import axios from "axios";

const URL='http://localhost:9000';

export const addTask=async function(data){
    try{
        return await axios.post(`${URL}/add`,data)
    }
    catch(error){
        console.log('Error while calling add Task Api', error);
    }
}
export const getTasks=async function(){
    try{
        return await axios.get(`${URL}/all`);
    }
    catch(error){
            console.log('error while calling',error); 
    }

}
export const getTask=async function(id){
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(error){
        console.log('Error while calling getTask api',error)
    }
}
export const editTask=async function(user,id){
    try{
        return axios.put(`${URL}/${id}`,user);
    }
    catch(error){
        console.log('error while calling editTask api',error)
    }
}
export const deleteTask=async function(id){
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log('error while calling deleteTask api',error);
    }
}