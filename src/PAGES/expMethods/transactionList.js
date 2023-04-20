import { useTransaction, useTransactionDispatch } from './transactionContext'

export default function TransactionList() {
    const transactionArray = useTransaction();
    const dispatch = useTransactionDispatch();

    function handleDelete(transactionId) {
        dispatch({ type: 'DELETE_TRANSACTION', id: transactionId })
    }

    console.log(transactionArray);
    return (
        <ul>
            {transactionArray?.map(trans => (
                <li key={trans.id}>
                    <div key={trans.id}>
                        {trans.description}
                        {trans.amount}
                        <button onClick={
                            () => 
                            handleDelete(trans.id)
                        }>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

