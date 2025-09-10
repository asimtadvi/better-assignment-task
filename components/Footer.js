import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h4 className={styles.heading}>Company</h4>
          <ul className={styles.list}>
            <li className={styles.item}><Link href="/about-us" className={styles.link}>About Us</Link></li>
            <li className={styles.item}><Link href="/start" className={styles.link}>Get Started</Link></li>
            <li className={styles.item}><a href="#" className={styles.link}>Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Support</h4>
          <ul className={styles.list}>
            <li className={styles.item}><a href="/contact-us" className={styles.link}>Contact Us</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Help Center</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Legal</h4>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#" className={styles.link}>Privacy Policy</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Terms of Use</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Disclosures</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>More</h4>
          <ul className={styles.list}>
            <li className={styles.item}><a href="#" className={styles.link}>Investor Relations</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Press</a></li>
            <li className={styles.item}><a href="#" className={styles.link}>Others</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Better.com Replica. All rights reserved.</p>
      </div>
    </footer>
  );
}
