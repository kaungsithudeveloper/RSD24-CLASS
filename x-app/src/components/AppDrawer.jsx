import {
    Drawer,
    Box,
    Avator,
    Typography,
} from "@mui/material";

import { useUIState } from "../providers/UIStateProvider";
import {pink, blue, grey} from "@mui/material/colors"

export default function AppDrawer() {
    const { openDrawer, setOpenDrawer } = useUIState();

    return <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 300 }}>
            <Avator 
            sx={{
                width:200,
                bgcolor: "banner.background",
                display:"flex",
                flexDirection: "row",
                alignItems: "flex-end",
                p:3,
            }
            } >
                A
            </Avator>
        </Box>
    </Drawer>
}
