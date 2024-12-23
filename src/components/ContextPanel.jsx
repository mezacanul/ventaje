import { GoPerson } from "react-icons/go";
import { VStack, HStack, Text, Flex } from "@chakra-ui/react"
import InsightIcon from "./common/InsightIcon"
import { PiChartLineUpBold, PiChatCircleBold } from "react-icons/pi"
import { FiFilter, FiShare2 } from "react-icons/fi"
import DetailsBox from "./DetailsBox"

export default function ContextPanel() {
    return (
        <VStack
            bg={"darkBlue"}
            h={"auto"}
            maxW={{base:"100vw", md: "35vw", lg:"30vw", xl:"20vw"}}
            justify={"space-between"}
            p={"1.5rem"}
        >
            {/* Insights Details  */}
            <Flex mb={"1rem"} flexDir={{base: "column", xl: "row"}} gap={{base:"1rem", xl:"0"}} align={"flex-start"} justify={"space-between"} w={"100%"}>
                <InsightIcon
                    title={"Interact"}
                    details={"0"}
                    icon={<PiChartLineUpBold />}
                />

                <VStack align={"flex-start"} spacing={{base: "1rem", xl: "0"}}>
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
            </Flex>

            {/* Context Panels */}
            <VStack spacing={"1.5rem"}>
                <DetailsBox
                    title={"Converstaion Insights"}
                    icon={<PiChatCircleBold />}
                >
                    <Text>
                        The user greets with "hello friend" indicating a
                        friendly and Informal approach to starting a
                        conversation.
                    </Text>
                </DetailsBox>

                <DetailsBox title={"Lead Profile"} icon={<GoPerson />}>
                    <Text as={"b"}>Demographics:</Text>
                    <Text>Age: 30</Text>
                    <Text>Gender: Male</Text>
                    <Text>Location: Mérida</Text>
                </DetailsBox>
            </VStack>
        </VStack>
    );
}