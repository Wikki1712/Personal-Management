import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Sample(bcd) {

  const [tableData, setTableData] = useState(null);

  useEffect(() => {

    //----------Edit--------------------

    fetch('https://67d7ed219d5e3a10152c9bec.mockapi.io/user/user', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {

      setTableData(tasks.reverse());

      // Do something with the list of tasks
    }).catch(error => {

      console.log(error)

      // handle error
    })

  }, [bcd.autoRef])

  const deleteUser = (id) => {


    //------------Delete--------------

    fetch(`https://67d7ed219d5e3a10152c9bec.mockapi.io/user/user/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      console.log(task)
      // Do something with deleted task
      alert("Deleted Sucessfully !");
      bcd.delete(!bcd.autoRef)
    }).catch(error => {
      // handle error
      console.log(error)
    })

    //------------------------------------

  };

    //---------Create--------------------

  

  return (

    <>

    <Button variant={"warning"} className='fs-5 mb-4' onClick={() => bcd.boxClick()} > Create New ➕  </Button>
    
    <Table striped bordered hover variant="dark">
      <thead className='text-center'>
        <tr className='fs-3'>
          <th className='p-3 bg-secondary'>ID</th>
          <th className='p-3 bg-secondary'>Name</th>
          <th className='p-3 bg-secondary'>Email</th>
          <th className='p-3 bg-secondary'>Phone</th>
          <th className='p-3 bg-secondary'>Location</th>
          <th className='p-3 bg-secondary'>Action</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {tableData && tableData.map((item, out) => {
          return (
            <>

              <tr className='fs-5'>
                <td className='p-3'>{out + 1}</td>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.emailId}</td>
                <td className='p-3'>{item.phoneno}</td>
                <td className='p-3'>{item.location}</td>
                <td>
                  <Button variant="success" className='m-3' onClick={() => bcd.boxClick(item)} >Edit</Button>
                  <Button variant="danger" onClick={() => deleteUser(item.id)}>Delete</Button>
                </td>
              </tr>

            </>
          )
        })}

      </tbody>
    </Table>
    
    </>
  )
}


export default Sample;