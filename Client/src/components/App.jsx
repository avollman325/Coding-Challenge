import React from 'react';
import cats from '../sampleData'
import { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [textVal, setTextVal] = useState('');
  const [frontCat, setFrontCat] = useState(cats[0]);
  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  const submit = () => {
    const data = {name: textVal};
    // axios.post('/friends', data)
    //   .then((info)=> {
    //     setUsers(info.data);
    //   })
    //   .catch((err) => { console.warn(err); });
    setTextVal('');
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submit();
    }
  };
  useEffect(() => {

    console.log('FRONT CAT', frontCat);
  }, []);
  return (
    <div className='page-wrap'>
      <nav className="navbar navbar-default">
    <div className="container text-center">
        <div className="navbar-header">
            <a className="navbar-brand" >Title</a>
        </div>
    </div>
</nav>

      <form>
        <input className='center' value={textVal} onChange={handleChange} onKeyDown={handleKeyPress} type='text' placeholder='enter name'></input>
        <button className='btn-danger'  onClick={submit} type='button'>Search</button>
      </form>
      <div>
      {!cats ? null : <div className='col-md-4'>
        {
          cats.map((element, index) => <div className='catsList' key={index}>
<span><img className='img-thumbnail' src={element.thumbnailUrl}></img> {element.name}</span>
<div>{element.birthdate}</div>




          </div>)}

      </div> }
      <div className='col-md-4'>
      <ul>
        <li><img src={frontCat.thumbnailUrl}></img></li>
        <li>{frontCat.name}</li>
        <li>{frontCat.birthdate}</li>
        <li>Owner: {frontCat.ownerName}</li>
        <li>Number of views: {frontCat.viewCount} times</li>
      </ul>
      <div>
      <span> <button>Edit</button> <button>Delete</button></span>
      </div>


      </div>
      </div>
    </div>
  );
};

export default App;