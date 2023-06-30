import { Logo } from "presentation/component";
import { Link } from "react-router-dom";
import navMenu from "./navigationMenu";

import style from "./style.module.scss";

// --- state
import useCart from "core/state/cart";

const Header = ({ page }) => {
	const { totalCart } = useCart();
	return (
		<div className={style.header}>
			<div className="container">
				<div className={style.headerWrapper}>
					<Link to="/" className={style.headerLogo}>
						<Logo className={style.headerLogoImg} name="baron" />
					</Link>
					<ul className={style.headerNav}>
						{navMenu.nav.map((val, idx) => (
							<li key={`mn-${idx}`} className={style.headerNavItem}>
								<Link
									className={
										val.active === page
											? style.headerNavLink + " " + style.headerNavLinkActive
											: style.headerNavLink
									}
									to={val.to}
								>
									{val.menu}
								</Link>
							</li>
						))}
					</ul>
					<div className={style.headerHastag}>
						<span>{totalCart}</span>
						<p className={style.headerHastagText}>#TAKETHELEAP!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
