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
import Login from './auth/Login';
import Inscription from './auth/Inscription';


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
          <Route exact path="/login" component={Login}/>  
          <Route exact path="/inscription" component={Inscription}/>  
          <Menu/>     
        </Router>
      
   
    </div>
  );
}

export default App;
