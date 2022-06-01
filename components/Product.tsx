import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { ProductData } from '../types/sanity';

interface ProductProps {
	product: ProductData;
}

const Product = ({
	product: { image, name, slug, price },
}: ProductProps): JSX.Element => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className='product-card'>
					<img
						src={urlFor(image && image[0])}
						width={250}
						height={250}
						alt={name}
						className='product-image'
					/>
				</div>
			</Link>
		</div>
	);
};

export default Product;
