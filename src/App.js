import './App.css';
import logo from './images/shipping-fast-solid.svg';
import { useEffect, useState } from 'react';
import Parcel from './components/Parcel';
import axios from 'axios';

function App() {
	const [beforeData, setBeforeData] = useState([]);
	const [afterData, setAfterData] = useState([]);

	//localstorage logic
	useEffect(() => {
		if (localStorage.getItem('localList')) {
			setBeforeData(JSON.parse(localStorage.getItem('localList')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('localList', JSON.stringify(beforeData));
	}, [beforeData]);

	//API call logic

	useEffect(() => {
		setAfterData([]);
		beforeData.forEach((parcel) => fetchTrackingInfo(parcel.shipNr));
	}, [beforeData]);

	const fetchTrackingInfo = (shipNr) => {
		const options = {
			method: 'GET',
			url: 'https://api-eu.dhl.com/track/shipments',
			params: { trackingNumber: `${shipNr}` },
			headers: { 'DHL-API-Key': `${process.env.REACT_APP_DHL_API_KEY}` },
		};

		axios
			.request(options)
			.then(function (response) {
				const parcelData = response.data.shipments;
				setAfterData((oldData) => [...oldData, parcelData[0]]);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	//submit logic & duplicate check
	const submitHandler = (e) => {
		e.preventDefault();

		document.querySelector('#errorMsg')?.remove();

		if (beforeData.some((elem) => elem.shipNr === e.target.shipInput.value)) {
			let errorDisplay = document.createElement('p');
			errorDisplay.innerText = 'Parcel already in list';
			errorDisplay.id = 'errorMsg';

			document
				.querySelector('#form')
				.parentNode.insertBefore(
					errorDisplay,
					document.querySelector('#form').nextSibling
				);

			return;
		}

		setBeforeData((oldShips) => [
			...oldShips,
			{ shipNr: `${e.target.shipInput.value}`, carrier: 'DHL' },
		]);
	};

	//erase logic
	const eraseHandler = (e) => {
		setBeforeData(
			beforeData.filter((item) => item.shipNr !== e.target.parentElement.id)
		);
	};

	return (
		<div className='App'>
			<h1 className='header'>
				<span className='strong'>Parcel</span>finder
				<img src={logo} className='logo' alt='Parcelfinder Logo'></img>
			</h1>
			<form className='form' id='form' onSubmit={submitHandler}>
				<input
					type='text'
					name='shipInput'
					id='shipInput'
					className='input'
					placeholder='Enter shipment number here'
				/>
				<button type='submit' className='submit'>
					Search
				</button>
			</form>
			<div className='card-container'>
				{afterData.map((item, index) => {
					return (
						<Parcel key={index} eraseHandler={eraseHandler} shipNr={item.id} />
					);
				})}
			</div>
		</div>
	);
}

export default App;
