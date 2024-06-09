import styles from './styles.module.css';

export const LatestNews = () => {
  return (
    <section className={styles.latestNews}>
      <h2>Testimonial</h2>
      <h3>Our latest news</h3>
      <div className={styles.wrapper}>
        <div className={styles.newsCard}>
          <img src="/news.png" alt="news" />
          <div className={styles.cardTittle}><span><span>By:&nbsp;  </span> rasaline</span><time dateTime='2024-06-09'>09.06.2024</time> </div>
          <p className={styles.cardInfo}>Ideal cocktails from barmen...</p>
          <a href="#">Read More <span className="material-icons">
            arrow_forward
          </span></a>
        </div>
        <div className={styles.newsCard}>
          <img src="/news2.png" alt="news" />
          <div className={styles.cardTittle}><span><span>By:&nbsp;  </span> rasaline</span> <time dateTime="2024-06-09">09.06.2024</time></div>
          <p className={styles.cardInfo}>Ideal cocktails from barmen...</p>
          <a href="#">Read More <span className="material-icons">
            arrow_forward
          </span></a>
        </div>
        <div className={styles.newsCard}>
          <img src="/news3.png" alt="news" />
          <div className={styles.cardTittle}><span><span>By:&nbsp;  </span> rasaline</span> <time dateTime="2024-06-09">09.06.2024</time></div>
          <p className={styles.cardInfo}>Ideal cocktails from barmen...</p>
          <a href="#">Read More <span className="material-icons">
            arrow_forward
          </span></a>
        </div>
      </div>
    </section>
  )
}

