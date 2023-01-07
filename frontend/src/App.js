import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./components/Login";

import "./App.css"
import Signup from "./components/Signup";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/pokemons" element={<Pokemon/>} />
      </Routes>
    </Router>
  );
}

export default App;
