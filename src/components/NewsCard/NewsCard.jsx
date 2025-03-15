import styles from "./NewsCard.module.css";
import { getImageUrl } from "../../helper/utils";

export const NewsCard = ({ news: { title, datePublished, author, description, filePath, pageLink }, isFirst }) => {
    const handleClick = () => {
        window.location.href = pageLink;
    };

    return (
        <div className={styles.container} onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className={styles.imageContainer}>
                <img src={getImageUrl(filePath)} alt={`Image of ${title}`} className={styles.cover} />
            </div>
            <div className={styles.preview}>
                <h2 className={styles.title}>{title}</h2>
                <h4 className={styles.author}>{author}</h4>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    );
};

