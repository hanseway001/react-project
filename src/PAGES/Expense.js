import { styles } from "./Home";
import { useState } from "react";

export default function Expense({ handleBack }) {

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

  function handleDelete() {

  }

  const transactionItems = transactionArray.map((transaction, index) =>{
    return <div key={index}>{transaction}<button onClick={handleDelete}>Delete</button></div>
  })


  return (
    <main>
      <h1>Expense!</h1>
      <div onClick={handleBack} style={styles.link}>
        Back to home
      </div>
      <div>
        <input type="text" placeholder="Add Transaction" value={inputValue} onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
      </div>

        {transactionItems}
    </main>
  );
}