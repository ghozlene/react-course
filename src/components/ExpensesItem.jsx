import React from 'react';
import './ExpensesItem.css';
const ExpensesItem = ({ expenses }) => {
	return (
		<>
			<div className='expense-item'>
				<div>{expenses.date.toString()}</div>
				<div className='expense-item__description'>
					<h2> {expenses.title}</h2>
					<div className='expense-item__price '> {expenses.amount}</div>
				</div>
			</div>
		</>
	);
};
export default ExpensesItem;
