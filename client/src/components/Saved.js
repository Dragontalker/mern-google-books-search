import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCard from './SearchCard';

const Search = () => {

    const [bookCount, setBookCount] = useState(0);
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        axios.get('/api/books').then(res => {
            const data = res.data;
            setBookCount(data.length);
            setResult(data);
        })
    }, [bookCount])
  
    return (
        <div>
            <h2>Your Personal Library</h2>
            <div className="container">
                {result.map(book => {
                    return (
                        <SearchCard 
                            key={book._id}
                            title={book.title}
                            description={book.description}
                            authors={book.authors}
                            imageLink={book.imageLink}
                            selfLink={book.selfLink}
                        />
                    )
                })}
            </div>

        </div>
    );
}
  
export default Search;