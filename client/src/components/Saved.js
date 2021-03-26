import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Search = () => {

    const [bookCount, setBookCount] = useState(0);
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        axios.get('/api').then(res => {
            setResult(res);
            setBookCount(res.length);
        })
    }, [bookCount])
  
    return (
        <div>
            <h2>Your Personal Library</h2>
            <div className="container">
                {result.map(book => {
                    return (
                        <Card 
                            key={book._id}
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
  
export default Search;