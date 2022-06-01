import Link from 'next/link';
import React from 'react';

const HeroBanner = (): JSX.Element => {
	return (
		<div className='hero-banner-container'>
			<div>
				<p className='reach'>Small Text</p>
				<h3>MID Text</h3>
				<img src='' alt='reach' className='hero-banner-image' />
				<div>
					<Link href='/product/ID'>
						<button type='button'>BUTTON TEXT</button>
					</Link>
					<div className='desc'>
						<h5>Descrition</h5>
						<p>DESCRIPTION</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
