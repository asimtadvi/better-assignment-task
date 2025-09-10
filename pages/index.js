import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Homeownership made simple</h1>
          <p>
            A digital-first approach to buying, selling, and financing your home.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/house-hero.jpg" alt="Dream Home" />
        </div>
      </section>

      <section className={styles.features}>
        <h2>Why choose Better Replica?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <img src="/images/fast.png" alt="Fast Approval" />
            <h3>Fast Approval</h3>
            <p>Get mortgage approvals within minutes, not weeks.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/low-rates.png" alt="Low Rates" />
            <h3>Low Rates</h3>
            <p>Save more with our competitive mortgage rates.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/support.png" alt="Support" />
            <h3>24/7 Support</h3>
            <p>Our team is here to guide you through every step.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
