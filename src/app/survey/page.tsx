import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>SURVEY</p>
      </div>

      <div className={styles.grid}>By Edgar A Guevara.</div>
    </main>
  );
}
