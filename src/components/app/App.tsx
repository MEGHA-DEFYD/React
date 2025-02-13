import { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import GifDisplay from "../GifDisplay/GifDisplay";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegistrationForm/RegisterForm";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import styles from "./App.module.css";

export default function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.container}>
        {/* Sidebar Section */}
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>

        {/* Gif and Authentication Section */}
        <div className={styles.gifLoginContainer}>
          <div className={styles.gifContainer}>
            <GifDisplay gifUrl="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" />
          </div>
          <div className={styles.authContainer}>
            {isRegistering ? (
              <RegisterForm setIsRegistering={setIsRegistering} />
            ) : (
              <LoginForm setIsRegistering={setIsRegistering} />
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className={styles.descriptionContainer}>
          <DescriptionBox description="The project contains many 2D games for fun. Click on any game to learn the rules and watch videos. Log in to get updates on new games. A chat system is available on the left panel." />
        </div>
      </div>
    </div>
  );
}
