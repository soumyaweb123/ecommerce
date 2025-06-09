import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCateogry from './Pages/ShopCateogry';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSign from './Pages/LoginSign';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assists/men_banner.webp';
import women_banner from './Components/Assists/women_ban.webp';
import kids_banner from './Components/Assists/kidss.jpg';
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCateogry banner={men_banner}category="men"/>}/>
      <Route path='/womens' element={<ShopCateogry banner={women_banner}category="women"/>}/>
      <Route path='/kids' element={<ShopCateogry banner={kids_banner}category="kid"/>}/>
<Route path="/product/:productId" element={<Product/>} >
      <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='login' element={<LoginSign/>}/>
</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
