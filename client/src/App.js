import fetchData from './utils/api';
import React, {useState, useEffect } from 'react';

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  
  // useEffect(() => {
  //   fetchData("javascript", 40).then(res => {
  //     console.log(res);
  //   })
  // }, [])

  const handleChange = (event) => {
    const bookName = event.target.value;
    setBook(bookName);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);
  }

  return (
    <div className="container">
      <h1>Book Search Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            onChange={handleChange}
            className="form-control" 
            placeholder="Search for Books..."
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}

export default App;
