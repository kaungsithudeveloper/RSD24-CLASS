import { AppBar, Toolbar, Typography,IconButton } from "@mui/material";
import {
    Checklist as CheckListIcon,
    ClearAll as ClearAllIcon,
} from "@mui/icons-material"

export default function Header({count}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <CheckListIcon>
                    <Typography variant="h6" sx={{ ml: 2, flexGrow: 1}}>
                        CheckList
                    </Typography>
                    <IconButton><ClearAllIcon /></IconButton>
                </CheckListIcon>
            </Toolbar>
        </AppBar>
    )
}