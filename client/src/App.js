import fetchData from './utils/api';
import React, {useState, useEffect } from 'react';

function App() {
  
  useEffect(() => {
    fetchData("javascript", 40).then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="container">
      <h1>Book Search Application</h1>
      <form>
        <div className="form-group">
          <input 
            type="text" 
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
