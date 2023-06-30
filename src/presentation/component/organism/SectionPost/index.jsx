import PersonalInfoCard from "presentation/component/molecule/PersonalInfoCard";

import style from "./style.module.scss";

const SectionPost = (props) => {
	const { title, data, error } = props;

	return (
		<div className={style.section}>
			<div className="container">
				<h2 className={style.title}>{title}</h2>
				{data !== null ? (
					<div className={style.list}>
						{data.map((val, idx) => (
							<div className={style.item} key={`pic${idx}`}>
								<PersonalInfoCard name={val.title} email={val.body} />
							</div>
						))}
					</div>
				) : null}
				{error !== null ? <p className={style.error}>{error}</p> : null}
			</div>
		</div>
	);
};

export default SectionPost;
