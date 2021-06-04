import React from 'react';
import cats from '../sampleData';
import {Button, Modal, Col, Row, Form, Container, Image, Navbar, FormGroup, FormControl} from 'react-bootstrap';

import { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/style.css'


const App = () => {
  const [open, setOpen] = useState(false);
  const [textVal, setTextVal] = useState('');
  //const [modalShow, setModalShow] = useState(false);
  const [catList, setCatList] = useState([]);
  const [frontCat, setFrontCat] = useState(cats[0]);
  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  const submit = () => {
    const data = {name: textVal};
    axios.post('/catSearch', data)
      .then((info)=> {
        console.log(info)
       setFrontCat(info.data);
      })
      .catch((err) => { console.warn(err); });
    setTextVal('');
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submit();
    }
  };
  const getAllCats = () => {
    axios.get('/cats')
      .then(( cats )=> {
        console.log('data', cats.data)
        setFrontCat(cats.data[0]);
        setCatList(cats.data)}).then(() => {console.log('THIS IS cat DATA', catList);})
      .catch((err) => { console.warn(err); });
  };


  useEffect(() => {
    getAllCats()



   console.log('FRONT CAT', catList);
  }, []);
  return (
    <Container >
   <Navbar bg="primary" variant="dark" expand="md">
     <Navbar.Brand >Cats</Navbar.Brand>

   </Navbar>

      <form>
        <input  value={textVal} onChange={handleChange} onKeyDown={handleKeyPress} type='text' placeholder='enter name'></input>
        <button   onClick={submit} type='button'>Search</button>
      </form>
      <Row>
      {!catList.length ? null : <Col md={4}>
        {
          catList.map((element, index) => <div className='catsList' key={index}>
      <span> <Image src={element.thumbnailUrl} thumbnail onClick={() => {setFrontCat(element)
      //const views = element.viewCount + 1
      axios.post('/viewCounter', element )
      .then((data) => data)
      .catch((err) => console.warn(err));
      }} /> {element.name}</span>
          <div>{element.birthdate}</div>

          </div>)}

      </Col> }
      <Col md={8}>

        <div>
      <ul>
        <li><Image src={frontCat.thumbnailUrl} thumbnail /></li>
        <li>{frontCat.name}</li>
        <li>{frontCat.birthdate}</li>
        <li>Owner: {frontCat.ownerName}</li>
        <li>Number of views: {frontCat.viewCount} times</li>
      </ul>

      <Button variant="primary" onClick={() => setOpen(true)}>
        Launch demo modal
      </Button>
      <Button onClick={() => {
        axios.post('/removeCat', frontCat)
        .then((data) => data)
        .catch((err) => console.warn(err));
      }} >
        Delete
      </Button>

      </div>

      </Col>
      </Row>
  <Modal  show={open} onHide={() => setOpen(false)}  aria-labelledby="modal-label" >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h4  aria-labelledby="modal-label"> Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>

          </Modal.Footer>
        </Modal>
    </Container>
  );
};

export default App;