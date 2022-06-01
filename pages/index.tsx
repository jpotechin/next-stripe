import type { NextPage } from 'next';
import { Product, FooterBanner, HeroBanner } from '../components';

const products = [
	'Reach',
	'Reach Monthly Subscription',
	'Reach Annually Subscription',
];

const Home: NextPage = () => {
	return (
		<>
			<HeroBanner />
			<div className='products-heading'>
				<h2>Best Selling Products</h2>
				<p>Get your Reach today</p>
			</div>
			<div className='products-container'>
				{products.map((product) => (
					<Product>{product}</Product>
				))}
			</div>
			<FooterBanner />
		</>
	);
};

export default Home;
