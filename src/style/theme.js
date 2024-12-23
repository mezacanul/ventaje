// Create a custom theme
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        // base: '0em',
        // md: "480px",
        // lg: "1024px",
    },
    colors: {
        black: "#000000",
        dark: "#141414",
        white: "#FFFFFF",
        light: "#f0f0f0",
        darkBlue: "rgb(16, 20, 22)",
        greyBlue: "rgb(22, 46, 65)",
        lightGreyBlue: "rgb(73, 138, 155)",
        purple: "rgb(6, 80, 100)",
    },
    styles: {
        global: {
            body: {
                bg: "dark",
                color: "white",
            },
        },
    },
    components: {
        // Dashboard: {
        //     baseStyle: {
        //         color: "black", // Default text color for the Dashboard
        //     },
        // },
        Text: {
            baseStyle: {
                // fontSize: "md", // Default size for Text
            },
            sizes: {
                // xs: { fontSize: "16px" },
                // sm: { fontSize: "18px" },
                // md: { fontSize: "24px" }, // Default when fontSize="md"
                // lg: { fontSize: "32px" },
                // xl: { fontSize: "38px" },
            },
            defaultProps: {
                // size: {base: "sm", xl: "md"}, // Set the default size
            },
        },
        Heading: {
            baseStyle: {
                fontWeight: "400", // Default style for headings
            },
            sizes: {
                // sm: { fontSize: "34px" },
                // md: { fontSize: "40px" }, // Default when fontSize="md"
                // lg: { fontSize: "56px" },
                // xl: { fontSize: "72px" },
            },
            // defaultProps: {
            //     size: {base: "md", md: "lg", xl: "xl"}, // Set the default size
            // },
        },
    },
});

export default theme;
