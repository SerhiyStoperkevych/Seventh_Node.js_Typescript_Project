import fs from 'fs';
import { User } from '../models/user';
import { Message } from '../models/message';
import { Chat } from '../models/chat';
import { messagesFilePath, usersFilePath, chatFilePath } from './paths';

export const loadMessages = (): Message[] => {
  if (fs.existsSync(messagesFilePath)) {
    const data = fs.readFileSync(messagesFilePath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
};

export const loadUsers = (): User[] => {
  if (fs.existsSync(usersFilePath)) {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
};

export const loadChat = (): Chat[] => {
  if (fs.existsSync(chatFilePath)) {
    const data = fs.readFileSync(chatFilePath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
};

export const saveMessages = (messages: Message[]) => {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
};

export const saveUsers = (users: User[]) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const saveChat = (chat: Chat[]) => {
  fs.writeFileSync(chatFilePath, JSON.stringify(chat, null, 2));
};
