import React from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
	const titleChangeHandler = (event) => {
		const inpuTitle = event.target.value;
		console.log(inpuTitle);
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
					<input type='text' min='0.01' step='0.01' />
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-05' max='2024-08-08' />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
