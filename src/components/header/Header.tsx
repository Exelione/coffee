import styles from './styles.module.css';
import classNames from 'classnames';

export const Header = () => {
    return (
        <header className={styles.header_section}>
            <div className={classNames(styles.container, styles.container_main)}>
                <div className={styles.header}>
                    <nav className={styles.nav_list}>
                        <ul className={styles.header_list}>
                            <li><a className={styles.navLinkSelected} href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li> <a href="#">Reservation</a></li>
                        </ul>
                        <img src="/Logo.svg" alt="logo" />
                        <ul className={styles.header_list}>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </nav>
                    <div className={styles.header_actions}>
                        <a href="#">
                            <span className="material-icons">
                                search
                            </span>
                        </a>
                        <a href="#"><span className="material-icons">
                            local_mall
                        </span></a>
                    </div>
                    <div>
                    </div>
                </div>
            </div>


        </header>
    )
}
