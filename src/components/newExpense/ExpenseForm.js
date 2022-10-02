import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
	const [entredTitle, setEntredTitle] = useState('');
	const [entredAmount, setEntredAmount] = useState('');
	const [entredDate, setEntredDate] = useState('');

	//const [userInput, setUserInput] = useState({
	//	entredTitle: '',
	//	entredAmount: '',
	//	entredDate: '',
	//});
	const titleChangeHandler = (event) => {
		setEntredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEntredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEntredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: entredTitle,
			date: new Date(entredDate),
			amount: entredAmount,
		};

		console.log(expenseData);
		setEntredTitle('');
		setEntredAmount('');
		setEntredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={entredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='text'
						min='0.01'
						step='0.01'
						value={entredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-05'
						max='2024-08-08'
						value={entredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
