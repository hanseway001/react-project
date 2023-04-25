import { useState } from 'react';
import { useEffect } from 'react';
import { useTransaction, useTransactionDispatch } from './transactionContext'

export default function Balance() {
    const transactionArray = useTransaction();
    const [ total , setTotal] = useState(0);
    const [ posTotal, setPosTotal] = useState(0);
    const [ negTotal, setNegTotal] = useState(0);

    useEffect(() => {
        const newTotal = transactionArray.reduce((prevValue, curValue) => {
            return prevValue + curValue.amount
        },0);
        setTotal(newTotal);
        const newPosTotal = transactionArray.reduce((prevValue, curValue) => {

            if(curValue.amount > 0) {
                prevValue += curValue.amount
            }
            return prevValue
        },0);
        setPosTotal(newPosTotal)
        const newNegTotal = transactionArray.reduce((prevValue, curValue) => {

            if(curValue.amount < 0) {
                prevValue += curValue.amount
            }
            return prevValue
        },0);
        setNegTotal(newNegTotal)
    },[transactionArray]);


    return (
        <div className='balance'>
            <div className='titleBorder'><h2>YOUR BALANCE</h2></div>
            <div className='total'>
                <h3>TOTAL BALANCE</h3>
                <div className='bal'>
                    {total}
                </div>
            </div>
            <div className='incExp'>
                <div className='posBal'>
                    <div>TOTAL INCOME</div>
                    <div className='pos balSize'>{posTotal}</div>
                </div>
                <div className='negBal'>
                    <div>TOTAL EXPENSE</div>
                    <div className='neg balSize'>{negTotal}</div>
                </div>
            </div>

        </div>
    )
}