import axios from "axios";
import CircleIcon from "../common/CircleIcon";
import { useEffect, useRef, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import scaleEffect from "@/utils/scaleEffect";
import { MdOutlineShowChart } from "react-icons/md";
import { FormControl, HStack, Input, Text } from "@chakra-ui/react";
import { addMessage } from "@/store/slices/messagesSlice";
import { useDispatch } from "react-redux";
import getFormattedTime from "@/utils/getFormattedTime";

function initialGreeting(dispatch) {
    const initConfig = { type: "incoming", author: "🤖 Dev" };
    const init = [
        "Hello Human!",
        "This is a test for chat messaging.\nYou can send a message to try the UI",
    ];
    setTimeout(() => {
        dispatch(addMessage({ ...initConfig, message: init[0] }));
    }, 1000);
    setTimeout(() => {
        dispatch(addMessage({ ...initConfig, message: init[1] }));
    }, 2000);
}

export default function InputPanel() {
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    useEffect(() => {
        setIsMounted(true);

        if (isMounted == true) {
            initialGreeting(dispatch);
            // console.log(process.env.OPENAI_API_KEY);

            // console.log(completion.choices[0].message);
            // fetchChatGPTResponse("Hello chat, this is an API testing");
        }
    }, [isMounted]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSend = () => {
        const sendMessage = async (payload) => {
            try {
                const message = [
                    {
                        role: "user",
                        content: payload,
                    },
                ];
                const res = await axios.post("/api/chatgpt", {
                    messages: message,
                });
                console.log(res.data.choices[0].message.content); // Update state with the response
                return res.data.choices[0].message.content;
            } catch (error) {
                console.error("Error sending message:", error);
                return `Error sending message: ${error}`;
            }
        };

        dispatch(
            addMessage({
                type: "outgoing",
                author: "Guest",
                message: value,
                time: getFormattedTime(),
            })
        );
        setValue("");

        sendMessage(value).then((data) => {
            setTimeout(() => {
                dispatch(
                    addMessage({
                        type: "incoming",
                        author: "🤖 ChatGPT 4o",
                        // message: "Automatic Reply",
                        message: data,
                        time: getFormattedTime(),
                    })
                );
            }, 750);
        });
    };

    function handleKeyUp(e) {
        if (e.key == "Enter") {
            handleSend();
        }
    }

    return (
        <HStack bg={"greyBlue"} px={"2rem"}>
            <Timer />
            <CircleIcon icon={<FiMessageSquare />} />
            <InputField
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                value={value}
            />
            <SendButton onClick={handleSend} />
            <HStack align={"center"}>
                <Text w={"5rem"}>Go to Chat</Text>
                <RiArrowRightSLine />
            </HStack>
        </HStack>
    );
}

function SendButton({ onClick }) {
    return (
        <Text
            as={"button"}
            onClick={onClick}
            borderRadius={"0.4rem"}
            // {...scaleEffect}
            _hover={{ color: "purple", bg: "white", cursor: "pointer" }}
            transition={"all 0.3s"}
            ml={"-1rem"}
            zIndex={1}
            boxShadow={"0px 0px 1px white"}
            px={"1.2rem"}
            py={"0.5rem"}
            bg={"purple"}
            fontSize={"1.2rem"}
        >
            <FiSend />
        </Text>
    );
}

function Timer() {
    return (
        <>
            <Text fontSize={"1.5rem"}>
                <IoMdTime />
            </Text>
            <Text>00:00</Text>
        </>
    );
}

function InputField({ onChange, value, onKeyUp }) {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input in the child component on load
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <FormControl isInvalid={false}>
            <Input
                ref={inputRef}
                required={true}
                bg={"lightGreyBlue"}
                value={value}
                onChange={onChange}
                placeholder="Enter name"
                color={"white"}
                _placeholder={{
                    color: "white",
                }}
                onKeyUp={onKeyUp}
            />
        </FormControl>
    );
}
