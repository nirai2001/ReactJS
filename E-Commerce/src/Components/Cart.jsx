import { useContext } from "react";

import Modal from "../UI/Modal";
import { curFormatter } from "../util/curFormatter";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

export default function Cart(){
    const items = useSelector(state => state.items);

    const userProgressCtx = useContext(UserProgressContext);
    const dispatch = useDispatch();
    const addItemHandler = (item) =>{
        dispatch({type:'ADD_ITEM',item: item});
    }
    const RemoveItemHandler = (id) =>{
        dispatch({type:'REMOVE_ITEM',id: id});
    }
    const cartTotal = items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    )
    function handleCloseCart(){
        userProgressCtx.hideCart();
    }

    function handleCheckout(){
        userProgressCtx.showCheckOut()
    }

    return (
        <Modal className="cart" 
        open={userProgressCtx.progress === 'cart'} 
        onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null }>
            <h2>YOUR CART</h2>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id} 
                    name= {item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onIncrease={() => addItemHandler(item)}
                    onDecrease={() => RemoveItemHandler(item.id)}/>
                ))}
            </ul>
            <p className="cart-total">{curFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {items.length > 0 && 
                (<Button onClick={handleCheckout}>Go to Checkout</Button>)}
            </p>
        </Modal>
    )
}