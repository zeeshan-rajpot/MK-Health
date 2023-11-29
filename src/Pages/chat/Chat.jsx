import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { Col, Container, Row } from 'react-bootstrap';
import './chat.css';

// import { Link } from 'react-router-dom';
const Chat = () => {

  const [socket, setSocket] = useState(null);
  const [conversationData, setConversationData] = useState([]);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(chats.length > 0 ? chats[0].id : null);
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [sendermsgId, setSendermsgId] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chatSelected, setChatSelected] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDIxYWY1YTRhMTcxODEyNTFhNDgwZSIsImlhdCI6MTcwMDE0Mjg5MH0.pdZv1QQIsH4xF4oMib5MIaeELiyEquvetQ2q39lQ8m8'; // Replace with your actual access token

  const token =  localStorage.getItem('token');



  // State variable to store user ID


  useEffect(() => {
    // Fetch user details when the component mounts
    fetchUserDetails();
  }, []);

  // Function to fetch user details using the token
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('https://hkhealth.azurewebsites.net/api/auth/getdetails', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      // Log the user ID to the console
      console.log(response.data.data._id);

      // Store user details in the state variable
      setUserDetails(response.data);

      // Store the user ID in the state variable
      setSendermsgId(response.data.data._id);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };




// console.log(sendermsgId)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hkhealth.azurewebsites.net/api/messenges/conversations', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(response.data)
        setConversationData(response.data);
      } catch (error) {
        console.error('Error fetching conversation data:', error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const formattedChats = conversationData.map((conversation) => {
      const participants = conversation.participants.map((participant) => participant.name);
      return {
        id: conversation._id,
        user: participants.join(', '),
        messages: [], // You might want to fetch messages from the API as well
      };
    });

    setChats(formattedChats);
  }, [conversationData]);

  useEffect(() => {
    const newSocket = io('https://hkhealth.azurewebsites.net'); // Replace with your server URL
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Connected to the Socket.IO server');
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [socket]);

  const handleJoinConversation = (conversationId) => {
    if (socket) {
      const userId = sendermsgId; // Replace with the actual user ID
      socket.emit('joinConversation', { conversationId, userId });
      setSelectedChat(conversationId);
    } else {
      console.error('Socket is not initialized');
    }
  };

  const handleSendMessage = (message) => {
    if (socket && selectedChat && message) {
      const senderId = sendermsgId; // Replace with the actual sender ID
      const updatedChats = chats.map((chat) => {
        if (chat.id === selectedChat) {
          const conversationId = chat.id;
          // console.log(chat.id);
          // console.log(senderId);
          // console.log(message);
          const updatedMessages = Array.isArray(chat.messages) ? [...chat.messages] : []; // Check if messages is an array
          updatedMessages.push({ text: message, sent: true });
          
          socket.emit('newMessage', {
            conversationId: conversationId,
            senderId: senderId,
            text: message,
          });
          
          return {
            ...chat,
            messages: updatedMessages,
          };
        }
        return chat;
      });
  
      setChats(updatedChats);
      setMessage('');
    } else {
      console.error('Socket is not initialized or selectedChat is null or message is empty');
    }
  };
  

  const renderChatMessages = () => {
    const selectedChatObject = chats.find(chat => chat.id === selectedChat);
  
    if (!selectedChatObject || !selectedChatObject.messages) {
      return <div className="default-message">No messages yet. Start the conversation!</div>;
    }
  
    const messages = selectedChatObject.messages;
  
    const messageComponents = messages.map((message, index) => {
      const isSender = message && message.sender && message.sender._id === sendermsgId; // Replace with your user ID
  
      return (
        <div key={index} className={isSender ? 'sent-message' : 'received-message'}>
          {isSender ? (
            <>
            <div className='w-50 ms-auto'>
<div className='sent-message p-2 rounded-3 mt-4 ' style={{ background: '#FEF3D5', alignSelf: 'flex-start' }}>
                {message.messageText}
              </div>
              <div className='message-details text-end'>
                <span className='timestamp'>12:40 PM</span>
                <img src='./double tick.svg' className='tick-icon' alt='tick' />
              </div>
            </div>
              
            </>
          ) : (
            <>         
            <div className=' w-50 me-auto'>
            <div
              className='received-message p-2 rounded-3 mt-4'
              style={{ background: '#FFFFFF', alignSelf: 'flex-start' }}
            >
              {message.messageText}
            </div>
            <div className='message-details text-end'>
                <span className='timestamp'>12:40 PM</span>
                <img src='./double tick.svg' className='tick-icon' alt='tick' />
              </div>
            </div>
              
              
            </>

          )}
        </div>
      );
    });
  
    return (
      <div style={{ height: '50vh', overflowX: 'auto' }}>
        {messageComponents.reverse()} {/* Reverse to show the latest messages at the bottom */}
      </div>
    );
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hkhealth.azurewebsites.net/api/messenges/${selectedChat}?page=1`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        console.log('Message API Response:', response.data); // Add this line to log the response
  
        const updatedChats = chats.map((chat) => {
          if (chat.id === selectedChat) {
            return {
              ...chat,
              messages: response.data,
            };
          }
          return chat;
        });
        setChats(updatedChats);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    if (selectedChat) {
      fetchData();
    }
  }, [selectedChat, token, chats]);



  return (
    <>
      <div className='bg-formm chatnone' style={{}}>
        <Container className='' >
          <Row className=' bg-white shadow mt-5' >
            <Col md={3} className='bg-white  '>
              <Row>
                <div className='d-flex justify-content-between align-items-center '>
                  <div className='d-flex'>
                    {' '}
                    <p className='my-0'>All Message</p>
                    <img
                      src='./Path 32622.svg'
                      width='10'
                      className='ms-3'
                      alt='drop down menu'
                    />
                  </div>
                  <div>
                    <img src='./Search.svg' alt='pan button' width='20' />
                  </div>
                </div>
              </Row>
            </Col>
            <Col md={9} className={!chatSelected ? 'd-none' : ''}>
              <Row >
              <div className='d-flex p-2'>
        {/* Displaying selected user information */}
        {selectedUser && (
          <>
            <div
              className='d-flex justify-content-center'
              style={{
                backgroundColor: '#FBCACA',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
              }}
            >
              <p>{selectedUser[0]}</p>
            </div>
            <div className='ms-3'>
              <p className='my-0'>{selectedUser}</p>
              <small>Last seen 1 hour ago</small>
            </div>
          </>
        )}
      </div>
              </Row>
            </Col>
          </Row>
          <Row className='bg-white shadow mb-5 height' >
            <Col lg={3}  md={3} xs={4} className='shadow'>
              <div
                className=''
                style={{
                  overflowY: 'auto',
                  maxHeight: '80vh',
                  // padding: '15px',
                }}
              >
      {chats.map(chat => (
  <div
    key={chat.id}
    className='chat-list'
    style={{
      backgroundColor: selectedChat === chat.id ? '#ECECEC' : '#fff',
    }}
    
    onClick={() => {
      handleJoinConversation(chat.id)
      setChatSelected(true);
      setSelectedUser(chat.user);
    }}
  >
    <div className='d-flex justify-content-center'>
      <div
        className='d-flex justify-content-center align-items-center mt-2'
        style={{
          backgroundColor: '#FBCACA',
          borderRadius: '50%',
          width: '50px',
          height: '20px',
        }}
      >
        <p className='my-0' style={{ fontSize: '13px' }}>
          {chat.user[0]}
        </p>
      </div>
      <div className='ms-3'>
        <p>{chat.user}</p>
        <p style={{ fontSize: '12px' }} className='d-none d-md-block'>
          {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].messageText : ''}
        </p>
      </div>
      <div className='ms-0 text-nowrap '>
        <p style={{ fontSize: '11px' }} className='my-0'>
          1.23 PM
        </p>
      </div>
    </div>
  </div>
))}

              </div>
            </Col>

            <Col
              lg={9}
             
              md={9}
              xs={8}
              className='pt-4'
              style={{ backgroundColor: '#F8F8F8' }}
            >
           {renderChatMessages()}

           {/* {Array.from({ length: 10 }, (_, index) => index + 1).map((chatNumber) => (
  selectedChat === `${chatNumber}` && renderChatMessages(chatNumber)
))} */}
              <Row
                className='m-auto w-50 text-center'
                style={{ position: 'absolute', top: '78%' }}
              >
                <Col xs={12} className={!chatSelected ? 'd-none' : ''}>
                  <div className='message-input d-flex align-items-center'>
                    <input
                      type='text'
                      placeholder='Write message ..'
                      className='w-100 p-4 border-0 shadow rounded-3 text-mute'
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          handleSendMessage(e.target.value);
                          e.target.value = '';
                        }
                      }}
                    required
                    />
                    <div
                      className='p-3 d-flex justify-content-center align-items-center rounded-3'
                      style={{
                        backgroundColor: '#FAB915',
                        width: '50px',
                        transform: 'translateX(-60px)',
                      }}
                      onClick={() => {
                        handleSendMessage(
                          document.querySelector('.message-input input').value
                        );
                        document.querySelector('.message-input input').value =
                          '';
                      }}
                    >
                      <img src='./send button.svg' alt='sent button' />
                    </div>
                  </div>
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Chat;
