import { styles } from "./Home";
// import { useState , createContext, useReducer } from "react";
import AddTransaction from "./expMethods/AddTransactions";

export default function Expense({ handleBack }) {

  // const [inputValue, setInputValue] = useState(" ")
  // const [transactionArray, setTransactionArray] = useState([]);

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setInputValue(value);
  // };

  // function handleAdd() {
  //   setTransactionArray([...transactionArray, inputValue]);
  //   setInputValue('');
  // }

  // function handleDelete(index) {
  //   // console.log(transactionArray);
  //   // console.log(index);
  //   let newTransactionArray = transactionArray.filter((transaction, index) => {
  //     console.log('trans ' + transaction + ' index ' + index);
      
  //   });
  //   console.log(newTransactionArray);
  // }

  // const transactionItems = transactionArray.map((transaction, index) => {
  //   return <div key={index}>{transaction}<button onClick={handleDelete(index)}>Delete</button></div>
  // })


  return (
    <main>
      <h1>Expense!</h1>
      <div onClick={handleBack} style={styles.link}>
        Back to home
      </div>
      <AddTransaction />
      {/* <div>
        <input type="text" placeholder="Add Transaction" value={inputValue} onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
      </div> */}

        {/* {transactionItems} */}
    </main>
  );
}