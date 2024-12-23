import { Box, Text, VStack } from "@chakra-ui/react";
import { MotionBox } from "@/components/common/MotionBox";
import hexToRgba from "@/utils/hexToRgba";
import { BsThreeDots } from "react-icons/bs";

export default function Message({ type, author, message, time }) {
    return (
        <MotionBox
            // key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            // mt={type == "assistant-isTyping" ? "auto" : "initial"}
        >
            <VStack
                align={
                    type == "incoming" || type == "assistant-isTyping"
                        ? "flex-start"
                        : "flex-end"
                }
                w={"100%"}
            >
                <Box
                    alignSelf={
                        type == "incoming" || type == "assistant-isTyping"
                            ? "flex-start"
                            : "flex-end"
                    }
                    bg={"rgb(2, 45, 75)"}
                    // bgGradient="linear(45deg,rgb(175, 119, 5) 0%,rgb(200, 155, 65) 100%)"
                    py={"1rem"}
                    px={"1.5rem"}
                    maxW={"28rem"}
                    mb={"0.5rem"}
                    borderRadius={"0.5rem"}
                    boxShadow={`${
                        type == "incoming" ? "-10px" : "10px"
                    } 10px 20px ${hexToRgba("#000000", 0.3)}`}
                >
                    <Text>
                        {type == "assistant-isTyping" ? (
                            <BsThreeDots />
                        ) : (
                            message
                        )}
                    </Text>
                </Box>

                {type != "assistant-isTyping" && (
                    <Text px={"0.5rem"}>
                        {time} | {author}
                    </Text>
                )}
            </VStack>
        </MotionBox>
    );
}