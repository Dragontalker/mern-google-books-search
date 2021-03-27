import fetchData from '../utils/api';
import { useState } from 'react';
import SearchCard from './SearchCard';

const Search = () => {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    
    const handleChange = (event) => {
      const bookName = event.target.value;
      setBook(bookName);
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(book, 10)
            .then(res => {
                const data = res.data.items;
                setResult(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
  
    return (
        <div>
            <div className="container">
                <h1>Find the book you love!</h1>
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
                <button type="submit" className="btn btn-md btn-danger">Search Google Books</button>
                </form>
            </div>
            <br />
            <div className="container">
                {result.map(book => {
                    return (
                        <SearchCard 
                            key={book.id}
                            title={book.volumeInfo.title}
                            description={book.volumeInfo.description}
                            authors={book.volumeInfo.authors}
                            imageLink={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail}
                            selfLink={book.accessInfo.webReaderLink}
                        />
                    )
                })}
            </div>

        </div>
    );
}
  
export default Search;
  