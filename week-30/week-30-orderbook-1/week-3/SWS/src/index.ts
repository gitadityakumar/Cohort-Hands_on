import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const subscriptions: {[key: string]: {
    ws: WebSocket,
    rooms: string[]
}} = {

}

setInterval(() => {
    console.log(subscriptions);
}, 5000);

wss.on('connection', function connection(userSocket) {
    const id = randomId();
    subscriptions[id] = {
        ws: userSocket,
        rooms: []
    }
  
    userSocket.on('message', function message(data) {
      try {
        
        const parsedMessage = JSON.parse(data as unknown as string);
        
        if (parsedMessage.type === "SUBSCRIBE") {
            subscriptions[id].rooms.push(parsedMessage.room);
        }
        
        if (parsedMessage.type === "sendMessage") {
            const message = parsedMessage.message;
            const roomId = parsedMessage.roomId;
            
            Object.keys(subscriptions).forEach((userId) => {
                const { ws, rooms } = subscriptions[userId];
                if (rooms.includes(roomId)) {
                    ws.send(message);
                }
            });
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
        // Optionally, handle the error (e.g., log it, notify the client, etc.)
    }
    });

});

function randomId() {
    return Math.random();
}