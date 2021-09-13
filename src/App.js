import logo from './logo.svg';
import './App.css';
import Accueil from './accueil/Accueil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Accueil/>
     <Switch>
          <Route path="/">
            <Accueil />
          </Route>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App;
