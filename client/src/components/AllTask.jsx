import { useEffect, useState } from "react";
import {  Button, Table, TableBody ,TableCell, TableHead, TableRow, styled } from "@mui/material";
import { getTasks,deleteTask } from "../service/api";
import { Link } from "react-router-dom";


const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;

`
const Thead=styled(TableRow)`
    background:#000000;
    & > th{
        color:#fff;
        font-size:20px;
    }
    
`
const Tbody=styled(TableRow)`
    & > td{
        font-size:20px;
    }
`

const AllTask=function(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getAllTasks();
    },[]);

    const getAllTasks=async function(){
       let response= await getTasks();
       if (response && response.data) {
        setUsers(response.data); // Ensure response.data exists
    } else {
        console.error("API returned no data");
    }
    }
    const deleteUserDetails=async (id)=> {
        await deleteTask(id);
        getAllTasks();
    }

    return(
        <StyledTable>
            <TableHead>
            <Thead>
                <TableCell>Task</TableCell>
                <TableCell>from Time</TableCell>
                <TableCell>To Time</TableCell>
                <TableCell>Date</TableCell>
                <TableCell></TableCell>
            </Thead>
            </TableHead>
            <TableBody>
            {users.length > 0 ? (
                    users.map((user, index) => (
                        <Tbody key={user._id}>
                            <TableCell>{user.task}</TableCell>
                            <TableCell>{user.ftime}</TableCell>
                            <TableCell>{user.ttime}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{ marginRight: '10px' }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }} onClick={()=> deleteUserDetails(user._id)}>Done</Button>

                            </TableCell>
                        </Tbody>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={4} align="center">
                            No tasks available
                        </TableCell>
                    </TableRow>
                )}
            </TableBody> 
        </StyledTable>
    )
}
export default AllTask;