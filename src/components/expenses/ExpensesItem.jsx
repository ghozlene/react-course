import React, { useState } from 'react';
import ExpenseDate from '../expenses/ExpenseDate';
import Card from '../ui/Card';
import './ExpensesItem.css';
const ExpensesItem = ({ expenses }) => {
	const [title, setTitle] = useState(expenses.title);

	const changetitle = () => {
		setTitle('updated');
	};
	return (
		<>
			<Card className='expense-item'>
				<ExpenseDate expenses={expenses} />
				<div className='expense-item__description'>
					<h2> {title}</h2>
					<div className='expense-item__price '> {expenses.amount}</div>
				</div>
				<button onClick={changetitle}>Click me</button>
			</Card>
		</>
	);
};
export default ExpensesItem;
