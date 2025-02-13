import { useState } from "react";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsRegistering }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleLogin = async () => {
    const storedUsername = localStorage.getItem("username");
    const storedHashedPassword = localStorage.getItem("password");

    if (!storedUsername || !storedHashedPassword) {
      setError("No registered account found.");
      return;
    }

    const hashedInputPassword = await hashPassword(password);

    if (
      username === storedUsername &&
      hashedInputPassword === storedHashedPassword
    ) {
      alert("Login successful!");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Log In to Gaming Realm</h2>
      <p className={styles.subtext}>Welcome Back! Please log in to continue.</p>
      <hr />
      <input
        type="text"
        className={styles.inputField}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className={styles.inputField}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className={styles.errorText}>{error}</p>}
      <button className={styles.loginButton} onClick={handleLogin}>
        Login
      </button>
      <p className={styles.registerText}>
        Don't have an account?{" "}
        <span
          className={styles.registerLink}
          onClick={() => setIsRegistering(true)} // Switch to register form
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
