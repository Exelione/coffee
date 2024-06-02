import { Banner } from '../banner/Banner.tsx';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <>
    <Banner/>
    <div className={styles.container}>
      <ol className={styles.features}>
        <li>
          <span>01</span> Best Coffee Flavour
          <img src='/features1.png' alt="featuresImg" />
        </li>
        <li>
          <span>02</span> Place to get lost
          <img src='/features2.png' alt="featuresImg" />
        </li>
        <li>
          <span>03</span> Proper roesting
          <img src='/features3.png' alt="featuresImg" />
        </li>
      </ol>
    </div>
    </>
  )
}

