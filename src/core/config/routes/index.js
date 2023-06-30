import Home from "presentation/container/page/Home";
import About from "presentation/container/page/About";
import Services from "presentation/container/page/Services";
import Product from "presentation/container/page/Product";
import Gallery from "presentation/container/page/Gallery";
import Contact from "presentation/container/page/Contact";
import NotFound from "presentation/container/page/NotFound";

const routeConfig = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/services",
		element: <Services />,
	},
	{
		path: "/product",
		element: <Product />,
	},
	{
		path: "/gallery",
		element: <Gallery />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
];

export default routeConfig;
