// --- components
import { Default, HeroBanner } from "presentation/component";

// --- datas
import BannerData from "./BannerData";

const Services = () => {
	return (
		<>
			<Default page="services">
				<HeroBanner page="services" data={BannerData} />
			</Default>
		</>
	);
};

export default Services;
