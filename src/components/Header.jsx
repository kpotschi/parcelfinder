import React from 'react';
import logo from '../images/shipping-fast-solid.svg';
import '../styles/Header.css';

const Header = () => {
	return (
		<div id='header'>
			<h1 className='brand__text'>
				<span className='brand brand--strong'>Parcel</span>
				<span className='brand brand--light'>finder</span>
			</h1>
			<img src={logo} id='header__logo' alt='Parcelfinder Logo' />
		</div>
	);
};

export default Header;
