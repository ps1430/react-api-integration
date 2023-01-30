import { useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './App.css';
import axios from 'axios';

function createData(PersonNo, PersonFullName, Title, Gender, Mobile) {
  return { PersonNo, PersonFullName, Title, Gender, Mobile };
}


function App() {
 
    
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://webapidev.aitalkx.com/chr/hrdirect/EmployeeProfile?userId=76e33a87-1e40-4767-9fc4-8107de4f6b2a&portalName=HR&personId=8393d114-f109-45ea-9fcc-ad63f1233264').then(response => {
      setData(response.data)
      console.log(response.data, 'profile data');
      
    })
  }, [])


 return (
  //   <div>
  //     <p>name:{data.PersonFullName}</p>
  //     <p>id:{data.PersonNo}</p>
  //     <p>Title:{data.Title}</p>

  //   </div>

  <Table sx={{ minWidth: 650, marginTop: 1}} stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow> 
            <TableCell align="right">PersonFullName</TableCell>
            <TableCell align="right">PersonNo&nbsp;</TableCell>
            <TableCell align="right">Title&nbsp;</TableCell>
            <TableCell align="right">Gender&nbsp;</TableCell>
            <TableCell align="right">Mobile&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
              
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell align="right">{data.PersonFullName}</TableCell>`
              <TableCell align="right">{data.PersonNo}</TableCell>
              <TableCell align="right">{data.Title}</TableCell>
              <TableCell align="right">{data.Email}</TableCell>
              <TableCell align="right">{data.Mobile}</TableCell>
            </TableRow>
            
        
        </TableBody>
      </Table>
  
  );

}
export default App;


