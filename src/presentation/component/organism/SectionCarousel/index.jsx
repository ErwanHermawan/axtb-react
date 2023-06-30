import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
					<img src="asset/image/dummy/banner-home.jpg" alt="" />
				</div>
				<div>
					<img src="asset/image/dummy/banner-about.jpg" alt="" />
				</div>
				<div>
					<img src="asset/image/dummy/banner-services.jpg" alt="" />
				</div>
				<div>
					<img src="asset/image/dummy/banner-product.jpg" alt="" />
				</div>
			</Slider>
		</div>
	);
};

export default SectionCarousel;
