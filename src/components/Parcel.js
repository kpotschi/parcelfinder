import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dhlLogo from '../images/dhl-brands.svg';

const Parcel = ({ shipNr, eraseHandler }) => {
	const [info, setInfo] = useState([]);

	const options = {
		method: 'GET',
		url: 'https://api-eu.dhl.com/track/shipments',
		params: { trackingNumber: `${shipNr}` },
		headers: { 'DHL-API-Key': `${process.env.REACT_APP_DHL_API_KEY}` },
	};

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				const allData = response.data.shipments;
				setInfo(allData);
			})
			.catch(function (error) {
				console.error(error);
			});
		//eslint-disable-next-line
	}, []);

	return (
		<div className='card' id={shipNr}>
			<span className='hide' onClick={eraseHandler}></span>
			<div className='card-row'>
				<h3>DHL Shipment</h3>
				<img src={dhlLogo} className='provider-logo' alt='Provider Logo' />
			</div>
			<div className='card-row'>
				<span>Tracking number: </span>
				<span>{shipNr}</span>
			</div>
			<div className='card-row'>
				<span>Destination: </span>
				<span>{info[0]?.events[0].description}</span>
			</div>
			<div className='card-row'>
				<span>Current location: </span>
				<span>Kitzingen, Germany</span>
			</div>
			<div className='card-row'>
				<span>Expected delivery: </span>
				<span>Date</span>
			</div>
		</div>
	);
};

export default Parcel;
