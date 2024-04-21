import Input from "./Input";
import { useRef } from "react";
import Modal from './Modal'

export default function Information({onAdd , onCancel})
{
    const modal = useRef();

    const titleRef = useRef();
    const desRef = useRef();
    const dueRef = useRef();   

    function HandleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDes = desRef.current.value;
        const enteredDue = dueRef.current.value;

        if(enteredTitle.trim() === '' || enteredDes.trim() === '' || enteredDue.trim() === '')
        {
            modal.current.open()
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDes,
            dueDate: enteredDue
        });

    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="uppercase font-semibold mb-2 text-sm text-stone-900">Invalid Input</h2>
            <p className="text-stone-500 mb-2">OOPs...you look like you forgot to enter a value.</p>
            <p className="text-stone-500 mb-2">Please make sure you provide a valid value for every Input Field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                    Cancel
                </button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={HandleSave}>
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={titleRef} label="TITLE"/>
            <Input ref={desRef} label="DESCRIPTION" textarea />
            <Input type="date" ref={dueRef} label="DUE DATE" />
        </div>
        </div>
        </>
    )
}