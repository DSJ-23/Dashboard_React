import './App.css';
import World from './components/world';
import Error from './components/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App App-header">
      <Router>
        <div class="top">
          <Switch>
            <Route path="/hello" exact component={World}></Route>
            <Route path="*" component={Error}></Route>
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;


