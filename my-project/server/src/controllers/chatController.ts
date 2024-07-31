import { Chat } from "../models/chat";
import { Request, Response } from "express";
import { saveChat, loadChat } from "../utils/fileUtils";

export const postChat = (req: Request, res: Response) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Write a text" });
  }

  const newChat: Chat = {
    id: Date.now(),
    text,
  };

  const chats = loadChat();
  chats.push(newChat);
  saveChat(chats);

  res.status(201).json({ message: "Success" });
};
