import { useState,  } from "react";
import { useTransactionDispatch } from "./transactionContext";


export default function AddTransaction() {

    const [inputDescriptionValue, setInputDescriptionValue] = useState("")
    const [inputAmountValue, setInputAmountValue] = useState("")
    // const [state] = useReducer(reducer, initialState);
    const dispatch = useTransactionDispatch();
    // const { transactionArray } = sate;

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setInputDescriptionValue(value);
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        setInputAmountValue(value);
    };
    
    function handleAdd() {
        dispatch({
            type: "ADD_TRANSACTION",
            description: inputDescriptionValue,
            amount: inputAmountValue
        })
        setInputDescriptionValue('');
        setInputAmountValue('');
    }

    return (
        <div>
            <div>
                <input
                    type="text" 
                    placeholder="Transaction Description" 
                    value={inputDescriptionValue} 
                    onChange={handleDescriptionChange}
                ></input>
                <input 
                    type="text" 
                    placeholder="Transaction Amount" 
                    value={inputAmountValue} 
                    onChange={handleAmountChange}
                ></input>
                <button onClick={handleAdd}>Add Transaction</button>
            </div>
        </div>

    )
}