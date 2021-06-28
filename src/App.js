import './App.css';
import logo from './images/shipping-fast-solid.svg';
import { useEffect, useState } from 'react';
import Parcel from './components/Parcel';

function App() {
	const [ships, setShips] = useState([]);

	//localstorage logic
	useEffect(() => {
		if (localStorage.getItem('localList')) {
			setShips(JSON.parse(localStorage.getItem('localList')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('localList', JSON.stringify(ships));
	}, [ships]);

	const submitHandler = (e) => {
		e.preventDefault();
		setShips((oldShips) => [
			...oldShips,
			{ shipNr: `${e.target.shipInput.value}`, delService: 'DHL' },
		]);
	};

	const eraseHandler = (e) => {
		setShips((oldShips) =>
			oldShips.filter((item) => item.shipNr !== e.target.parentElement.id)
		);
		console.log(e.target.parentElement.id);
	};

	return (
		<div className='App'>
			<h1 className='header'>
				<span className='strong'>Parcel</span>finder
				<img src={logo} className='logo' alt='Parcelfinder Logo'></img>
			</h1>
			<form className='form' onSubmit={submitHandler}>
				<input
					type='text'
					name='shipInput'
					className='input'
					placeholder='Enter shipment number here'
				/>
				<button type='submit' className='submit'>
					Search
				</button>
			</form>
			<div className='card-container'>
				{ships.map((item, index) => {
					return (
						<Parcel
							key={index}
							eraseHandler={eraseHandler}
							shipNr={item.shipNr}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
