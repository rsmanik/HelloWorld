import React, { useEffect, useState, useRef } from 'react';

import './dashboard.css';

import { ENDPOINT_DASHBOARD_POST, URL_BASE } from '../../../constants';

import { Card, CardContent, Typography, Stack, Box, Button, Tabs, Tab, Paper } from '@mui/material';

import ChatTextOnly from '../../playdemy/dashboard/TextOnly';
import ChatTextWithInput from '../../playdemy/dashboard/TextWithInput';
import ChatTextWithInputButton from '../../playdemy/dashboard/TextWithInputButtons';



interface ChatMessage {
  type: 'textOnly' | 'textWithInput' | 'textWithInputButton';
  text: string;
  inputPlaceholder?: string;
}

interface ApiResponse {
  content: ChatMessage[];
}


const Dashboard: React.FC = () => {
  const greetingMessage = 'Good Afternoon, Hope you are having a great day';

  // State variable to store chat messages
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // State variable to store the JSON data received from the API call
  const [apiData, setApiData] = useState<ApiResponse | null>(null);

  // State variable to store user input
  const [userInput, setUserInput] = useState<string>('');

  // Ref for the active chat element
  const activeChatRef = useRef<HTMLDivElement | null>(null);

  // Function to handle API fetch calls
  const fetchApiData = async (requestData: { userInput: string }): Promise<ApiResponse | void> => {
    try {
      const response = await fetch(URL_BASE + ENDPOINT_DASHBOARD_POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data as ApiResponse;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return undefined; // Return undefined in case of an error
    }
  };

  // useEffect to fetch the JSON data when the component mounts
  useEffect(() => {
    // Define the initial request data
    const initialRequestData = {
      userInput: '', // Initial user input, you can modify this if needed
    };

    fetchApiData(initialRequestData).then((data) => {
      if (data !== undefined) {
        setApiData(data);
        console.log('DATA: ', data);
        // Assuming the JSON data has a 'content' property containing initial chat messages
        if (data.content) {
          setChatMessages(data.content);
        }
      }
    });
  }, []);

  // Scroll behavior
  useEffect(() => {
    if (activeChatRef.current) {
      const chatContainer = document.querySelector(".chatContainer");
        console.log(chatContainer);
      const middlePosition = chatContainer.clientHeight / 2 - activeChatRef.current.offsetHeight / 2;
      chatContainer.scrollTo({
        top: activeChatRef.current.offsetTop - middlePosition,
        behavior: "smooth"
      });
    }
  }, [chatMessages]);


  // Handle User Input Enter
  const handleInputEnter = (inputValue: string) => {
    if (inputValue !== undefined) {
      console.log('User entered:', inputValue);
      // Update the userInput state with the user's input
      setUserInput(inputValue);
      handleButtonClick();
    }
  };


  const handleOptionClick = (inputValue: string) => {
    if (inputValue !== undefined) {
      console.log('User entered:', inputValue);
      // Update the userInput state with the user's input
      handleButtonClick();
    }
  };


  // Handle Next button click
  const handleButtonClick = () => {
    if (apiData) {
      // Define the request data with user input
      const requestData = {
        userInput: userInput,
      };

      fetchApiData(requestData).then((newData) => {
        if (newData !== undefined) {
          console.log('New Data from API: ', newData);
          // Assuming the JSON data has a 'content' property containing new chat messages
          if (newData.content) {
            // Append the new messages to the chatMessages state
            setChatMessages((prevMessages) => [...prevMessages, ...newData.content]);
          }
        }
      });
    }
  };

  // Render the component
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100%">
      {/* Greetings Text */}
      <div className="greeting">{greetingMessage}</div>

      {/* Chat Boxes */}
      <div className="chatContainer">
        {chatMessages.map((message, index) => {
          switch (message.type) {
            case 'textOnly':
              return (
                <ChatTextOnly
                  key={index}
                  text={message.text}
                  ref={index === chatMessages.length - 1 ? activeChatRef : null}
                />
              );

            case 'textWithInput':
              return (
                <ChatTextWithInput
                  key={index}
                  text={message.text}
                  inputPlaceholder={message.inputPlaceholder || 'Enter your response here'}
                  onInputEnter={handleInputEnter}
                  ref={index === chatMessages.length - 1 ? activeChatRef : null}
                />
              );

            case 'textWithInputButton':
              return (
                <ChatTextWithInputButton
                  key={index}
                  text={message.text}
                  inputPlaceholder={message.inputPlaceholder || 'Enter your response here'}
                  onInputEnter={handleInputEnter}
                  onOptionClick={handleOptionClick}
                  ref={index === chatMessages.length - 1 ? activeChatRef : null}
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </Box>
  );
};


export default Dashboard;
