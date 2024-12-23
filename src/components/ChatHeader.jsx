import { Button, Circle, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import CircleIcon from "./common/CircleIcon";
import { HiOutlinePhone } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import hexToRgba from "@/utils/hexToRgba";

export default function ChatHeader() {
    return (
        <Flex
            flexDir={["column", "row"]}
            bg={"greyBlue"}
            justify={["center", "space-between"]}
            align={["flex-start", "center"]}
            px={{base: "1rem", xl:"2rem"}}
            boxShadow={`0px 5px 20px ${hexToRgba("#000000", 0.3)}`}
            zIndex={2}
        >
            <HStack spacing={"1rem"}>
                <Circle
                    bgImage={"/profile.jpg"}
                    bgSize={"cover"}
                    p={{base: "2.1rem", md:"2.4rem", xl: "2.5rem"}}
                />

                <VStack align={"flex-start"}>
                    <Heading>User 1</Heading>
                    <Text>Product: product 1</Text>
                </VStack>
            </HStack>

            <VStack align={"flex-end"}>
                <VStack align={"self-end"} display={{base:"none", md:"flex"}}>
                    <Text as={"b"}>Product 1</Text>
                    <Text>Created: 10/12/2024</Text>
                </VStack>

                <HStack display={{base:"none", xl:"flex"}}>
                    <HStack>
                        <CircleIcon icon={<HiOutlinePhone />} />
                        <CircleIcon icon={<IoDocumentTextOutline />} />
                        <CircleIcon icon={<FaXmark />} />
                        <CircleIcon icon={<IoMdInformationCircleOutline />} />
                        <CircleIcon icon={<RiArrowLeftSLine />} />
                    </HStack>
                    <Button
                        _hover={{
                            color: "purple",
                            bg: "white",
                        }}
                        p={"1.5rem"}
                        bg={"purple"}
                        color={"white"}
                    >
                        View All Chats
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    );
}