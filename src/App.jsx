import { useState } from 'react'

import './App.css'
import './popup'
import Popup from './popup';
import Sample from './table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  //Auto refresh
  const [ref, setRef] = useState(false)

  // const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const [tempData, setTempData] = useState({
    // name: null,
    // emailId: null,
    // phoneno: null,
    // location: null,
  })

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    // console.log(rowData)

   if(rowData){ setTempData(rowData);
   } else { setTempData(
    {
      name: null,
      emailId: null,
      phoneno: null,
      location: null,
    }
   )

   }
    setShow(true)
  };



  return (
    <>
      <Container fluid className='p-4'>
        <Popup popShow={show} popClose={handleClose} fieldData={tempData} setFieldData={setTempData} autoRef={ref} setAutoRef={setRef} />
        <Sample boxClick={handleShow} autoRef={ref} delete={setRef}  />
      </Container>
    </>
  )
}

export default App;
