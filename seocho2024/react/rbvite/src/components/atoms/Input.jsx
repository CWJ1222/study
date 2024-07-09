import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log(`Sign Up with ID: ${id}, Password: ${password}`);
    // Sign-up logic here
  };

  const handleLogin = () => {
    console.log(`Log In with ID: ${id}, Password: ${password}`);
    // Login logic here
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignUp}>회원가입</button>
      <button onClick={handleLogin}>로그인</button>
      <div className="card"></div>
    </div>
  );
}

export default App;
