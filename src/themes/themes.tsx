import { createTheme } from "@mui/material"
import { purple, teal } from "@mui/material/colors"

export const mainTheme = createTheme({
    palette: {
        background: {
            default: '#009688'
        },
        primary: purple,
        secondary: teal
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: '#482257',
                    color: '#E6E6E6'
                },   
            }
        }
    }
})