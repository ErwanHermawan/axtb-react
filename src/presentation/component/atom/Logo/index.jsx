// import baron from "asset/image/logo/baron.svg";
// import baronLetter from "asset/image/logo/baron-letter.svg";

const Logo = ({ className, name = "baron" }) => {
	const imageDatas = {
		baron: "asset/image/logo/baron.svg",
		"baron-letter": "asset/image/logo/baron-letter.svg",
	};

	return <img className={className} src={imageDatas[name]} alt={name} />;
};

export default Logo;
