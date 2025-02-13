import styles from "./GifDisplay.module.css";

interface GifDisplayProps {
  gifUrl: string;
}

const GifDisplay: React.FC<GifDisplayProps> = ({ gifUrl }) => {
  return (
    <div className={styles.gifContainer}>
      <img src={gifUrl} alt="GIF" className={styles.gifImage} />
    </div>
  );
};

export default GifDisplay;
