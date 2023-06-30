// --- components
import { Default, HeroBanner } from "presentation/component";

// --- datas
import BannerData from "./BannerData";

const About = () => {
	return (
		<>
			<Default page="about">
				<HeroBanner page="about" data={BannerData} />
			</Default>
		</>
	);
};

export default About;
