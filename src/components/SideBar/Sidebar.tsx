import { Home, Bookmark, MessageCircle, User, Settings } from "lucide-react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo} />
      <Home className={styles.icon} />
      <Bookmark className={styles.icon} />
      <MessageCircle className={styles.icon} />
      <User className={styles.icon} />
      <Settings className={styles.icon} />
    </div>
  );
};

export default Sidebar;
