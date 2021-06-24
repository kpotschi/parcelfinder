import './App.css';

import Parcel from './components/Parcel';

function App() {
	// check localstorage for data?

	// save back to localstorage if new parcel

	const ships = [
		{ shipNr: '142775112730', delService: 'DHL' },
		{ shipNr: '4381443301', delService: 'DHL' },
	];

	// for each parcel in ourArr call api for latest info and render card component

	return (
		<div className='App'>
			<h1>Parcelfinder - add font awesome logo</h1>
			<form>
				<input type='text' />
				<button type='submit'>Submit</button>
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
