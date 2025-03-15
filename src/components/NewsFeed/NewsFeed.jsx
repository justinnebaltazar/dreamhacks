import news from "../../data/news-preview.json";
import styles from "./NewsFeed.module.css";
import { NewsCard } from "../NewsCard/NewsCard";

export const NewsFeed = () => {
    return (
        <section>
            <div className={styles.header}>
                <h1>News</h1>
                <p>This week's most popular articles</p>
            </div>
            <div >
                {news.map((newsItem, id) => (
                    <div className={styles.newsContainer} key={id}>
                        <NewsCard key={id} news={newsItem} isFirst={id === 0}/>
                    </div>

                ))}
            </div>
            
        </section>
    )
}