
import React, { useState, useContext, useReducer, createContext } from "react";
const TransactionsContext = createContext();
const TransactionDispatchContext = createContext();

const initialState = {
  transactionArray: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        transactionArray: [
          ...state.transactionArray,
          {
            id: state.transactionArray.length,
            description: action.description,
            amount: action.amount
          }
        ]
      };
    case "DELETE_TRANSACTION":
      return {
        transactionArray: state.transactionArray.filter(
          (transactionObject) => transactionObject.id !== action.id
        )
      };
    default:
      throw new Error("Invalid action type");
  }
}

export default function App() {
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");
  const [inputAmountValue, setInputAmountValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
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
    dispatch({
      type: "ADD_TRANSACTION",
      description: inputDescriptionValue,
      amount: inputAmountValue
    });
    setInputDescriptionValue("");
    setInputAmountValue("");
  }

  function handleDelete(transactionId) {
    dispatch({ type: "DELETE_TRANSACTION", id: transactionId });
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
    <TransactionsContext.Provider value={transactionArray}>
      <TransactionDispatchContext.Provider value={dispatch}>
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
      </TransactionDispatchContext.Provider>
    </TransactionsContext.Provider>
  );
}