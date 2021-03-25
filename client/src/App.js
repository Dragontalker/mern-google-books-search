import axios from 'axios';

function App() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="input-control" 
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
