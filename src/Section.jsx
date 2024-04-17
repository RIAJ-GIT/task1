import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { json } from 'react-router-dom';
function Section() {
    const [data1,setdata1]= useState({
        name:"",
        email:'',
        password:''

    })
    const [data,setdata]=useState([]);
    const getdata =(event)=>{
const {value,name} =event.target;
console.log(value,name);


setdata1(() => {
  console.log(data1);
    return {
      ...data1,
      [name]:value
      
    }
})

}
const adddata=(event)=>{
  event.preventDefault();
  const {name, email,password}=data1;
  if(name===""){
alert('name is empty')
  } else if(email==='') {
   alert('email is empty')
  }else if (!email.includes("@")) {
    alert('enter correct email')
  } else if (password===""){
    alert('password is empty')
  }else if(password.length<4){
    alert('password is too short')
  }else{
    alert('successfull')
    localStorage.setItem('user',JSON.stringify(...data,data1));
console.log(data)
  }

  
}
  return (
<>
<div className="container">
    <section>
        <div className="left_data">
            <h1>Signup 😇</h1>
    <Form>
    
      <Form.Group as={Row} className="mb-3 "  controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type='plaintext'name='name' onChange={getdata} placeholder='Riaj@gmail.com' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 "  controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='plaintext' name='email'onChange={getdata} placeholder='Riaj@gmail.com' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3"controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password"name='password'  onChange={getdata} placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="success" className='col-lg-3' onClick={adddata} type='submit'>submit</Button>{' '}
    </Form>
    
        </div>
        
    </section>
    </div></>
  )
}

export default Section