import './App.css';
import axios from 'axios';
import Parcel from './components/Parcel';

function App() {
	// check localstorage for data?

	// save back to localstorage if new parcel

	const ships = [
		{ shipNr: '142775112730', delService: 'DHL' },
		{ shipNr: '4381443301', delService: 'DHL' },
	];

	// for each parcel in ourArr call api for latest info and render card component

	const options = {
		method: 'GET',
		url: 'https://api-eu.dhl.com/track/shipments',
		params: { trackingNumber: '142775112730' },
		headers: { 'DHL-API-Key': `${process.env.REACT_APP_DHL_API_KEY}` },
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data.shipments[0].status.statusCode);
		})
		.catch(function (error) {
			console.error(error);
		});

	return (
		<div className='App'>
			<h1>Parcelfinder - add font awesome logo</h1>
			<form>
				<input type='text' />
				<button type='submit'>Submit</button>
			</form>
			<div className='card-container'>
				{ships.map((item, index) => {
					return <Parcel key={index} />;
				})}
			</div>
		</div>
	);
}

export default App;
