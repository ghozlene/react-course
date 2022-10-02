import React, { useState } from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../ui/Card';
const Expenses = ({ expenses, data }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesItem expenses={expenses[0]} />
			<ExpensesItem expenses={expenses[1]} />
			<ExpensesItem expenses={expenses[2]} />
		</Card>
	);
};

export default Expenses;
