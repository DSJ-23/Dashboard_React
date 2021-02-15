import './App.css';
import World from './components/world';
import Error from './components/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountContext } from './components/CountContext';
import { useContext, useState } from 'react';

function App() {

  let count = useContext(CountContext);
  let [value, setValue] = useState(count);

  return (
    <div className="App App-header">
      <Router>
        <div class="top">
          <CountContext.Provider value={{value, setValue}}>
            <Switch>
              <Route path="/hello" exact component={World}></Route>
              <Route path="*" component={Error}></Route>
            </Switch>
          </CountContext.Provider>
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


