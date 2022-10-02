import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
	const [entredTitle, setEntredTitle] = useState('');
	const [entredAmount, setEntredAmount] = useState('');
	const [entredDate, setEntredDate] = useState('');
	const titleChangeHandler = (event) => {
		setEntredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEntredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEntredDate(event.target.value);
	};
	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='text'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-05'
						max='2024-08-08'
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
