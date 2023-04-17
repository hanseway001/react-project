import { useState, useContext } from "react";
import { useTransitionDispatch } from "./transactionContext";

export default function AddTransaction() {

    const [inputValue, setInputValue] = useState(" ")
    const [transactionArray, setTransactionArray] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };
    
    function handleAdd() {
        setTransactionArray([...transactionArray, inputValue]);
        setInputValue('');
    }

    function handleDelete(index) {
    // console.log(transactionArray);
    // console.log(index);
    let newTransactionArray = transactionArray.filter((transaction, index) => {
      console.log('trans ' + transaction + ' index ' + index);
      
    });
    console.log(newTransactionArray);
  }

    const transactionItems = transactionArray.map((transaction, index) => {
        return <div key={index}>{transaction}<button onClick={handleDelete(index)}>Delete</button></div>
    })

    return (
        <div>
            <div>
                <input type="text" placeholder="Add Transaction" value={inputValue} onChange={handleChange}></input>
                <button onClick={handleAdd}>Add</button>
            </div>
             {transactionItems}

        </div>

    )
}