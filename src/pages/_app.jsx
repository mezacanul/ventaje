import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "@/style/theme";
import { Provider } from "react-redux";
import { store } from "@/store/index"; // Create this file

export default function App({ Component, pageProps, router }) {
    return (
        <>
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    {/* <AnimatePresence mode="wait" initial={true}> */}
                    <main>
                        <Component {...pageProps} key={router.route} />
                    </main>
                    {/* </AnimatePresence> */}
                </ChakraProvider>
            </Provider>
        </>
    );
}
