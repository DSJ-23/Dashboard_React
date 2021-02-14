import './App.css';
import World from './components/world';
import Error from './components/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/hello" exact component={World}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;


// <Router>
//       <div className="App">
//         <Route path="/" exact render={() => {
//           <div>
//             <World></World>
//           </div>
//          }}> </Route>
//       </div>
//     </Router> 

