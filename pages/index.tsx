import type { NextPage } from 'next';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import { ProductData, BannerData } from '../types/sanity';

interface HomeProps {
	productData: Array<ProductData>;
	bannerData: Array<BannerData>;
}

const Home: NextPage<HomeProps> = ({ productData, bannerData }: HomeProps) => {
	return (
		<>
			<HeroBanner heroBanner={bannerData[0]} />
			{console.log('bannerData', bannerData)}
			<div className='products-heading'>
				<h2>Best Selling Products</h2>
				<p>Get your Reach today</p>
			</div>
			<div className='products-container'>
				{productData?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</>
	);
};

export const getServerSideProps = async () => {
	const productQuery = '*[_type == "product"]';
	const productData: Array<ProductData> = await client.fetch(productQuery);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData: Array<BannerData> = await client.fetch(bannerQuery);

	return {
		props: { productData, bannerData },
	};
};

export default Home;
