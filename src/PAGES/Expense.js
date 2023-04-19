// import { styles } from "./Home";
// import {  useReducer } from "react";
// import AddTransaction from "./expMethods/AddTransactions";
// import { TransactionContext, TransactionDispatchContext } from "./expMethods/transactionContext";
// import {transactionArray} from "./expMethods/AddTransactions";

import AddTransaction from './expMethods/AddTransactions';
import TransactionList from './expMethods/transactionList';
import { TransactionProvider } from './expMethods/transactionContext';

export default function Expense({ handleBack }) {


  // const initialTransactions = [];
  // const initialState = {
  //   transactionArray: []
  // };
  // const [transactions, dispatch] = useReducer(transactionsReducer, initialTransactions);
  // const [state, dispatch] = useReducer(reducer, initialState);

  // function reducer(state, action) {
  //   switch ( action ) {
  //     case  "ADD_TRANSACTION":
  //       return {
  //         transactionArray: [...state.transactionArray,  {
  //           id: state.transactionArray.length,
  //           description: action.description,
  //           amount: action.amount
  //         }]
  //       };
  //       case "DELETE_TRANSACTION":
  //         return {
  //           transactionArray: state.transactionArray.filter(
  //             (transactionObject) => transactionObject.id !== action.id
  //           )
  //         };
  //         default: throw new error("Invalid Action Type");
  //   }
  // }

  return (
    <TransactionProvider>
      <h1>Expernses</h1>
      <AddTransaction />
      <TransactionList />
    </TransactionProvider>

  //   <TransactionContext.Provider value={transactionArray}>
  //     <TransactionDispatchContext.Provider value={dispatch}>

  //       <main>
  //         <h1>Expense!</h1>
  //         <div onClick={handleBack} style={styles.link}>
  //           Back to home
  //         </div>
  //         <AddTransaction />
   
  //       </main>
  //     </TransactionDispatchContext.Provider>
  //  </TransactionContext.Provider>
  );
}