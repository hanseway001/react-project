import AddTransaction from './expMethods/AddTransactions';
import TransactionList from './expMethods/transactionList';
import Balance from './expMethods/balance';
import { TransactionProvider } from './expMethods/transactionContext';

export default function Expense({ handleBack }) {

  return (
    <TransactionProvider>
      <div className='App'>
        <h1>EXPENSE TRACKER</h1>
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </TransactionProvider>
        
  );
}

  