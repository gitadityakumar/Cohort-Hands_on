import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('from frontend : Hello Server!');
    };
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setReceivedMessages((prevMessages) => [...prevMessages, message.data]);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
      setMessage(''); // Clear input field after sending message
    }
  };

  if (!socket) {
    return <div>Connecting to socket server</div>;
  }

  return (
    <>
      <h1>Hi there</h1>
      
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={sendMessage}>Send</button>
      <div>
        {receivedMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </>

  );
}

export default App;
