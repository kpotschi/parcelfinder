import './App.css';
import logo from './images/shipping-fast-solid.svg';
import { useEffect, useState } from 'react';
import Parcel from './components/Parcel';

function App() {
	const [ships, setShips] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('localList')) {
			JSON.parse(localStorage.getItem('localList')).forEach((item) => {
				ships.push(item);
			});
		}
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(e.target.shipInput.value);
		localStorage.setItem('localList', JSON.stringify(ships));
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
					return <Parcel key={index} shipNr={item.shipNr} />;
				})}
			</div>
		</div>
	);
}

export default App;
