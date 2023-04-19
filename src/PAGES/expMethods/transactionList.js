import { useState, useContext } from "react";
import { useTransaction, useTransactionDispatch } from './transactionContext'

export default function TransactionList() {
    const transactionArray = useTransaction();
    console.log(transactionArray);
    return (
        <ul>
            {transactionArray?.map(trans => (
                <li key={trans.id}>
                    <Transaction transaction={transactionArray} />
                </li>
            ))}
        </ul>
    )
}



function Transaction({ transaction }) {

    const dispatch = useTransactionDispatch();

    function handleDelete(transactionId) {
        dispatch({ type: 'DELETE_TRANSACTION', id: transactionId })
    }
    return (

        transaction?.map((transaction, index) => {
            return (
                <div key={index}>
                    {transaction.description}
                    {transaction.amount}
                    <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                </div>
            );
        })
    )

}
