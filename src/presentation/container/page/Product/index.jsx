// --- components
import { Default, HeroBanner } from "presentation/component";

// --- datas
import BannerData from "./BannerData";

const Product = () => {
	return (
		<>
			<Default page="product">
				<HeroBanner page="product" data={BannerData} />
			</Default>
		</>
	);
};

export default Product;
