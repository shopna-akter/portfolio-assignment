"use client"
import { useEffect, useState } from "react";

interface Message {
  _id: string;
  name: string;
  email: string;
  messege: string;
  subject: string;
}

const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/messages");
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) return <p className="text-center">Loading messages...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Messages</h2>
      <div className="grid gap-4 max-w-lg mx-auto">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-[#ff014f]"
          >
            <h3 className="font-semibold text-lg">{msg.name}</h3>
            <p className="text-sm text-gray-500">{msg.email}</p>
            <p className="mt-2 text-gray-700">{msg.subject}</p>
            <p className="text-xs text-gray-400 mt-2">{(msg.messege)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
