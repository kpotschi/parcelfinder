import './App.css';
import logo from './images/shipping-fast-solid.svg';

import Parcel from './components/Parcel';

function App() {
	// check localstorage for data?

	// save back to localstorage if new parcel

	const ships = [
		{ shipNr: '142775112730', delService: 'DHL' },
		{ shipNr: '4381443301', delService: 'DHL' },
	];

	return (
		<div className='App'>
			<h1 className='header'>
				<span className='strong'>Parcel</span>finder
				<img src={logo} className='logo' alt='Parcelfinder Logo'></img>
			</h1>
			<form className='form'>
				<input
					type='text'
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
