import Header from "./Header";

import { Container } from "@mui/material";

import { Outlet } from "react-router-dom";

export default function AppRoot() {
    
  
    return (
		<div role="main">
			<Header 
               
            count={0} />
			<Container maxWidth="sm" sx={{ mt: 4 }}>
				<Outlet />
			</Container>
		</div>
	);
}
