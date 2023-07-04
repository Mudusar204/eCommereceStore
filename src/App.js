import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './conponents/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import { useEffect } from 'react';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}>  </Route>
            <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
