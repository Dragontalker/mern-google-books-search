import fetchData from '../utils/api';
import { useState } from 'react';
import Card from './Card';

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
        setResult(data);
      })
    }
  
    return (
        <div>
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
            <br />
            <div className="container">
                {result.map(book => {
                    return (
                        <Card 
                            title={book.volumeInfo.title}
                            description={book.volumeInfo.description}
                            authors={book.volumeInfo.authors}
                            imageLink={book.volumeInfo.imageLinks.thumbnail}
                            selfLink={book.accessInfo.webReaderLink}
                        />
                    )
                })}
            </div>

        </div>
    );
  }
  
  export default Search
;
  