import"./Chat.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect(import.meta.env.VITE_SOCKET_SERVER);

function Chat() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room.trim() !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "" && room.trim() !== "") {
      socket.emit("send_message", { message, room });
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  const handleChangeRoom = (event) => {
    setRoom(event.target.value || "");
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value || "");
  };

  return (
    <div className="App">
      <h1>Welcome to the Chat Room!</h1>
      <div className="box">
      <input type="text" placeholder="Room" name="room" onChange={(e) => { setRoom(e.target.value) }} />
      <button id="btn1" onClick={joinRoom} style={{backgroundColor:"black", color:"white", padding: "0.5rem", marginLeft:"2%"}}>Join Room</button>
      <br></br>
      <br></br>
      <input type="text" placeholder="Message" name="message" onChange={(e) => { setMessage(e.target.value) }} />
      <button id="btn1" onClick={sendMessage} style={{backgroundColor:"black", color:"white", padding: "0.5rem", marginLeft:"2%"}}>Send Message</button>
      </div>
    <br></br>
    <br></br>
      <h2>Messages</h2>
      {messageReceived}
    </div>
  );
}

export default Chat;
