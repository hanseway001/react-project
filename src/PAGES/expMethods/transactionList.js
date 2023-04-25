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
            <div className='titleBorder'><h2>TRANSACTION HISTORY</h2></div>
            {transactionArray?.map(trans => (
            <div className='transItem' key={trans.id}>
                <div className='description'>
                    <div>
                    {trans.description}
                    </div>
                    <div className={(trans.amount>0) ? 'pos' : 'neg'} >
                    {trans.amount}
                    </div>
                </div>
                <div className='delete'>
                    <Button variant="contained" size='small' onClick={() => handleDelete(trans.id)}>Delete</Button>
                </div>
            </div>
        ))}
        </div>
    )
}


