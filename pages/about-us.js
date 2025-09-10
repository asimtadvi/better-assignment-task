import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

export default function AboutUs() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>About Better Replica</h1>
          <p className={styles.lead}>
            We’re building a modern, digital-first mortgage experience — focused on transparency, speed,
            and great customer support.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <h2>Our Mission</h2>
          <p>
            To simplify home financing by combining technology with expert guidance so customers can make
            better decisions and close faster.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Customer-first</h3>
              <p>Clear steps, honest pricing, and dedicated support at every stage of your home journey.</p>
            </div>

            <div className={styles.card}>
              <h3>Fast & reliable</h3>
              <p>Digitally streamlining underwriting and approvals to save you time and uncertainty.</p>
            </div>

            <div className={styles.card}>
              <h3>Secure</h3>
              <p>Industry-standard encryption and privacy practices keep your information safe.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
