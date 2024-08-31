import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Game from './Game3';
import Home from './Home';
function App() {
  return (
    <div>
      <Router>
        <Link to='/'></Link>
        <Link to='/game'></Link>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
