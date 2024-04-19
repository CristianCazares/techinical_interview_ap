import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ClientCard from "./components/ClientCard";

const API_URL = "http://127.0.0.1:5000";

function App() {
  const [clients, setClients] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/clients`).then((res) => {
      setClients(res.data);
    });

  }, []);

  return (
    <div className="App">
      <h1>Clients</h1>
      <div className="clientList">
        {clients && clients.map((client) => (
          <ClientCard
            name={client.name}
            fLastName={client.fLastName}
            email={client.email}
            status={client.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
