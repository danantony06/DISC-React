import React, {useState, useEffect} from 'react';
import './Login.css';

function Login(){

    const [token,setToken] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [protectedData, setProtectedData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        if (accessToken) {
            setToken(accessToken);
            window.history.replaceState(null, "", window.location.pathname);
          }
        }, []);





const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api-iffvi7ahr-daniel-antonys-projects-582fc591.vercel.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setToken(data.token);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api-iffvi7ahr-daniel-antonys-projects-582fc591.vercel.app/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setError("Registration successful! Please sign in.");
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchProtectedData = async () => {
    try {
      const response = await fetch("https://api-iffvi7ahr-daniel-antonys-projects-582fc591.vercel.app/users/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch protected data");
      }

      const data = await response.json();
      setProtectedData(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  


  return (
    <div className = "LoginDiv" style={{ padding: "20px", maxWidth: "500px", paddingLeft: "20px" , color: "orange"}}>
      <h1 className = "LoginTitle" >Welcome to Court Crew!</h1>

      {error && (
        <div
          style={{
            color: error.includes("successful") ? "green" : "red",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: error.includes("successful")
              ? "#e8f5e9"
              : "#ffebee",
          }}
        >
          {error}
        </div>
      )}

      {!token ? (
        <div>
          
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "8px" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "8px" }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleSignIn}
                style={{ padding: "10px 20px", flex: 1 }}
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                style={{ padding: "10px 20px", flex: 1 }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <h3>Your Token:</h3>
            <textarea
              readOnly
              value={token}
              style={{ width: "100%", height: "100px" }}
            />
          </div>

          <button onClick={fetchProtectedData} style={{ padding: "8px" }}>
            Fetch Protected Data
          </button>

          {protectedData && (
            <div>
              <h3>Protected Data:</h3>
              <pre>{JSON.stringify(protectedData, null, 2)}</pre>
            </div>
          )}

          <button
            onClick={() => {
              setToken("");
              setProtectedData(null);
            }}
            style={{ padding: "8px" }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};


export default Login;