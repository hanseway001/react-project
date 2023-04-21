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
            <div>ADD TRANSACTION</div>
            <div>
                <TextField
                    type="text" 
                    size="small"
                    required
                    placeholder="Transaction Description" 
                    value={inputDescriptionValue} 
                    onChange={handleDescriptionChange}
                ></TextField>
                <TextField 
                    type="number" 
                    size="small"
                    placeholder="Transaction Amount" 
                    value={inputAmountValue} 
                    onChange={handleAmountChange}
                ></TextField>
                <Button onClick={handleAdd}>Add Transaction</Button>
            </div>
        </div>

    )
}