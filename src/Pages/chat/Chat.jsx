import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './chat.css';
import { Link } from 'react-router-dom';
const Chat = () => {
  const [chats, setChats] = useState([
    {
      id: 'chat1',
      user: 'Gus M.',
      messages: [
        { text: 'Hello!', sent: true },
        { text: 'Hi there!', sent: true },
        { text: 'How are you?', sent: true },
        { text: 'What are you doing?', sent: true },
      ],
    },
    {
      id: 'chat2',
      user: 'Sam S.',
      messages: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          sent: true,
        },
        { text: 'Lorem ipsum dolor sit amet, ', sent: true },
      ],
    },
    { id: 'chat3', user: 'Andrew H.', messages: [] },
    { id: 'chat4', user: 'VooDoo V.', messages: [] },
    { id: 'chat5', user: 'Paco S.', messages: [] },
    { id: 'chat6', user: 'Sena K.', messages: [] },
    { id: 'chat7', user: 'Julia M.', messages: [] },
    { id: 'chat8', user: 'More User', messages: [] },
    { id: 'chat9', user: 'One User', messages: [] },
    { id: 'chat10', user: 'User', messages: [] },
    { id: 'chat10', user: 'User', messages: [] },
   
  ]);

  const [selectedChat, setSelectedChat] = useState(chats[0].id);

  const handleSendMessage = message => {
    const updatedChats = chats.map(chat => {
      if (chat.id === selectedChat) {
        return {
          ...chat,
          messages: [...chat.messages, { text: message, sent: true }],
        };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  const renderChatMessages = () => {
    const selectedChatObject = chats.find(chat => chat.id === selectedChat);
    const messages = selectedChatObject.messages;

    // Reverse the messages array to show the latest message at the bottom
    return messages
      .slice()
      .reverse()
      .map((message, index) => (
        <div
          key={index}
          className={`message ${message.sent ? 'sent' : 'received'}`}
        >
          {message.text}
        </div>
      ));
  };

  const renderSentMessages = () => {
    const selectedChatObject = chats.find(chat => chat.id === selectedChat);
    const messages = selectedChatObject.messages;

    // Reverse the messages array to show the latest message at the bottom
    const sentMessages = messages
      .filter(message => message.sent)
      .slice()
      .reverse()
      .map((message, index) => (
        <div key={index}>
          <div className='sent-message p-2 rounded-3 mt-4'>{message.text}</div>
          <div className='message-details text-end'>
            <span className='timestamp'>12:40 PM</span>
            <img src='./double tick.svg' className='tick-icon' alt='tick' />
          </div>
        </div>
      ));

    return sentMessages;
  };
  return (
    <>
      <div className='bg-formm chatnone' style={{}}>
        <Container className='pt-5'>
          <Row className='mt-5 bg-white shadow'>
            <Col xl={3} className='bg-white  '>
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
            <Col xl={9} className=' '>
              <Row>
                <div className='d-flex p-2'>
                  <Link to='/profile'>
                    <div
                      className='d-flex justify-content-center'
                      style={{
                        backgroundColor: '#FBCACA',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                      }}
                    >
                      <p>G</p>
                    </div>
                  </Link>{' '}
                  <div className='ms-3'>
                    <p className='my-0'>Gus M.</p>
                    <small>Last seen 1 hour ago</small>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className='bg-white shadow mb-5'>
            <Col lg={3} xl={3} md={3} xs={4} className='shadow'>
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
                      backgroundColor:
                        selectedChat === chat.id ? '#ECECEC' : '#fff',
                    }}
                    onClick={() => setSelectedChat(chat.id)}
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
                        <h5>{chat.user}</h5>
                        <p style={{ fontSize: '12px' }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
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
              xl={9}
              md={9}
              xs={8}
              className='pt-4'
              style={{ backgroundColor: '#F8F8F8' }}
            >
              {selectedChat === 'chat1' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center p-2 text-muted m-auto rounded-3 '
                    style={{
                      backgroundColor: '#F3F3F3',
                      width: '100px',
                    }}
                  >
                    <p className='my-0 text-center'>Yesterday</p>
                  </div>

                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat1'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat2' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat2'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat3' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat3'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat4' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat4'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat5' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat5'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat6' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat6'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat7' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat7'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat8' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat8'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat9' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat9'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              {selectedChat === 'chat10' && (
                <div
                  style={{ width: '100%', height: '60vh', overflowY: 'auto' }}
                >
                  <div>
                    <div style={{ width: '40%' }}>
                      <p className='p-3 bg-white rounded-3'>
                        Lorem ipsum dolor sit amet,
                      </p>
                      <div
                        className='my-0'
                        style={{ transform: 'translateY(-10px)' }}
                      >
                        <p className='my-0' style={{ fontSize: '10px' }}>
                          12:40 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <p>Yesterday</p>
                  </div>
                  <div className='chat-window w-50 d-block ms-auto text-wrap'>
                    {selectedChat === 'chat10'
                      ? renderSentMessages()
                      : renderChatMessages()}
                  </div>
                </div>
              )}
              <Row
                className='m-auto w-50 text-center'
                style={{ position: 'absolute', top: '85%' }}
              >
                <Col xs={12}>
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
