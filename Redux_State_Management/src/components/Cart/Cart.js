import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const newItems = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {newItems.map((item) => {
          return(
            <CartItem
            key={item.id}
            item={{ title:item.name, quantity: item.quantity, total: item.totalPrice, price: item.price, id: item.id }}
           />
          )

        })}

      </ul>
    </Card>
  );
};

export default Cart;
