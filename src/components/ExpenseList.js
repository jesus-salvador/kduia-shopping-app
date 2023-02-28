import React from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {
    const { expenses } = React.useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thread-light'>
                <tr>
                    <th scope='col1'>Items</th>
                    <th scope='col1'>Quantity</th>
                    <th scope='col1'>Unit Price</th>
                    <th scope='col1'>Items Price</th>
                    <th scope='col1'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map( expense => (
                    <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        quantity={expense.quantity}
                        unitprice={expense.unitprice}
                    />
                ))}
            </tbody>
        </table>
    )
};

export default ExpenseList;
