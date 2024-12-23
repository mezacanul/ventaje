import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function DetailsBox({ title, icon, children }) {
    return (
        <VStack
            bg={"greyBlue"}
            h={{base: "38vh", md: "33vh", lg: "38vh"}}
            p={"1.5rem"}
            align={"flex-start"}
            w={"100%"}
        >
            <HStack mb={"1rem"}>
                <Text fontSize={"2rem"}>{icon}</Text>
                <Heading fontSize={{base: "2rem", md: "1.5rem", lg: "2rem"}}>{title}</Heading>
            </HStack>

            <VStack align={"flex-start"}>{children}</VStack>
        </VStack>
    );
}
