import { ProductData } from './sanity';
export interface StoreContextType {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
	cartItems: Array<ProductData>;
	totalPrice: number;
	totalQuantities: number;
	qty: number;
	incQty: number;
	decQty: number;
	onAdd: (product: ProductData, quantity: number) => void;
	toggleCartItemQuanitity: (id: any, value: any) => void;
	onRemove: (product: ProductData) => void;
	setCartItems: React.Dispatch<React.SetStateAction<ProductData[]>>;
	setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
	setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
}
