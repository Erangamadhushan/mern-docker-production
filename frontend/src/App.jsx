import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>MERN Docker App</h1>
      <p>Backend Response:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;