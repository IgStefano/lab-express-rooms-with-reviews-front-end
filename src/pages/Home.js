import { useState, useEffect } from "React";
import axios from "axios";

export default function Home() {
  const { rooms, setRooms } = useState([]);

  async function getRooms() {
    const response = await axios.get("http://localhost:5000/api/v1/rooms");
    setRooms(response.data);
    return rooms.map((currentRoom) => {
      return (
        <div key={currentRoom.name}>
          <img src={currentRoom.imageUrl} alt={currentRoom.name} />
          <li>{currentRoom.name}</li>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>All Rooms</h1>
      <div>{getRooms()}</div>
    </div>
  );
}
