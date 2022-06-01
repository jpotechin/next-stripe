import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { BannerData } from '../types/sanity';

interface HeroBanner {
	heroBanner: BannerData;
}

const HeroBanner = ({ heroBanner }: HeroBanner): JSX.Element => {
	console.log('props on HeroBanner', heroBanner);
	return (
		<div className='hero-banner-container'>
			<div>
				<p className='reach'>{heroBanner?.smallText}</p>
				<h3>{heroBanner?.midText}</h3>
				<h1>{heroBanner?.largeText1}</h1>
				<img
					src={urlFor(heroBanner.image)}
					alt='reach'
					className='hero-banner-image'
				/>
				<div>
					<Link href={`/product/${heroBanner.product}`}>
						<button type='button'>{heroBanner?.buttonText}</button>
					</Link>
					<div className='desc'>
						<h5>Description</h5>
						<p>{heroBanner.desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
