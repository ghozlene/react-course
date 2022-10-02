import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import Card from '../ui/Card';
const Expenses = ({ expenses, data }) => {
	if (data !== {}) {
		console.log(data);
	}
	return (
		<Card className='expenses'>
			<ExpensesItem expenses={expenses[0]} />
			<ExpensesItem expenses={expenses[1]} />
			<ExpensesItem expenses={expenses[2]} />
		</Card>
	);
};

export default Expenses;
