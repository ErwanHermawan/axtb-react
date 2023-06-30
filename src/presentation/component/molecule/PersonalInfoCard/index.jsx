import style from "./style.module.scss";

const PersonalInfoCard = (props) => {
	const { name, email, website, company } = props;

	return (
		<div className={style.card}>
			<h3 className={style.name}>{name}</h3>
			<p className={style.email}>{email}</p>
			<p className={style.website}>{website}</p>
			<p className={style.company}>{company}</p>
		</div>
	);
};

export default PersonalInfoCard;
