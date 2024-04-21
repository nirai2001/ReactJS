import { useState } from "react";
export function useInput(defaultValue, validationfn){
    const [enteredValues, setEnteredValues] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationfn(enteredValues);

    function handleInputChange(event){
        setEnteredValues(event.target.value);
        setDidEdit(false);
      }
    
    function handleInputBlur(){
        setDidEdit(true)
    }

    return{
        value:enteredValues,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}