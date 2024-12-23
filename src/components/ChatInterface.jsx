import {
    Box,
    Flex,
    HStack,
} from "@chakra-ui/react";
import ContextPanel from "@/components/ContextPanel";
import RealTimeChat from "@/components/RealTimeChat";

export default function ChatInterface() {
    return (
        <Box minW={"100vw"} minH={"100vh"}>
            <Flex direction={["column-reverse", "row"]} w={"100%"} h={"100%"} spacing={0}>
                <ContextPanel />
                <RealTimeChat /> 
            </Flex>
        </Box>
    );
}