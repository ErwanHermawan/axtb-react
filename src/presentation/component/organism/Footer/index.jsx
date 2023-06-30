import { Logo } from "presentation/component";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	const dataFooter = {
		subscriber: {
			title: "Berlangganan Newsletter!",
			description:
				"Dapatkan informasi terbaru tentang layanan, produk dan promo BARON & CO dengan mengisi emailmu!",
		},
		logo: {
			src: "logo-primary.svg",
			to: "/",
			alt: "Baron & Co",
		},
		about:
			"BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan hasil maksimal. <span>Melangkah tanpa ragu, melangkah yang berarti. TAKE THELEAP!</span>",
		nav: [
			{
				title: "Tentang Kami",
				menu: [
					{
						to: "about",
						text: "Tentang Kami",
						classActive: "about",
					},
					{
						to: "gallery",
						text: "Galeri",
						classActive: "gallery",
					},
					{
						to: "contact",
						text: "Kontak Kami",
						classActive: "contact",
					},
					{
						to: "sitemap",
						text: "Sitemap",
						classActive: "sitemap",
					},
				],
			},
			{
				title: "Layanan",
				menu: [
					{
						to: "services",
						text: "Layanan",
						classActive: "services",
					},
					{
						to: "process",
						text: "Proses",
						classActive: "process",
					},
					{
						to: "product",
						text: "Produk",
						classActive: "product",
					},
				],
			},
		],
		office: {
			title: "Jam Buka",
			openHour: "9 AM - 10 PM, Senin-Sabtu",
			address:
				"Jl. Raya Cipasung RT.09 / RW.03 Kecamatan Darma, Kabupaten Kuningan, Jawa Barat 45562",
		},
		sosmed: [
			{
				to: "tiktok.com",
				icon: "tiktok.svg",
			},
			{
				to: "twitter.com",
				icon: "twitter.svg",
			},
			{
				to: "instagram.com",
				icon: "instagram.svg",
			},
			{
				to: "facebook.com",
				icon: "facebook.svg",
			},
			{
				to: "linkedin.com",
				icon: "linkedin.svg",
			},
		],
	};

	return (
		<div className={style.footer}>
			<div className="container">
				<div className={style.footerSubscriber}>
					<div className={style.footerSubscriberText}>
						<h3 className={style.footerSubscriberTitle}>
							{dataFooter.subscriber.title}
						</h3>
						<p className={style.footerSubscriberDesc}>
							{dataFooter.subscriber.description}
						</p>
					</div>
					<div className={style.footerSubscriberForm}>
						<input
							type="text"
							className={style.footerSubscriberInput}
							placeholder="Masukkan alamat emailmu!"
						/>
						<button type="button" className={style.footerSubscriberButton}>
							Berlanggan
						</button>
					</div>
				</div>
				<div className={style.footerContent}>
					<div className={style.footerNav}>
						{dataFooter.nav.map((val, idx) => (
							<div key={`li-${idx}`} className={style.footerNavList}>
								<h4 className={style.footerNavTitle}>{val.title}</h4>
								<ul className={style.footerNavMenu}>
									{val.menu.map((vMenu, iMenu) => (
										<li key={`mn-${iMenu}`} className={style.footerNavItem}>
											<Link to={vMenu.to} className={style.footerNavLink}>
												{vMenu.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
						<div className={style.footerNavList}>
							<h4 className={style.footerNavTitle}>
								{dataFooter.office.title}
							</h4>
							<ul className={style.footerNavMenu}>
								<li className={style.footerNavItem}>
									<span className={style.footerNavOpenHour}>
										{dataFooter.office.openHour}
									</span>
								</li>
								<li className={style.footerNavItem}>
									{dataFooter.office.address}
								</li>
							</ul>
						</div>
					</div>
					<div className={style.footerAbout}>
						<Link to="/" className={style.footerLogo}>
							<Logo className={style.footerLogoImg} name="baron-letter" />
						</Link>
						<p className={style.footerDesc}>
							BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan
							hasil maksimal.{" "}
							<span>
								Melangkah tanpa ragu, melangkah yang berarti. TAKE THE LEAP!
							</span>
						</p>
					</div>
				</div>
				<div className={style.footerSosmed}>
					<p className={style.footerSosmedTitle}>Find and Follow Us</p>
					{dataFooter.sosmed.map((val, idx) => (
						<div key={`so-${idx}`} className={style.footerSosmedItem}>
							<Link to={val.to} className={style.footerSosmedLink}>
								<img
									src={"asset/image/icon/" + val.icon}
									alt={val.icon}
									className={style.footerSosmedIcon}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className={style.footerBottom}>
				<div className="container">
					<p className={style.footerDesign}>
						Design & Develop by <span>Bilik Media</span>
					</p>
					<p className={style.footerCopyRight}>
						&copy; 2023 BARON & CO. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
