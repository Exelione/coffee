
import styles from './styles.module.css';

export const CoffeeMachine = () => {
  return (

    <section className={styles.coffeeMachine}>
      <div className={styles.wrapper}>
        <img src="/coffeeMachine.png" alt="coffeeMachine" />
        <div className={styles.coffeeMachineInfo}>
          <h2>Coffee<br />
            machine, buy for home</h2>
          <h3>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula
            volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib
            maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri
            ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</h3>
          <button>Discover now</button>
        </div>
      </div>
    </section>

  )
}

