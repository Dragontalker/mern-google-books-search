import NavBar from './components/NavBar';
import Search from './components/Search';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Search} />
    </div>
  );
}

export default App;
