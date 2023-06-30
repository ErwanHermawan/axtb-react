// --- components
import { SectionPost } from "presentation/component";

// --- models
import { usePost } from "core/model/posts";

const WidgetPosts = () => {
	const { data: dataUser, error: errorUser } = usePost();

	return (
		<SectionPost title="New Posts" data={dataUser} error={errorUser?.message} />
	);
};

export default WidgetPosts;
