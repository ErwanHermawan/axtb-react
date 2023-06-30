// --- component
import { Header, Footer } from "presentation/component";

// --- styles
import style from "./style.module.scss";

function Default({ page, children }) {
	return (
		<>
			<Header page={page} />
			<div className={style.main}>{children}</div>
			<Footer />
		</>
	);
}

export default Default;
