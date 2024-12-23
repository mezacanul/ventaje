import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import MessagesContainer from "./MessagesContainer";
import Message from "./Message";
import ChatInputPanel from "./ChatInputPanel";

export default function RealTimeChat() {
    const isLoading = useSelector((state) => state.loading)
    const messages = useSelector((state) => state.messages)

    return (
        <Grid h="100vh" w={{base:"100vw", lg:"80vw", xl:"100%"}} templateRows="0.15fr 0.82fr 0.08fr">
            <ChatHeader />

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
                {isLoading == true && (
                    <Message
                        key={0}
                        type={"assistant-isTyping"}
                    />
                )}
            </MessagesContainer>

            <ChatInputPanel />
        </Grid>
    );
}