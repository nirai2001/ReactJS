import { useContext } from 'react';
import logo from '../assets/logo.jpg'; 
import Button from '../UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { useSelector } from 'react-redux';
export default function Header(){
    const items = useSelector(state => state.items)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;   
    }, 0)

    function handleShowCart(){
        userProgressCtx.showCart();
    }
    const total = localStorage.getItem("total")
    return (
        <header id='main-header'>
            <div id = "title">
                <img src= {logo} alt='store flipzone' />
                <h1>FlipZone</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}