
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';




function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/createuser' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;