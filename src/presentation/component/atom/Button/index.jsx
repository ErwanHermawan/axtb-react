import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Button = (props) => {
	const { variant, ghost, children, link } = props;

	let variantStyle = style.button;
	if (variant === "primary") {
		variantStyle += " " + style.buttonPrimary;
	} else if (variant === "secondary") {
		variantStyle += " " + style.buttonSecondary;
	} else if (variant === "tertiary") {
		variantStyle += " " + style.buttonTertiary;
	}

	if (ghost) {
		variantStyle += " " + style.buttonGhost;
	}

	if (link) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
		</button>
	);
};

export default Button;
