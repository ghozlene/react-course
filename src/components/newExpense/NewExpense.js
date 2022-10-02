import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = ({ onHandlingExpense }) => {
	const saveExpenseDataHandler = (entredExpenseData) => {
		const expenseData = {
			...entredExpenseData,
			id: Math.random().toString(),
		};
		onHandlingExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
