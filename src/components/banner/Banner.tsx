import styles from './styles.module.css';

export const Banner = () => {
  return (
    <section id={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerInfo}>
            <h2>
              Enjoy Your
              Morning Coffee.
            </h2>
            <p>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
            <button className={styles.btnPrymary}>test coffee</button>
          </div>
          <button className={styles.videoBtn}>Play video</button>
        </div>
      </div>
    </section>
    
  )
}

