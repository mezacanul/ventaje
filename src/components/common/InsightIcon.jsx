import { HStack, VStack, Text } from "@chakra-ui/react";
import CircleIcon from "@/components/common/CircleIcon"

export default function InsightIcon({ icon, title, details }) {
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