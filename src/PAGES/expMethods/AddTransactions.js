import { useState, useContext } from "react";
// import { TransitionDispatchContext , TransactionsContext } from "./transactionContext";


export default function AddTransaction() {

    const [inputDescriptionValue, setInputDescriptionValue] = useState("")
    const [inputAmountValue, setInputAmountValue] = useState("")
    // const [state, dispatch] = useReducer(reducer, initialState);
    const { transactionArray } = state;

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setInputDescriptionValue(value);
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        setInputAmountValue(value);
    };
    
    function handleAdd() {
        transactionDispatch({
            type: "ADD_TRANSACTION",
            // id: 0,
            description: inputDescriptionValue,
            amount: inputAmountValue
        })
        // setTransactionArray([...transactionArray, {
        //     id: transactionArray.length,
        //     description: inputDescriptionValue,
        //     amount: inputAmountValue 
        // }]);

        setInputDescriptionValue('');
        setInputAmountValue('');
    }

    function handleDelete(transactionId) {
        dispatch({ type: 'DELETE_TRANSACTION', id: transactionId})
        // console.log("transactionId", transactionId);
        // let newTransactionArray = transactionArray.filter(
        //   (transactionObject) => transactionObject.id !== transactionId
        // );
        // setTransactionArray(newTransactionArray);
    }

    const transactionItems = transactionArray.map((transaction, index) => {
        return (
        <div key={index}>
            {transaction.description}
            {transaction.amount}
            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
        </div>
        );
    });

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
             {transactionItems}

        </div>

    )
}