import {curFormatter} from '../util/curFormatter.js'
import Button from '../UI/Button.jsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PopUp from '../UI/PopUp.jsx';
export default function AvailableItem({item}){ 
    const dispatch = useDispatch();
    const [showPopUp, setShowPopUp] = useState(false);

    const handleAddItemToCart = (item) =>{
        setShowPopUp(true); 
        setTimeout(() => {
          setShowPopUp(false); 
        }, 700);
        dispatch({type:'ADD_ITEM',item : item});
    }
    return(
        <li className="item">
            <article>
                <img src={`${item.image}`} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p className="item-price">{curFormatter.format(item.price)}</p>
                    <p className="item-description">{item.description}</p>
                </div>
                <div>
                <p className="item-actions">
                    <Button onClick={() => handleAddItemToCart(item)}>Add to Cart</Button>
                </p>
                </div>
            </article>
            {showPopUp && <PopUp showPopUp={true} message="User added to the cart!" />}
        </li>
    )
}