
import styles from './styles.module.css';

export const Testimonial = () => {
  return (

    <section className={styles.testimonialSection}>
      <h2>Testimonial</h2>
      <h3>Says our customers</h3>
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonial}>
          <div className={styles.testimonialInfo}>
            <img src="/testi1.png" alt="user" />
            <p>Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP.</p>
          </div>

          <div className={styles.testimonialRaiting}>
            <div className={styles.raitingInfo}>
              <span>John Smith</span>
              <p>Product Designer</p>
            </div>

            <div className={styles.stars}>
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
            </div>

          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.testimonialInfo}>
            <img src="/testi2.png" alt="user" />
            <p>Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP.</p>
          </div>

          <div className={styles.testimonialRaiting}>
            <div className={styles.raitingInfo}>
              <span>Brett Lee</span>
              <p>User Experience Designer</p>
            </div>

            <div className={styles.stars}>
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
              <img src="/goldStar.svg" alt="star" />
            </div>

          </div>
        </div>
      </div>
      <div className={styles.testimonialAction}>
        <div className={styles.count}>
          <b>2/6 People</b>
          <progress className={styles.progress} value={35} max={100}></progress>
        </div>
        <div className={styles.progressBtns}>
          <button><span className="material-icons">
            west
          </span></button>
          <button><span className="material-icons">
            east
          </span></button>
        </div>

      </div>
    </section>

  )
}

