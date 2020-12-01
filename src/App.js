import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchOpration from './component/searchOperation';
import SearchwithClass from './component/searchwithClass';
import Eminds from './component/emindsComp';
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact component ={SearchOpration}/>
         <Route path='/class' exact component ={SearchwithClass}/>
         <Route path='/eminds' exact component ={Eminds}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
