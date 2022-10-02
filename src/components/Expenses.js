import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
const Expenses = ({ expenses }) => {
	return (
		<div className='expenses'>
			<ExpensesItem expenses={expenses[0]} />
			<ExpensesItem expenses={expenses[1]} />
			<ExpensesItem expenses={expenses[2]} />
		</div>
	);
};

export default Expenses;
