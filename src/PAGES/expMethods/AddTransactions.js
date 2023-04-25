import { useState,  } from "react";
import { useTransactionDispatch } from "./transactionContext";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

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
        setInputAmountValue(Number(value));
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
        <div className="addTransaction">
            <div className="titleBorder change"><h2>ADD TRANSACTION</h2></div>
            <div>
                <div className="inputs">
                    <TextField
                        type="text" 
                        size="small"
                        required
                        placeholder="Enter Description" 
                        value={inputDescriptionValue} 
                        onChange={handleDescriptionChange}
                    ></TextField>
                </div>
                <div className="inputs">
                    <TextField 
                        type="number" 
                        size="small"
                        placeholder="Enter Amount" 
                        value={inputAmountValue} 
                        onChange={handleAmountChange}
                    ></TextField>
                </div>
                <h4>* Enter Expenses With Negative Numbers</h4>
                <Button variant="contained" onClick={handleAdd}>Add Transaction</Button>
            </div>
        </div>
    )
}