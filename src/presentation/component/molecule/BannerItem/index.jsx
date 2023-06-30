import style from "./style.module.scss";

const BannerItem = ({ page, data }) => {
	const { image, title, hastag, subtitle, description } = data;

	let modifier = style.banner;
	if (page === "about") {
		modifier += " " + style.bannerAbout;
	} else if (page === "services" || page === "product") {
		modifier += " " + style.bannerServices;
	}

	return (
		<div className="container">
			<div className={modifier}>
				<div className={style.bannerImage}>
					<img src={`asset/image/dummy/${image}`} alt={title} />
				</div>
				<div className={style.bannerText}>
					{hastag && (
						<div className={style.bannerHastag}>
							<p className={style.bannerHastagText}>#TAKETHELEAP!</p>
						</div>
					)}
					{subtitle && <p className={style.bannerSubtitle}>{subtitle}</p>}
					<h1
						className={style.bannerTitle}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					{description && (
						<p className={style.bannerDescription}>{description}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
