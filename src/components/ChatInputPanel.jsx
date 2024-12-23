import axios from "axios";
import CircleIcon from "@/components/common/CircleIcon";
import { useEffect, useRef, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import { FormControl, HStack, Input, Text } from "@chakra-ui/react";
import { addMessage } from "@/store/slices/messagesSlice";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@/store/slices/loadingSlice";
import getFormattedTime from "@/utils/getFormattedTime";

function initialGreeting(dispatch) {
    const initConfig = { type: "incoming", author: "🤖 Dev" };
    const init = [
        "Hello Human!",
        "This is a test for chat messaging. I have been cofigured to remember things in our conversation so anytime you can ask me to remember what have i learned about you!",
    ];

    setTimeout(() => {
        dispatch(setLoading(true));
    }, 1000);
    setTimeout(() => {
        dispatch(addMessage({ ...initConfig, message: init[0] }));
    }, 2000);
    setTimeout(() => {
        dispatch(addMessage({ ...initConfig, message: init[1] }));
        dispatch(setLoading(false));
    }, 3000);
}

const sendMessage = async (messages, payload) => {
    const prevMessages = messages.map((msg) => {
        return {
            role: msg.type == "incoming" ? "assistant" : "user",
            content: msg.message,
        };
    });

    try {
        const message = {
            role: "user",
            content: payload,
        }
        const res = await axios.post("/api/chatgpt", {
            // messages: [...prevMessages, message],
            messages: [...prevMessages, message],
        });
        console.log(res.data.choices[0].message.content); // Update state with the response
        return res.data.choices[0].message.content;
    } catch (error) {
        console.error("Error sending message:", error);
        return `Error sending message: ${error}`;
    }
};

export default function ChatInputPanel() {
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const messages = useSelector((state) => state.messages);

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
        dispatch(
            addMessage({
                type: "outgoing",
                author: "Guest",
                message: value,
                time: getFormattedTime(),
            })
        );
        setValue("");

        setTimeout(() => {
            dispatch(setLoading(true));
        }, 750);

        setTimeout(() => {
            sendMessage(messages, value).then((data) => {
                dispatch(setLoading(false));
                dispatch(
                    addMessage({
                        type: "incoming",
                        author: "🤖 ChatGPT 4o",
                        message: data,
                        time: getFormattedTime(),
                    })
                );
            });
        }, 1250);
    };

    function handleKeyUp(e) {
        if (e.key == "Enter") {
            handleSend();
        }
    }

    return (
        <HStack bg={"greyBlue"} px={{base:"1rem", xl:"2rem"}}>
            <Timer />
            
            <CircleIcon icon={<FiMessageSquare />} display={["none", "block"]}/>
            
            <InputField
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                value={value}
            />
            
            <SendButton onClick={handleSend} />
            
            <HStack align={"center"} display={{base:"none", xl:"flex"}}>
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
        <HStack>
            <Text fontSize={"1.5rem"}>
                <IoMdTime />
            </Text>
            <Text display={{base:"none", xl:"block"}}>00:00</Text>
        </HStack>
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
