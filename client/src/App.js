import NavBar from './components/NavBar';
import Search from './components/Search';
import Saved from './components/Saved';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Search} />
      <Route path='/saved' component={Saved} />
    </div>
  );
}

export default App;
