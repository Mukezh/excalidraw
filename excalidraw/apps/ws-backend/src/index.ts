import { WebSocket, WebSocketServer } from "ws";

const ws = new WebSocketServer({port : 8080})
ws.on('connection', function connection(ws) {
    ws.send('you are connected');
})