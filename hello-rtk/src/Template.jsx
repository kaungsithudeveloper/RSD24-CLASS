import Header from "./Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Template() {
	return (
		<div role="main">
			<Header
				
			/>
            <Container sx={{ mt: 4 }} maxWidth="sm">
                <Outlet />
            </Container>
		</div>
	);
}
