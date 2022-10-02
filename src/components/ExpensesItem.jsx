import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpensesItem.css';
const ExpensesItem = ({ expenses }) => {
	return (
		<>
			<Card className='expense-item'>
				<ExpenseDate expenses={expenses} />
				<div className='expense-item__description'>
					<h2> {expenses.title}</h2>
					<div className='expense-item__price '> {expenses.amount}</div>
				</div>
			</Card>
		</>
	);
};
export default ExpensesItem;
