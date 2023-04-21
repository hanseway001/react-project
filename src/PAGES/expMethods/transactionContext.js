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
  // console.log('this is state ' + state)
  // console.log("this is action " + action)
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
    // case "SUM_TRANSACTIONS":
    //   let total = 0
    //   state.forEach(element => {
    //     // element > 0 ? total =- element : total =- element;
    //     total += element;
    //     // console.log(total);
    //   }); 
      // return total;
        
    default: throw new Error("Invalid Action Type");
  }
}



