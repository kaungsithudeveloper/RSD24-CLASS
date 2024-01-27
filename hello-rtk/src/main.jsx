import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter.jsx";
import Theme from "./Theme.jsx";

import {Provider} from "react-redux"
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme />
		</Provider>
        
	</React.StrictMode>
);
