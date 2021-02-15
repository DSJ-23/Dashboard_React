import './App.css';
import World from './components/world';
import Error from './components/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CountContext} from './components/CountContext';

function App() {

  let count = 2;

  return (
    <div className="App App-header">
      <Router>
        <div class="top">
          <Switch>
            <CountContext.Provider value={count}>
              <Route path="/hello" exact component={World}></Route>
              <Route path="*" component={Error}></Route>
            </CountContext.Provider>
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;

// <Route path="/hello" exact component={World}></Route>
// <Route path="*" component={Error}></Route>

// <CountContext.Provider value={count}>
// <Route path="/hello" exact component={World}></Route>
// <Route path="*" component={Error}></Route>
// </CountContext.Provider>


