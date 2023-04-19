import { createContext, useContext, useReducer } from 'react';
//provides read only form of data
export const TransactionContext = createContext([]);
//set the actions that modify the context
export const TransactionDispatchContext = createContext(null);

// function transactionsReducer(state, action) {
//   switch ( action ) {
//     case  "ADD_TRANSACTION":
//       return {
        
//       }
//   }
// }




// export function TransactionProvider() {
    

//     return 'more bunnies';
// }


