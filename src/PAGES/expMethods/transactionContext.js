import { createContext, useContext, useReducer } from 'react';

const TransactionContext = createContext(null);

const TransactionDispatchContext = createContext(null);

export function TransactionProvider() {
    const [transactions, dispatch] = useReducer(transactionsReducer, initialTransactions);

    return 'more bunnies';
}

export function useTransactions() {
    return useContext(TransactionContext);
  }
  
  export function useTransactionDispatch() {
    return useContext(TransactionDispatchContext);
  }

  function trasactionReducer (transactions , action) {
    switch (action.type) {
        case 'added': {
            return 
        }
    }
  }