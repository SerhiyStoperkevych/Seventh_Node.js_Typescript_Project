import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import messageRoutes from './routes/messageRoutes';
import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 3001;
const server = http.createServer(app);

// Configure CORS for Express
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Use routes
app.use(messageRoutes);
app.use(userRoutes);
app.use(chatRoutes);

// Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Your frontend origin
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg); // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
