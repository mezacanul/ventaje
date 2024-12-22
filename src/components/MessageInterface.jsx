import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/store/slices/messagesSlice";
import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FiFilter, FiShare2 } from "react-icons/fi";
import { PiChartLineUpBold } from "react-icons/pi";
import { PiChatCircleBold } from "react-icons/pi";
import hexToRgba from "@/utils/hexToRgba";
import InputPanel from "./MessageInterface/InputPanel";
import CircleIcon from "./common/CircleIcon";
import { useEffect, useRef } from "react";
import { MotionBox } from "./MotionBox";

export default function MessageInterface() {
    return (
        <Box minW={"100vw"} minH={"100vh"}>
            <HStack w={"100%"} h={"100%"} spacing={0}>
                <InsightsPanel />
                <RealTimeChat />
            </HStack>
        </Box>
    );
}

function InsightsPanel() {
    return (
        <VStack
            bg={"darkBlue"}
            h={"100vh"}
            maxW={"20vw"}
            justify={"space-between"}
            p={"1.5rem"}
        >
            {/* Insights Details  */}
            <HStack align={"flex-start"} justify={"space-between"} w={"100%"}>
                <InsightIcon
                    title={"Interact"}
                    details={"0"}
                    icon={<PiChartLineUpBold />}
                />

                <VStack align={"flex-start"}>
                    <InsightIcon
                        title={"Stage"}
                        details={"Stage 1"}
                        icon={<FiFilter />}
                    />
                    <InsightIcon
                        title={"Lead Origin"}
                        details={"Other"}
                        icon={<FiShare2 />}
                    />
                </VStack>
            </HStack>

            {/* Context Panels */}
            <VStack spacing={"1.5rem"}>
                <ContextPanel
                    title={"Converstaion Insights"}
                    icon={<PiChatCircleBold />}
                >
                    <Text>
                        The user greets with "hello friend" indicating a
                        friendly and Informal approach to starting a
                        conversation.
                    </Text>
                </ContextPanel>

                <ContextPanel
                    title={"Converstaion Insights"}
                    icon={<PiChatCircleBold />}
                >
                    <Text>
                        The user greets with "hello friend" indicating a
                        friendly and Informal approach to starting a
                        conversation.
                    </Text>
                </ContextPanel>
            </VStack>
        </VStack>
    );
}

function ContextPanel({ title, icon, children }) {
    return (
        <VStack bg={"greyBlue"} h={"38vh"} p={"1.5rem"}>
            <HStack mb={"1rem"}>
                <Text fontSize={"2rem"}>{icon}</Text>
                <Heading fontSize={"2rem"}>{title}</Heading>
            </HStack>
            {children}
        </VStack>
    );
}

function RealTimeChat() {
    const messages = useSelector((state) => state.messages);

    return (
        <Grid h="100vh" w={"100%"} templateRows="0.15fr 0.82fr 0.08fr">
            <Box bg={"greyBlue"}>
                <></>
            </Box>

            <MessagesContainer>
                {messages.map((message, i) => {
                    return (
                        <Message
                            key={i}
                            type={message.type}
                            author={message.author}
                            message={message.message}
                            time={message.time}
                        />
                    );
                })}
            </MessagesContainer>

            <InputPanel />
        </Grid>
    );
}

function MessagesContainer({ children }) {
    const boxRef = useRef(null);
    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.scrollTo({
                top: boxRef.current.scrollHeight, // Scroll to the bottom
                behavior: "smooth", // Smooth scrolling
            });
        }
    }, [messages]);

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
            p={"2rem"}
            bg={"purple"}
            bgGradient={"linear(155deg,rgb(196, 3, 255),rgb(9, 15, 43))"}
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

function Message({ type, author, message, time }) {
    return (
        <MotionBox
            // key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2}}
        >
            <VStack
                align={type == "incoming" ? "flex-start" : "flex-end"}
                w={"100%"}
            >
                <Box
                    alignSelf={type == "incoming" ? "flex-start" : "flex-end"}
                    bg={"purple"}
                    py={"1rem"}
                    px={"1.5rem"}
                    maxW={"28rem"}
                    mb={"0.5rem"}
                    borderRadius={"0.5rem"}
                    boxShadow={`${
                        type == "incoming" ? "-10px" : "10px"
                    } 10px 20px ${hexToRgba("#000000", 0.3)}`}
                >
                    <Text>{message}</Text>
                </Box>
                <Text px={"0.5rem"}>
                    {time} | {author}
                </Text>
            </VStack>
        </MotionBox>
    );
}

function InsightIcon({ icon, title, details }) {
    return (
        <HStack align={"center"} spacing={"1rem"}>
            <CircleIcon icon={icon} />

            <VStack align={"flex-start"} spacing={1}>
                <Text>{title}</Text>
                <Text as={"b"}>{details}</Text>
            </VStack>
        </HStack>
    );
}
