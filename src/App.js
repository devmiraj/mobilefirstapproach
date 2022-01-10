import logo from './logo.svg';
import './App.css';
import { Header } from './Inc/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Cart from './Pages/CartPage/Cart';
import Account from './Pages/Account/Account';
function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Header  />
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
        </Routes>
        <Routes>
          <Route path="/myaccount" element={ <Account/> }></Route>
        </Routes>
        <Routes>
          <Route path="/cart" element={ <Cart/> }></Route>
        </Routes>
        <Routes>
          {/* <Route path="/cart" element={ <Cart/> }></Route> */}
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
