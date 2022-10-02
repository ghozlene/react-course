import React from 'react';
import './ExpensesItem.css';
const ExpensesItem = () => {
	const expenseDate = new Date(2021, 2, 17);
	const expenseTitle = 'car insurance ';
	const expenseAmount = 254;
	return (
		<>
			<div className='expense-item'>
				<div>{expenseDate.toString()}</div>
				<div className='expense-item__description'>
					<h2> {expenseTitle}</h2>
					<div className='expense-item__price '> {expenseAmount}</div>
				</div>
			</div>
		</>
	);
};
export default ExpensesItem;
