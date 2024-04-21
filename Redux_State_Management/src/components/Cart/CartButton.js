import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const noOfItems = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
