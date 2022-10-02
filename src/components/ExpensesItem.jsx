import React from 'react';
import './ExpensesItem.css';
const ExpensesItem = ({ expenses }) => {
	const month = expenses.date.toLocaleString('en-us', { month: 'long' });
	const year = expenses.date.getFullYear();
	const day = expenses.date.toLocaleString('en-us', { day: '2-digit' });
	return (
		<>
			<div className='expense-item'>
				<div>
					<div>{month}</div>
					<div>{day}</div>
					<div>{year}</div>
				</div>

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
