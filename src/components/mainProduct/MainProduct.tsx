
import styles from './styles.module.css';

export const MainProduct = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <div className={styles.title}>
            <h2>Popular Product</h2>
            <h3>Coffee popular Product</h3>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.productCard}>
              <img className={styles.mainProductImg} src="/product.png" alt="productImg" />
              <div className={styles.coffeRait}><h2>Coffee</h2>
                <div className={styles.stars}><img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star2.svg" alt="star" /></div>
              </div>
              <h3>brazil coffee gred</h3>
              <p>Price - <span>$320.00/</span> <span>$358</span></p>
              <button><span className="material-icons">
                local_mall
              </span> Add to cart</button>
            </div>
            <div className={styles.productCard}>
              <img className={styles.mainProductImg} src="/product.png" alt="productImg" />
              <div className={styles.coffeRait}><h2>Coffee</h2>
                <div className={styles.stars}><img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star2.svg" alt="star" /></div>
              </div>
              <h3>brazil coffee gred</h3>
              <p>Price - <span>$320.00/</span> <span>$358</span></p>
              <button><span className="material-icons">
                local_mall
              </span> Add to cart</button>
            </div>
            <div className={styles.productCard}>
              <img className={styles.mainProductImg} src="/product.png" alt="productImg" />
              <div className={styles.coffeRait}><h2>Coffee</h2>
                <div className={styles.stars}><img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star.svg" alt="star" />
                  <img src="/star2.svg" alt="star" /></div>
              </div>
              <h3>brazil coffee gred</h3>
              <p>Price - <span>$320.00/</span> <span>$358</span></p>
              <button><span className="material-icons">
                local_mall
              </span> Add to cart</button>
            </div>

          </div>
          <a href='#' className={styles.allProduct}>View all product</a>
        </div>
      </div>
    </section >
  )
}

