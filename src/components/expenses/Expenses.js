import React, { useState } from 'react';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
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
			<ExpensesChart expenses={filterExpenses} />
			<ExpenseList filterExpenses={filterExpenses} />
		</Card>
	);
};

export default Expenses;
