import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
export const fetchCarData = () =>{
    return async (dispatch) => {
        const fetchData = async() =>{
            const response = await fetch(
                'https://siva-5e8ee-default-rtdb.firebaseio.com/cart.json'
            );
            if(!response.ok){
                throw new Error('Could not fetch cart Data')
            }
            const data = await response.json();
            return data;
        }

        try{
            const cartData= await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }
        catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error happened',
                message: 'Sending Cart Failed!!'
              }))
        }
    }
}
export const sendCartData = (cart)=>{
    return async (dispatch) => {
    dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending',
            message: 'Sending Cart Data!!'
          }))
    const sendRequest = async ()=>{
        const response = await fetch('https://siva-5e8ee-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body: JSON.stringify(cart)
          })
      
          if(!response.ok){
            throw new Error('Sending the data failed!!')
          }
    }
    try{
        await sendRequest();
        dispatch(uiActions.showNotification({
            status: 'Success',
            title: 'Success!!',
            message: 'Data sent successfully!'
          })) 
    }
    catch(error){
    sendCartData().catch((error) =>{
    dispatch(uiActions.showNotification({
      status: 'error',
      title: 'Error happened',
      message: 'Sending Cart Failed!!'
    }))})
}
}}