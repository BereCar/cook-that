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
import Recette from './recette/Recette';
import Menu from './Menu'


function App() {
  return (
    <div className="App">
    <Router>
   
        <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/recettes/:id">
            <Recette />
          </Route>     
        </Router>
    <Menu/>
    </div>
  );
}

export default App;
