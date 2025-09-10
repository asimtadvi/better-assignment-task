import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">Better Replica</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About</Link>
        <Link href="/mortgage-calculator">Calculator</Link>
        <Link href="/start">Start</Link>
      </nav>
    </header>
  );
}
