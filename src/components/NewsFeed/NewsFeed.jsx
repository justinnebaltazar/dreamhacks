import news from "../../data/news-preview.json";
import styles from "./NewsFeed.module.css";
import { NewsCard } from "../NewsCard/NewsCard";

export const NewsFeed = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>News</h1>
            </div>
            <div className={styles.newsContainer}>
                {news.map((newsItem, id) => (
                    <NewsCard className={styles.news} key={id} news={newsItem} isFirst={id === 0}/>
                ))}
            </div>
            
        </section>
    )
}