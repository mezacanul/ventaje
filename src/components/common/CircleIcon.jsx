import { Circle, Text } from "@chakra-ui/react";

export default function CircleIcon({ icon }) {
    return (
        <Circle bg={"lightGreyBlue"} p={"0.7rem"}>
            <Text fontSize={"1.3rem"}>{icon}</Text>
        </Circle>
    );
}