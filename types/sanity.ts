interface SanityImg {
	asset: {
		_ref: string;
		_type: string;
	};
	_key: string;
	_type: string;
}

export interface ProductData {
	details: string;
	image: Array<SanityImg>;
	name: string;
	price: number;
	slug: {
		_type: string;
		current: 'string';
	};
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	updatedAt: string;
}

export interface BannerData {
	buttonText: string;
	image: Array<SanityImg>;
	desc: string;
	discount: string;
	largeText1: string;
	largeText2: string;
	midText: string;
	product: string;
	saleTime: string;
	smallText: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	updatedAt: string;
}
