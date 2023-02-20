import Cart from "./components/cart/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import {useSelector} from 'react-redux';

function App() {
  const showCart = useSelector(state => state.ui.isCartShown);
  return (
    <div className="App">
      <Navbar />
      {showCart && <Cart />}
      {!showCart && <Items />}
      
    </div>
  );
}

export default App;
