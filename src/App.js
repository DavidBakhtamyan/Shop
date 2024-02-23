/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { fetchProducts } from './store/slices/productsSlice/productsAPI';
import LoginWrapper from './Pages/LoginWrapper/LoginWrapper';
import HomeWrapper from './Pages/HomeWrapper/HomeWrapper';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginWrapper />} >
          <Route index element={<Login />} />
          <Route path='reg' element={<Registration />} />
        </Route>
        <Route path='/main' element={<HomeWrapper />}>
          <Route index element={<Home />}/>
          <Route path='shop'>
            <Route index element={<Shop />} />
            <Route path=':id' element={<SingleProduct />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
