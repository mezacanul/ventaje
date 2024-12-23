import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@/store/slices/loadingSlice";

export default function MessagesContainer({ children }) {
    const boxRef = useRef(null);
    const messages = useSelector((state) => state.messages);
    const isLoading = useSelector((state) => state.loading);
    const dispatch = useDispatch();


    useEffect(() => {
        // if(isLoading == true){
            if (boxRef.current) {
                boxRef.current.scrollTo({
                    top: boxRef.current.scrollHeight, // Scroll to the bottom
                    behavior: "smooth", // Smooth scrolling
                });
            }
        // } 
    }, [messages, isLoading]);

    return (
        <Box
            ref={boxRef}
            display={"flex"}
            flexDir={"column"}
            // justifyContent={"flex-end"}
            rowGap={"1.2rem"}
            // maxH={"80vh"}
            overflowY="auto"
            h="100%" // Ensure it takes the full height of its grid cell
            maxH="100%" // Constrain its height
            py={"2rem"}
            px={["1rem", "2rem"]}
            bg={"purple"}
            bgGradient={"linear(155deg,rgb(126, 209, 233),rgb(1, 26, 44))"}
            // sx={{
            //     "::-webkit-scrollbar": {
            //         display: "none", // Hides the scrollbar in WebKit-based browsers
            //     },
            //     "-ms-overflow-style": "none", // Hides scrollbar in IE and Edge
            //     "scrollbar-width": "none", // Hides scrollbar in Firefox
            // }}
        >
            {children}
        </Box>
    );
}