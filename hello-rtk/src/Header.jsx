import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import {
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
	Checklist as ChecklistIcon,
	DeleteSweep as ClearAllIcon,
} from "@mui/icons-material";

import { useContext } from "react";

import { ThemeContext } from "./Theme";
import { useSelector } from "react-redux";

export default function Header({ count, clear }) {

	const list = useSelector (state => state.todo.items);

	const {mode , setMode} = useContext(ThemeContext);
	return (
		<AppBar position="static">
			<Toolbar>
				<Badge badgeContent={list.filter(item => !item.done).length} color="error">
					<ChecklistIcon />
				</Badge>
				<Typography
					variant="h6"
					sx={{ ml: 3, flexGrow: 1 }}>
					Checklist
				</Typography>
				<>
					{mode === "dark" ? (
						<IconButton color="inherit" onClick={() => {
							setMode("light");
						}}>
							<LightModeIcon />
						</IconButton>
					):(
						<IconButton color="inherit" onClick={() => {
							setMode("dark");
						}}>
							<DarkModeIcon />
						</IconButton>
					)}

					<IconButton onClick={() => {}} color="inherit">
						<ClearAllIcon />
					</IconButton>
				</>
				
			</Toolbar>
		</AppBar>
	);
}
