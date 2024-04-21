import { useContext, useState } from "react";
import Modal from "../UI/Modal.jsx";
import { curFormatter } from "../util/curFormatter";
import Input from "../UI/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Button from "../UI/Button.jsx";
import Error from "./Error.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const userProgressCtx = useContext(UserProgressContext);
  function handleClose() {
    userProgressCtx.hideCheckOut();
  }

  function handleFinish() {
    userProgressCtx.hideCheckOut();
    setClicked(false)
    clearCart();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const street = document.getElementById("street").value;
    const postalCode = document.getElementById("postal-code").value;
    const city = document.getElementById("city").value;

    localStorage.setItem("checkoutData", JSON.stringify({
      name,
      email,
      street,
      postalCode,
      city,
    }));

    // Proceed with order submission or other actions
    handleOrder();
  }

  function handleOrder() {
    setClicked(true);
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  return (
    <>
      {!clicked && <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <h2 className="head2">Check Out</h2>
          <p className="para">Total Amount: {curFormatter.format(cartTotal)}</p>

          <Input label="Full name" type="text" id="name" />
          <Input label="Email Address" type="email" id="email" />
          <Input label="Street" type="text" id="street" />
          <div className="control-row">
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input label="City" type="text" id="city" />
          </div>
          <p className="modal-actions">{actions}</p>
        </form>
        </Modal>}
        {clicked && (
          <Modal
            open={userProgressCtx.progress === "checkout"}
            onClose={handleFinish}
          >
            <h2 className="head2">Success!!</h2>
            <p className="para">Your order was submitted successfully.</p>
            <p className="para">Thank you for your valuable order!!</p>
            <p className="modal-actions">
              <Button onClick={handleFinish}>Okay</Button>
            </p>
          </Modal>
        )}
    </>
  );
}
