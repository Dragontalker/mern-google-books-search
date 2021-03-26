import fetchData from '../utils/api';
import { useState } from 'react';
import MOCK_DATA from '../utils/MOCK_DATA.json';

const Search = () => {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    
    const handleChange = (event) => {
      const bookName = event.target.value;
      setBook(bookName);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchData(book, 40).then(res => {
        const data = res.data.items;
        const result = data.map(book => {
            return {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors.join(", "),
                description: book.volumeInfo.description,
                selfLink: book.selfLink,
                imageLink: book.volumeInfo.imageLinks.thumbnail
            }
        })
        setResult(result);
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
        {JSON.stringify(MOCK_DATA)}
      </div>
    );
  }
  
  export default Search
;
  