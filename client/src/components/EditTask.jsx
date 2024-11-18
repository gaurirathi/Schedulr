import { useState,useEffect } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography ,styled,Button} from "@mui/material";
import { editTask ,getTask } from "../service/api";
import { useNavigate,useParams } from "react-router-dom";

const Container= styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top: 20px
}
`
const defaultValue={
    task:'',
    ftime:'',
    ttime:'',
    date:'',
}



const EditTask=function(){

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const {id}=useParams();

    useEffect(function(){
        loadTaskDetails();
    },[])

    const loadTaskDetails=async function(){
        const response= await getTask(id);
        setUser({
            task: response.data[0].task || '',
            ftime: response.data[0].ftime || '',
            ttime: response.data[0].ttime || '',
            date: response.data[0].date || ''
          });
    }

    const onvalueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const editTaskDetails = async () => {
        try {
            await editTask(user,id); 
            navigate('/'); 
        } catch (error) {
            console.error('Failed to add task', error);
        }
    };
    
    return(
        <Container>
        <Typography variant="h4"> Edit Task</Typography>
            <FormControl>
                <InputLabel>Task Name</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="task" value={user.task} />
            </FormControl>
            <FormControl>
                <InputLabel>From Time</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="ftime" value={user.ftime} />
            </FormControl>
            <FormControl>
                <InputLabel>To Time</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="ttime" value={user.ttime} />
            </FormControl>
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="date" value={user.date} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={editTaskDetails}>Edit Task</Button>
            </FormControl>
        </Container>
    )
}
export default EditTask;