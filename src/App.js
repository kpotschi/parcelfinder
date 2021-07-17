import logo from './images/shipping-fast-solid.svg';
import { useEffect, useState } from 'react';
import Parcel from './components/Parcel.jsx';
import Carrier from './components/Carrier.jsx';
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
		document.querySelector('.error-display').appendChild(errorDisplay);
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
			document.querySelector('#carrierSelect').value
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
			<div
				id='header'
				className='d-flex justify-content-center align-items-center bg-dark border-bottom border-secondary'
			>
				<h1 className='brand'>
					<span className='brand--strong'>Parcel</span>
					finder
				</h1>
				<img src={logo} id='header__logo' alt='Parcelfinder Logo' />
			</div>

			<div className='bg-light d-flex justify-content-center'>
				<form onSubmit={submitHandler} className='my-4'>
					<div
						id='form__container'
						className='d-flex flex-column flex-md-row align-items-center justify-content-center'
					>
						<input
							type='text'
							name='shipInput'
							id='shipInput'
							placeholder='Enter shipment number here'
							className='form-control'
						/>

						<select
							id='carrierSelect'
							name='carrierSelect'
							className='form-select'
						>
							<option style={{ display: 'none' }}>Select Carrier</option>
							{carriers.map((item) => (
								<Carrier key={item} value={item} />
							))}
						</select>

						<button
							id='submitButton'
							type='submit'
							className='btn btn-secondary w-100'
						>
							Search
						</button>
					</div>
				</form>
			</div>

			<div className='error-display'></div>
			<div className='card-container'>
				{afterData.map((item, index) => {
					return <Parcel key={index} eraseHandler={eraseHandler} data={item} />;
				})}
			</div>
		</div>
	);
}

export default App;
