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
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expenses.map((item) => {
				return <ExpensesItem key={item.id} expenses={item} />;
			})}
		</Card>
	);
};

export default Expenses;
