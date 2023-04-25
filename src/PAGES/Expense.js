import AddTransaction from './expMethods/AddTransactions';
import TransactionList from './expMethods/transactionList';
import Balance from './expMethods/balance';
import { TransactionProvider } from './expMethods/transactionContext';
// import { Link } from "react-router-dom";
// import { styles } from "./Home";

export default function Expense({ handleBack }) {

  return (
    <TransactionProvider>
      <div className='App'>
        {/* <header> 
          <Link style={styles.link} to={'/expense'}>
            Expenses
          </Link>
          <Link style={styles.link} to={'/gallery'}>
            Gallery
          </Link>
          <Link style={styles.link} to={'/about'}>
            About
          </Link>
        </header> */}

        <h1>EXPENSE TRACKER</h1>
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </TransactionProvider>
        
  );
}

  