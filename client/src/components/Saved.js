import { useState, useEffect } from 'react';
import axios from 'axios';
import SavedCard from './SavedCard';

const Search = () => {

    const [result, setResult] = useState([]);
    
    useEffect(() => {
        axios.get('/api/books').then(res => {
            const data = res.data;
            setResult(data);
        })
    }, [])
  
    return (
        <div>
            <div className="container">
                <h1>Your Personal Library</h1>
            </div>
            <div className="container">
                {result.map(book => {
                    return (
                        <SavedCard 
                            key={book["_id"]}
                            id={book["_id"]}
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