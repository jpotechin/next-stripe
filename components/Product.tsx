import React from 'react';

interface ProductProps {
	children?: React.ReactNode | React.ReactNode[];
}

const Product = ({ children }: ProductProps): JSX.Element => {
	return <div>{children}</div>;
};

export default Product;
