import React from 'react';

import dhlLogo from '../images/dhl-brands.svg';

const Parcel = ({ data, eraseHandler }) => {
	let convertTime = data.events[0]?.timestamp;

	return (
		<div className='card' id={data.id}>
			<span className='hide' onClick={eraseHandler}>X</span>
			<div className='card-row'>
				<h3>DHL Shipment</h3>
				<img src={dhlLogo} className='provider-logo' alt='Provider Logo' />
			</div>
			<div className='card-row'>
				<span>Tracking number: </span>
				<span>{data.id}</span>
			</div>
			<div className='card-row'>
				<span>From</span>
				<span>
					{data.origin.address.countryCode ??
						data.origin.address.addressLocality}
				</span>
			</div>
			<div className='card-row'>
				<span>To</span>
				<span>
					{data.destination.address.countryCode ??
						data.destination.address.addressLocality}
				</span>
			</div>
			<div className='card-row'>
				<span>Current location: </span>
				<span>{data.status.description}</span>
			</div>
			<div className='card-row'>
				<span>Last updated: </span>
				<span>{convertTime}</span>
			</div>
		</div>
	);
};

export default Parcel;
