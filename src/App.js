import logo from './images/shipping-fast-solid.svg';
import { useEffect, useState } from 'react';
import Parcel from './components/Parcel.jsx';
import Form from './components/Form.jsx';
import Header from './components/Header.jsx';
import axios from 'axios';

import './styles/App.css';

function App() {
	const [beforeData, setBeforeData] = useState([]);
	const [afterData, setAfterData] = useState([]);
	const carriers = ['DHL', 'UPS'];

	useEffect(() => {
		if (localStorage.getItem('localList')) {
			JSON.parse(localStorage.getItem('localList')).forEach((item) =>
				fetchTrackingInfo(item.shipNr, item.carrier)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		localStorage.setItem('localList', JSON.stringify(beforeData));
	}, [beforeData]);

	const fetchTrackingInfo = (number, carrier) => {
		const options = {
			method: 'GET',
			url: 'https://api-eu.dhl.com/track/shipments',
			params: { trackingNumber: `${number}` },
			headers: { 'DHL-API-Key': `${process.env.REACT_APP_DHL_API_KEY}` },
		};

		axios
			.request(options)
			.then(function (response) {
				const parcelData = response.data.shipments;
				setBeforeData((oldBefore) => [
					...oldBefore,
					{ shipNr: parcelData[0].id, carrier: carrier },
				]);
				parcelData[0].carrier = carrier;
				setAfterData((oldAfter) => [...oldAfter, parcelData[0]]);
			})
			.catch(function (error) {
				switch (error.response.status) {
					case 400:
						showError('Parcel not found');
						break;
					case 429:
						showError('No more API requests possible');
						break;
					default:
						showError('Unknown error');
						break;
				}
			});
	};

	// // error logic
	const showError = (message) => {
		let errorDisplay = document.createElement('p');
		errorDisplay.innerText = message;
		errorDisplay.className = 'errorMsg';
		document.querySelector('#errorDisplay').appendChild(errorDisplay);
	};

	//submit logic
	const submitHandler = (e) => {
		e.preventDefault();
		document.querySelector('.errorMsg')?.remove();
		if (beforeData.some((elem) => elem.shipNr === e.target.shipInput.value)) {
			showError('Parcel already in list');
			return;
		}

		fetchTrackingInfo(
			e.target.shipInput.value,
			document.querySelector('#form__carrierSelect').value
		);
	};

	//erase logic
	const eraseHandler = (e) => {
		setBeforeData(
			beforeData.filter((item) => item.shipNr !== e.target.parentElement.id)
		);
		setAfterData(
			afterData.filter((item) => item.id !== e.target.parentElement.id)
		);
	};

	return (
		<div className='App'>
			<img id='bg__image' src={logo} alt='parcelfinder logo' />
			<Header />

			<Form carriers={carriers} submitHandler={submitHandler} />

			<div id='errorDisplay'></div>
			<div id='cardContainer'>
				{afterData.map((item, index) => {
					return <Parcel key={index} eraseHandler={eraseHandler} data={item} />;
				})}
			</div>
		</div>
	);
}

export default App;
