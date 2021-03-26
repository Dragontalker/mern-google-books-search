import fetchData from './utils/api';
import { useState } from 'react';

const App = () => {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  
  const handleChange = (event) => {
    const bookName = event.target.value;
    setBook(bookName);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(book, 40).then(res => {
      setResult(res.data.items);
    })
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
      {JSON.stringify(result)}
    </div>
  );
}

export default App;
