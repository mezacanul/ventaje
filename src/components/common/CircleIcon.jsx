import { Circle, Text } from "@chakra-ui/react";

export default function CircleIcon({ icon, ...props }) {
    return (
        <Circle
            _hover={{ bg: "purple", cursor: "pointer" }}
            transition={"all 0.3s"}
            bg={"lightGreyBlue"}
            p={"0.7rem"}
            {...props}
        >
            <Text fontSize={"1.3rem"}>{icon}</Text>
        </Circle>
    );
}
