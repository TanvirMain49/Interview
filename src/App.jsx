import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [tableData, setTableData] = useState([]);

  // async await based function to fetch data from the JSON placeholder API 
  useEffect( ()=>{
    fetchData()
  }, [])

// async await based function to fetch data from the JSON placeholder API
 const fetchData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTableData(data)
 }

  return (
    <>
      <h1 className='text-3xl text-blue-500 mb-6'>Display the results from above in a MUI table that takes half of the screen</h1>
      <TableContainer className='md:max-w-[760px] max-w-[680px]' component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
        <TableCell align="center">UserId</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Complete</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map(data =>(
            <TableRow key={data.id}>
              <TableCell align="center">{data.userId}</TableCell>
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center">{data.title}</TableCell>
              <TableCell align="center">{data.completed ? '✅' : '❌'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  )
}

export default App
