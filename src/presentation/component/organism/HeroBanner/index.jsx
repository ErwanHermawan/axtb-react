import { BannerItem } from "presentation/component";
import style from "./style.module.scss";

const HeroBanner = ({ page, data }) => {
	return (
		<div className={style.heroBanner}>
			<BannerItem page={page} data={data} />
		</div>
	);
};

export default HeroBanner;
