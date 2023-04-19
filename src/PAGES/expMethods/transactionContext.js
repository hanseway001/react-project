import { createContext, useContext, useReducer } from 'react';
//provides read only form of data
 const TransactionContext = createContext(null);
//set the actions that modify the context
 const TransactionDispatchContext = createContext(null);

 const initialTransactions = [];

export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(
    transactionReducer,
    initialTransactions
  );

  return (
 
  <TransactionContext.Provider value={state}>
  <TransactionDispatchContext.Provider value={dispatch}>

    {children}
    {/* <main>
      <h1>Expense!</h1>
      <div onClick={handleBack} style={styles.link}>
        Back to home
      </div>
      <AddTransaction />

    </main> */}
  </TransactionDispatchContext.Provider>
  </TransactionContext.Provider>

  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}

export function useTransactionDispatch() {
  return useContext(TransactionDispatchContext);
}

function transactionReducer(state, action) {
  console.log('this is state' + state)
  // switch ( action.type ) {
  //   case  "ADD_TRANSACTION":
  //     return {
  //       transactionArray: [...state.transactionArray,  {
  //         id: state.transactionArray.length,
  //         description: action.description,
  //         amount: action.amount
  //       }]
  //     };
  //     case "DELETE_TRANSACTION":
  //       return {
  //         transactionArray: state.transactionArray.filter(
  //           (transactionObject) => transactionObject.id !== action.id
  //         )
  //       };
  //     default: throw new Error("Invalid Action Type");
  // }
}



