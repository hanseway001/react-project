import { useTransaction, useTransactionDispatch } from './transactionContext'
import { Button } from '@mui/material';

export default function TransactionList() {
    const transactionArray = useTransaction();
    const dispatch = useTransactionDispatch();

    function handleDelete(transactionId) {
        dispatch({ type: 'DELETE_TRANSACTION', id: transactionId })
    }

    // console.log(transactionArray);
    return ( 
        <div className='history'> 
            <div>TRANSACTION HISTORY</div>
            {transactionArray?.map(trans => (
            <div className='transItem' key={trans.id}>
                <div className='description'>
                    <div>
                    {trans.description}
                    </div>
                    <div>
                    {trans.amount}
                    </div>
                </div>
                <Button size='small' onClick={() => handleDelete(trans.id)}>Delete</Button>
            </div>
        ))}
        </div>
    )
}


