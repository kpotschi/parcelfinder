import React from 'react';

import dhlLogo from '../images/dhl-brands.svg';

const Parcel = ({ shipNr, eraseHandler }) => {
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
				<span></span>
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
