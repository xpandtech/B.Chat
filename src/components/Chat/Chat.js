import React, { useState, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "context/AuthContext.js";
import ChatCard from "./ChatList/ChatCard";
import ChatHeader from "./ChatFeed/ChatHeader";
import IsTyping from "./ChatFeed/IsTyping";
import ChatSettingsColumn from "./ChatSettings/ChatSettingsColumn";
import axios from "axios";
import NewChatForm from './ChatList/NewChatForm'
import NewMessageForm from './ChatFeed/NewMessageForm/NewMessageForm'
import MessageBubble from './ChatFeed/Bubble/MessageBubble'
import loadingAnimation from "../../images/loading.svg";
import ChatList from './ChatList/ChatList'


export const Chat = () => {
  const { userObject, convertedName } = useAuth();
  const [newAccountStatus, setNewAccountStatus] = useState(false);
  const [chatHeight, setChatHeight] = useState("95vh");

  useEffect(() => {
    if (window.screen.width < 1200) {
      setChatHeight("100vh")
    }

  }, [])

  useEffect(() => {
    // This hook creates new Chat Engine account if there is none
    const data = {
      username: convertedName,
      secret: userObject.uid,
    };
    const config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": '874f0042-0d30-44e6-8ff8-4cc422c8b1ab',
      },
      data: data,
    };

    axios(config)
      .then(() => {
        // This function adds sample conversation for a new account
        addDefaultChat(encodeURIComponent("sample account"));
        setNewAccountStatus(true);
      })
      .catch(() => {
        console.log("This account is already created");
        setNewAccountStatus(true);
      });
  }, [addDefaultChat, convertedName, userObject.uid]);


  function addDefaultChat(otherName) {
    var myHeaders = new Headers();
    myHeaders.append("Project-ID", '45f52391-343b-4f07-b8c5-694e0beebd88');
    myHeaders.append("User-Name", convertedName);
    myHeaders.append("User-Secret", userObject.uid);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      is_direct_chat: true,
      usernames: [convertedName, otherName],
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      contentType: "application/json; charset=utf-8",
    };

    fetch("https://api.chatengine.io/chats/", requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="chat-container">
      {convertedName && userObject && newAccountStatus ? (
        <ChatEngine
          offset={2}
          projectID="45f52391-343b-4f07-b8c5-694e0beebd88"
          userName='John'
          userSecret='123'
          height={chatHeight}
          renderChatList={(chatAppState) => { return <ChatList chatAppState={chatAppState} /> }}
          renderChatCard={(chat, index) => { return <ChatCard chat={chat} index={index} /> }}
          renderNewChatForm={(creds) => { return <NewChatForm creds={creds} /> }}
          renderChatHeader={(creds) => { return <ChatHeader creds={creds} /> }}
          renderIsTyping={(typers) => { return <IsTyping typers={typers} /> }}
          renderChatSettings={() => { return <ChatSettingsColumn/> }}
          renderNewMessageForm={(creds, chatId) => { return <NewMessageForm creds={creds} chatId={chatId} /> }}
          renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => { return <MessageBubble creds={creds} chat={chat} lastMessage={lastMessage} message={message} nextMessage={nextMessage} /> }}
          onConnect={(creds) => console.log(creds)}
			
        
        
        />
      ) : (
        <div className="loading-image main-loader"><img src={loadingAnimation} alt="" /></div>
      )}
    </div>
  );
};
