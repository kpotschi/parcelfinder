import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Parcel = ({ shipNr }) => {
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
	}, []);

	return <div>{info ? 'yes' : 'no'}</div>;
};

export default Parcel;
