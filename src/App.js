import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/Shop-Context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/cart" component={Cart} />
          </Switch>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
