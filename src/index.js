import React from "react";
import ReactDOM from "react-dom/client";

// -- style
import "core/style/app.scss";

import App from "./presentation/container/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
