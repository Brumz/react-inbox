import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import MessageList from "./components/MessageList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [1, 2, 3]
    };
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:8082/api/messages");
    let myJson = await response.json();
    this.setState({
      messages: myJson
    });
  }

  markAsReadButtonClicked = () => {
    console.log("markAsReadButtonClicked");
    const selectedMessages = this.state.messages.filter(
      message => message.selected === true
    );
    console.log("selectedMessages", selectedMessages);
    selectedMessages.forEach(message => this.messageRead(message.id));
  };

  messageSelected = async id => {
    console.log("messageSelected", id);

    const updatedMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected;
      }
      return message;
    });
    this.setState({
      messages: updatedMessages
    });
  };

  messageRead = async id => {
    console.log("messageRead", id);

    let message = {
      messageIds: [id],
      command: "read",
      read: true
    };

    const result = await fetch("http://localhost:8082/api/messages", {
      method: "PATCH",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    const updatedMessages = this.state.messages.map(message => {
      if (message.id === id) {
        message.read = true;
      }
      return message;
    });
    this.setState({
      messages: updatedMessages
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar markAsReadButtonClicked={this.markAsReadButtonClicked} />
        <MessageList
          messages={this.state.messages}
          messageRead={this.messageRead}
          messageSelected={this.messageSelected}
        />
      </div>
    );
  }
}

export default App;
