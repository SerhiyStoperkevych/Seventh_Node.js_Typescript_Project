import { Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

export function setupSocket(server: HttpServer): SocketIOServer {
  const io = new SocketIOServer(server);

  io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    // Handle a message event from the client
    socket.on('message', (data: any) => {
      console.log('Message received: ', data);
      
      // Emit a response back to the client
      socket.emit('response', 'Message received');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
}
