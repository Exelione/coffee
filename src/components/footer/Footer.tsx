import styles from './styles.module.css';


export const Footer = () => {
    return (
        <footer>

            <nav className={styles.nav}>
                <img src="/Logo.svg" alt="logo" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Rerervation</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
                <div className={styles.mail}>
                    <input type="text" placeholder='Enter your email' />
                    <button><span className="material-icons">
                        arrow_forward
                    </span></button>
                </div>

            </nav>
            <div className={styles.rights}> exelione © 2024. All rights reserved.</div>
        </footer>
    )
}
