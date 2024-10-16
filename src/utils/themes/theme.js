import { createTheme } from "@mui/material";
import { CONSTANT } from "../constant/constant";

export const theme = createTheme({
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: 'gray', // Default icon color
                    '&.Mui-selected': {
                        color: CONSTANT.color.primary, // Color when selected
                    },
                },
            },
        },
    },
});