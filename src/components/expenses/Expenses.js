import React, { useState } from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../ui/Card';
const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filterExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{filterExpenses.length === 0 && (
				<p style={{ textAlign: 'center', color: '#ffffff' }}>
					No expenses found
				</p>
			)}
			{filterExpenses.length > 0 &&
				filterExpenses.map((item) => {
					return <ExpensesItem key={item.id} expenses={item} />;
				})}
		</Card>
	);
};

export default Expenses;
