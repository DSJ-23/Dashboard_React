import './App.css';
import World from './components/world';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <World></World>
    </div>
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

