import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../store/hooks";

const Messages = ({ userId, imageUrl }) => {
  const { messages } = useAppSelector((state) => state);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-card overflow-auto p-4 grid gap-4">
      {messages.map((message) => (
        <Message
          key={message.id}
          messageItem={message}
          userId={userId}
          userImage={imageUrl}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const Message = ({ messageItem, userId, userImage }) => {
  const randomImageUrl = `https://i.pravatar.cc/150?img=${
    Math.floor(Math.random() * 70) + 1
  }`;

  return (
    <div
      className={`flex items-start mb-4 ${
        messageItem.userId === userId ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex items-center">
        <div className="bg-white rounded-lg p-4 shadow-md grid grid-cols-12 gap-4">
          <div className="col-span-1">
            <img
              src={messageItem.userId === userId ? userImage : randomImageUrl}
              alt="user avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
          </div>
          <div className="col-span-8 flex items-center ">
            <div className="text-sm font-semibold text-gray-900 text-center">
              {messageItem.userName}
            </div>
            <div className="text-xs text-gray-500 ml-5">{messageItem.time}</div>
          </div>
          <div className="col-span-3 flex justify-end ">
            {messageItem.userId === userId ? (
              <div className="flex">
                <button
                  className="flex items-center text-blue-500 text-sm font-medium"
                  style={{ color: "#c9203f" }}
                >
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios-glyphs/30/c9203f/filled-trash.png"
                    alt="left2"
                    className="mr-2"
                  />
                  Delete
                </button>
                <button
                  className="flex items-center text-blue-500 text-sm font-medium ml-6"
                  style={{ color: "#8B5CF6" }}
                >
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/material-rounded/24/8B5CF6/edit--v1.png"
                    alt="left2"
                    className="mr-2"
                  />
                  Edit
                </button>
              </div>
            ) : (
              <button
                className="flex items-center text-blue-500 text-sm font-medium"
                style={{ color: "#8B5CF6" }}
              >
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios-filled/50/8B5CF6/left2.png"
                  alt="left2"
                  className="mr-2"
                />
                Reply
              </button>
            )}
          </div>
          <div className="col-span-12">
            <div className="text-sm text-gray-800 mb-2">
              {messageItem.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
