import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div id='footer'>
			<p>
				This application is no longer maintained. The APIs might not be working
				as expected.
			</p>
			<p>
				Module project of{' '}
				<a
					href='http://www.github.com/DarkoTal-an'
					rel='noreferrer'
					target='_blank'
				>
					Darko Talan
				</a>
				,{' '}
				<a
					href='http://www.github.com/Melanie-codegirl'
					rel='noreferrer'
					target='_blank'
				>
					Melanie Schwarke
				</a>{' '}
				and{' '}
				<a
					href='http://www.github.com/kpotschi'
					rel='noreferrer'
					target='_blank'
				>
					Kevin Potschien
				</a>{' '}
				for DCI, 2021
			</p>
		</div>
	);
};

export default Footer;
