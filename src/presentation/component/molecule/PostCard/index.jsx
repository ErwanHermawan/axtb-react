import style from "./style.module.scss";

const PostCard = (props) => {
	const { title, body } = props;

	return (
		<div className={style.card}>
			<h3 className={style.name}>{title}</h3>
			<p className={style.email}>{body}</p>
		</div>
	);
};

export default PostCard;
