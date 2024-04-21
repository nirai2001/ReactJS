import Header from "./Components/Header.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx"
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/CheckOut.jsx";
import Items from "./Components/Items.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <Header />
      <Items />
      <Cart />
      <Checkout />
    </UserProgressContextProvider>
  );
}

export default App;
