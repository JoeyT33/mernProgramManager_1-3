// import logo from './logo.svg';
// import './App.css';
import {Router} from '@reach/router';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';



function App() {
  return (
    <Router>
    <CreateProduct path ="/api/products/create"></CreateProduct>
    <AllProducts path ="/"></AllProducts>
    <OneProduct path ="/api/products/:productid"></OneProduct>
    <EditProduct path ="/api/products/update/:productid"></EditProduct>
    </Router>
  );
}

export default App;
