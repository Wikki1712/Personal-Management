// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popup(popParameter) {

  console.log(popParameter.fieldData, "###");

  const updateData = () => {
    
fetch(`https://67d7ed219d5e3a10152c9bec.mockapi.io/user/user/${popParameter.fieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(popParameter.fieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {

  popParameter.setAutoRef(!popParameter.autoRef)
  alert("Sucessfully Changed !")

  console.log(task)
  // Do something with updated task
}).catch(error => {
  console.log(error)
  // handle error
});
popParameter.popClose();
  }

// const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


const createUser = () => {
    
  fetch('https://67d7ed219d5e3a10152c9bec.mockapi.io/user/user', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(popParameter.fieldData)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {

    console.log(task)
    // do something with the new task
    alert("New user added successfully !");
   popParameter.setAutoRef(!popParameter.autoRef)
  }).catch(error => {
    console.log(error)
    // handle error
  })

  popParameter.popClose();

}

    return(       

        <>
      {/* <Button variant="primary m-3" onClick={handleShow} >
        Launch demo modal
      </Button> */}


      <Modal show={popParameter.popShow} onHide={popParameter.popClose}>
        <Modal.Header closeButton>

          {popParameter.fieldData.id ? 
          <Modal.Title>Edit details ✍🏻</Modal.Title> :
          <Modal.Title>Create details 👤</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User name"
                autoFocus
                defaultValue={popParameter.fieldData.name}
                onChange={(e)=>popParameter.setFieldData({...popParameter.fieldData, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={popParameter.fieldData.emailId}
                onChange={(e)=>popParameter.setFieldData({...popParameter.fieldData, emailId: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone no</Form.Label>
              <Form.Control
                type="text"
                placeholder="+91-000-000-0000"
                autoFocus
                defaultValue={popParameter.fieldData.phoneno}
                onChange={(e)=>popParameter.setFieldData({...popParameter.fieldData, phoneno: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the place"
                autoFocus
                defaultValue={popParameter.fieldData.location}
                onChange={(e)=>popParameter.setFieldData({...popParameter.fieldData, location: e.target.value})}
              />
            </Form.Group>
            

          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={popParameter.popClose}>
            Close
          </Button>

          {popParameter.fieldData.id ?
          <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :
          <Button variant="success" onClick={createUser}>
            Create
          </Button> }
        </Modal.Footer>
      </Modal>
    </>

    )
}

export default Popup;