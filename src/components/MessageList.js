import React from "react";
import "../App.css";
import Message from "./Message";

const MessageList = props => {
  return props.messages.map(message => {
    return (
      <Message
        message={message}
        messageRead={props.messageRead}
        messageSelected={props.messageSelected}
      />
    );
  });
};

export default MessageList;
