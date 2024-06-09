import styles from './styles.module.css';

export const Reservation = () => {
  return (
    <section className={styles.reservation}>
      <div className={styles.wrapper}>
        <div className={styles.reservationMap}></div>
        <form className={styles.reservationInfo}>
          <div className={styles.tittle}>
            <h2>Reservation</h2>
            <h3>Booking a table</h3>
            </div>

          <ul>
            <input type="text" placeholder='4 person' />
            <input type="text" placeholder='12.25, 2020' />
            <input type="text" placeholder='11:00 AM' />
          </ul>
          <button type='submit'>BOOK TABLE</button>
        </form>
      </div>
    </section>
  )
}

