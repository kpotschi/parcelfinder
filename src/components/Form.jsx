import React from 'react';
import Carrier from './Carrier.jsx';
import '../styles/Form.css';

const Form = ({ carriers, submitHandler }) => {
	return (
		<div id='form__top__container'>
			<form onSubmit={submitHandler} id='form'>
				<div id='form__container'>
					<input
						type='text'
						name='shipInput'
						className='form__inputs'
						id='form__shipInput'
						placeholder='Enter shipment number here'
					/>

					<select
						id='form__carrierSelect'
						name='carrierSelect'
						className='form__inputs'
					>
						<option style={{ display: 'none' }}>Select Carrier</option>
						{carriers.map((item) => (
							<Carrier key={item} value={item} />
						))}
					</select>

					<button
						id='form__submitButton'
						type='submit'
						className='form__inputs'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
