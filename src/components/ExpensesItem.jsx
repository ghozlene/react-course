import React from 'react';
import './ExpensesItem.css';
const ExpensesItem = () => {
	return (
		<>
			<div className='expense-item'>
				<div>March 28th 2021</div>
				<div className='expense-item__description'>
					<h2> car insurance</h2>
					<div className='expense-item__price '> 251$</div>
				</div>
			</div>
		</>
	);
};
export default ExpensesItem;
