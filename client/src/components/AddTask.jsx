import { useState } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography ,styled,Button} from "@mui/material";
import { addTask } from "../service/api";
import { useNavigate } from "react-router-dom";

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



const AddTask=function(){

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();

    const onvalueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const addTaskDetails = async () => {
        try {
            await addTask(user);
            navigate('/');
        } catch (error) {
            console.error('Failed to add task', error);
        }
    };
    return(
        <Container>
        <Typography variant="h4"> Add Task</Typography>
            <FormControl>
                <InputLabel>Task Name</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="task" />
            </FormControl>
            <FormControl>
                <InputLabel>From Time</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="ftime" />
            </FormControl>
            <FormControl>
                <InputLabel>To Time</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="ttime" />
            </FormControl>
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e)=> onvalueChange(e)} name="date" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={addTaskDetails}>Add Task</Button>
            </FormControl>
        </Container>
    )
}
export default AddTask;