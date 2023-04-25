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
    <div className='expenseApp'>
      {children}
    </div>
 
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

  switch ( action.type ) {
    case  "ADD_TRANSACTION":
      return [
          ...state,  {
          id: state.length,
          description: action.description,
          amount: action.amount
      }];
    case "DELETE_TRANSACTION":
      return state.filter(
        (transactionObject) => transactionObject.id !== action.id
      );
        
    default: throw new Error("Invalid Action Type");
  }
}



