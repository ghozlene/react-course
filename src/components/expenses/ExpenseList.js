import React from 'react';
import './ExpenseList.css';
import ExpensesItem from './ExpensesItem';
const ExpenseList = ({ filterExpenses }) => {
	if (filterExpenses.length === 0) {
		return <h2 className='expenses-list__fallback'>found no expenses</h2>;
	}
	return (
		<ul className='expenses-list'>
			{filterExpenses.map((item) => {
				return <ExpensesItem key={item.id} expenses={item} />;
			})}
		</ul>
	);
};

export default ExpenseList;
