import { useState } from "react";
import styles from "./RegisterForm.module.css";

interface RegisterFormProps {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ setIsRegistering }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!username.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const hashedPassword = await hashPassword(password);

    // Store username and hashed password
    localStorage.setItem("username", username);
    localStorage.setItem("password", hashedPassword);

    alert("Registration successful! You can now log in.");
    setIsRegistering(false); // Switch to login form after successful registration
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>
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
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className={styles.inputField}
        placeholder="Re-enter Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p className={styles.errorText}>{error}</p>}
      <button className={styles.submitButton} onClick={handleRegister}>
        Register
      </button>
      <p className={styles.switchText}>
        Already have an account?{" "}
        <span
          className={styles.switchLink}
          onClick={() => setIsRegistering(false)} // Switch to login form
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
