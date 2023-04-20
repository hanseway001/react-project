import AddTransaction from './expMethods/AddTransactions';
import TransactionList from './expMethods/transactionList';
import { TransactionProvider } from './expMethods/transactionContext';

export default function Expense({ handleBack }) {

  return (
    <TransactionProvider>
      <h1>Expenses</h1>
      <AddTransaction />
      <TransactionList />
    </TransactionProvider>

  
  );
}