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


function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/recettes/:id">
            <Recette />
          </Route>
    </div>
    </Router>
  );
}

export default App;
