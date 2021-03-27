import NavBar from './components/NavBar';
import Search from './components/Search';
import Saved from './components/Saved';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><Search /></Route>
        <Route path="/saved"><Saved /></Route>
      </Switch>
    </Router>
  );
}

export default App;
