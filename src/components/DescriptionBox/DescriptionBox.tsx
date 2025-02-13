import styles from "./DescriptionBox.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const DescriptionBox: React.FC<{ description: string }> = ({ description }) => {
  return (
    <div className={styles.descriptionContainer}>
      
      <img src={img1} alt="Top Visual" className={styles.descriptionImage} />

    
      <h2 className={styles.title}>Retro Hub</h2>
      <h3 className={styles.subtitle}>About the Hub</h3>

      
      <p className={styles.description}>{description}</p>

      {/* ✅ Bottom Image */}
      <img src={img2} alt="Bottom Visual" className={styles.descriptionImage} />
    </div>
  );
};

export default DescriptionBox;
