
import styles from './styles.module.css';

export const Menu = () => {
  return (

    <section className={styles.menu}>

      <h2>Menu</h2>
      <h3>Coffee popular menu</h3>

      <ul className={styles.menuList}>
        <li><strong><img src="/menu.png" alt="menu" />Americano rosted gred </strong><span>$12:00</span></li>
        <li><strong><img src="/menu3.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu5.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu3.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu2.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu4.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
        <li><strong><img src="/menu3.png" alt="menu" />Americano rosted gred </strong> <span>$12:00</span></li>
      </ul>

    </section>

  )
}

